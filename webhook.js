const express = require('express');
const { spawn } = require('child_process');

const app = express();

app.post('/webhook/ads-apis', (req, res) => {
  // Run the deployment script as a child process
  const deploy = spawn('sh', ['/home/ubuntu/webhook-node/script/deployment-script.sh']);

  deploy.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });

  deploy.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  deploy.on('close', code => {
    console.log(`child process exited with code ${code}`);
  });

  res.status(200).send('Deployment triggered successfully');
});

app.post('/webhook/ads-angular', (req, res) => {
  const deploy = spawn('sh', ['/home/ubuntu/webhook-node/script/ads-angular.sh']);

  deploy.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });

  deploy.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  deploy.on('close', code => {
    console.log(`child process exited with code ${code}`);
  });

  res.status(200).send('Deployment triggered successfully');
});

app.post('/webhook/ads-apis-force', (req, res) => {
  // Run the deployment script as a child process
  const deploy = spawn('sh', ['/home/ubuntu/webhook-node/script/deployment-script-force.sh']);

  deploy.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });

  deploy.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  deploy.on('close', code => {
    console.log(`child process exited with code ${code}`);
  });

  res.status(200).send('Deployment triggered successfully');
});

app.listen(4000, () => {
  console.log('Webhook server listening on port 4000');
});

