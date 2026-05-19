const [, , annotationType, consoleMethod, file, line, col, title] = process.argv;
const message = `::${annotationType} file=${file},line=${line},col=${col},title=${title}::Testing ${annotationType} annotation via console.${consoleMethod}`;
console[consoleMethod](message);
