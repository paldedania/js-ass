# JavaScript functions, scope and hoisting

Completed solutions for both assignment files in the supplied course folder:

- [Functions assignment](https://github.com/codinggita/CGxSU_Semester_1/blob/main/Semester_1/javascript_for_backend%28sem_01%29/sem_01/05.functions_and_scope/Assignment.md): 20 questions, saved as `Q-01.js` through `Q-20.js` here.
- [Scope and hoisting assignment](https://github.com/codinggita/CGxSU_Semester_1/blob/main/Semester_1/javascript_for_backend%28sem_01%29/sem_01/05.functions_and_scope/Assignment-on-scopes.md): 60 questions, saved in [Scope-and-Hoisting](Scope-and-Hoisting/README.md) by the source's 12 sections.

The existing Q2–Q10 programs are preserved. Each solution runs independently with Node.js and needs no packages.

```bash
cd /home/pal/Workspace/CodingGita/Sem1/JS/js-ass/05.Functions
node Q-14.js
node Scope-and-Hoisting/Section-07-Var-Hoisting/Q-32.js
node verification/check.cjs
```

Scope questions use `var` as requested, except Q20 and Q25, which explicitly require block scope. The course calls top-level variables global. In a Node.js CommonJS file they are module-scoped, and functions in that file can read them. Top-level `var` does not create a `globalThis` property in CommonJS. Scope Q56 deliberately demonstrates the undeclared-variable behavior of non-strict code.

Some scope questions deliberately throw `ReferenceError` or `TypeError`. Their files show the complete expected output and explain the error. Run each file separately; the verifier checks these failures as expected results. Functions Q11 catches its expected scope error so it can also demonstrate the course variable.

The solutions cover the two assignment sheets. The teaching notes' separate Activity Time prompts and MCQs are reference material.

## Functions answers

- [Q1](Q-01.js)
- [Q2](Q-02.js)
- [Q3](Q-03.js)
- [Q4](Q-04.js)
- [Q5](Q-05.js)
- [Q6](Q-06.js)
- [Q7](Q-07.js)
- [Q8](Q-08.js)
- [Q9](Q-09.js)
- [Q10](Q-10.js)
- [Q11](Q-11.js)
- [Q12](Q-12.js)
- [Q13](Q-13.js)
- [Q14](Q-14.js)
- [Q15](Q-15.js)
- [Q16](Q-16.js)
- [Q17](Q-17.js)
- [Q18](Q-18.js)
- [Q19](Q-19.js)
- [Q20](Q-20.js)

Q1 explains what a function is and four advantages. Q3 explains declaration hoisting. Q5 identifies parameters and arguments. Q8 demonstrates `undefined` when no return value is supplied. Q10 compares declarations and expressions. Q11 explains local and outer scope. Q13 explains nested functions. Q19 explains expression initialization with `var`, `let` and `const`.

## Verification

[Expected outputs](verification/expected-outputs.json) records the complete standard output and expected error for every assignment solution. [The verifier](verification/check.cjs) checks syntax and runs each file in a separate process. It also checks all grade thresholds, the pass boundary, equal averages, zero and negative parity, equal and negative maxima, discount endpoints, and the -40 temperature conversion.

The reports assume valid numeric marks, percentages and amounts as supplied by the assignment. Displayed report averages use two decimal places; Pass/Fail uses the unrounded average.
