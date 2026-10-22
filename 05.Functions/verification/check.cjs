// Run from any directory with: node /path/to/05.Functions/verification/check.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const cases = require('./expected-outputs.json');

for (const test of cases) {
  const file = path.join(root, test.file);
  const syntax = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  assert.equal(syntax.status, 0, test.file + ': ' + syntax.stderr);
  const result = spawnSync(process.execPath, [file], { encoding: 'utf8', timeout: 5000 });
  assert.equal(result.stdout.replace(/\n$/, ''), test.stdout, test.file + ': output');
  assert.equal(result.status, test.error ? 1 : 0, test.file + ': exit status');
  if (test.error) assert.ok(result.stderr.includes(test.error), test.file + ': expected error');
  else assert.equal(result.stderr, '', test.file + ': unexpected stderr');
}

function evaluate(question, expression) {
  const context = vm.createContext({ console: { log() {} } });
  vm.runInContext(fs.readFileSync(path.join(root, `Q-${String(question).padStart(2, '0')}.js`), 'utf8'), context);
  return vm.runInContext(expression, context);
}

for (const [percentage, grade] of [[90, 'A+'], [89.99, 'A'], [80, 'A'], [79.99, 'B'], [70, 'B'], [69.99, 'C'], [60, 'C'], [59.99, 'D'], [40, 'D'], [39.99, 'F'], [0, 'F'], [100, 'A+']]) {
  assert.equal(evaluate(16, `calculateGrade(${percentage})`), grade);
}
assert.equal(evaluate(6, 'isEven(0)'), true);
assert.equal(evaluate(6, 'isEven(-4)'), true);
assert.equal(evaluate(6, 'isEven(-3)'), false);
assert.equal(evaluate(15, 'maxOfTwo(-5, -2)'), -2);
assert.equal(evaluate(15, 'maxOfTwo(7, 7)'), 7);
assert.equal(evaluate(17, 'calculateFinalPrice(2500, 0)'), 2500);
assert.equal(evaluate(17, 'calculateFinalPrice(2500, 100)'), 0);
assert.equal(evaluate(18, 'celsiusToFahrenheit(-40)'), -40);
assert.equal(evaluate(18, 'fahrenheitToCelsius(-40)'), -40);
for (const [question, fn] of [[14, 'generateReport'], [20, 'processStudent']]) {
  assert.ok(evaluate(question, `${fn}('Boundary', 40, 40, 40)`).endsWith('Result: Pass'));
  assert.ok(evaluate(question, `${fn}('Boundary', 39, 40, 40)`).endsWith('Result: Fail'));
}
assert.equal(evaluate(20, 'compareAverages(50, 50)'), 'Both averages are equal');
assert.equal(evaluate(20, 'compareAverages(51, 50)'), 'First average is higher');
assert.equal(evaluate(20, 'compareAverages(50, 51)'), 'Second average is higher');
console.log(`PASS: ${cases.length} standalone solutions, expected errors, and function boundary checks.`);
