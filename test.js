const exec = require('child_process').exec

const command = ([
  "curl -ks https://jaxf-github.fanatics.corp/raw/asantos/stream-config/master/scripts/sync-config.py",
  "| python -",
  "--env=dev",
  "--source=git",
  "--folder=custom-config-folder",
  "--repo=asantos/sample-stream-config",
  "--commit=master",
]).join(' ');

exec(command, function(error, stdout, stderr) {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
