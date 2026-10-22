// Use typeof for each element.
// typeof null returns "object", a historical JavaScript quirk.
// Use value === null when you need to identify null specifically.
const data = [100, "Hello", true, null];
for (const value of data) {
    console.log(typeof value);
}
// Output: number, string, boolean, object, each on its own line.
