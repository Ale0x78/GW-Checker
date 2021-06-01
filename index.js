const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  console.log(fs.readdirSync(process.cwd()));
} catch (error) {
  core.setFailed(error.message);
}
