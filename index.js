const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`CWD: ${process.cwd()}`);
} catch (error) {
  core.setFailed(error.message);
}
