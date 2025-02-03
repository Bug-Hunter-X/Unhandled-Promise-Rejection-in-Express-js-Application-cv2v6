const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here
    console.error(err); //This will log to the console but not send a response to the client
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    //Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});