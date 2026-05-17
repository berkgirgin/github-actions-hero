const [, , status, issueNumber, method] = process.argv;

if (status === 'success') {
  console.log(`::warning title=${method} Succeeded::Comment posted on issue #${issueNumber}`);
} else {
  console.log(`::error title=${method} Failed::Failed to post comment on issue #${issueNumber}`);
}
