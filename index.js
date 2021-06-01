const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
fs.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
} catch (error) {
  core.setFailed(error.message);
}
