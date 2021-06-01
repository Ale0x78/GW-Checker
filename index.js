const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
fs.readdirSync('./').forEach(file => {
    console.log(file);
  });
} catch (error) {
  core.setFailed(error.message);
}
