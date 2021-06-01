const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

// Is the trigger on pull request? 
// Are there any secrets?
// Are you using tags for versioning?? 
// Are the actions you are using vulnrable? -- How...?

try {
  console.log(fs.readdirSync("./"));
} catch (error) {
  core.setFailed(error.message);
}
