const [, , annotationType, consoleMethod] = process.argv;
const message = `::${annotationType} title=${annotationType} via console.${consoleMethod}::Testing ${annotationType} annotation via console.${consoleMethod}`;
console[consoleMethod](message);
