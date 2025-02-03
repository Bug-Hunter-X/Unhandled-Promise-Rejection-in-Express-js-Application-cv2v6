# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: neglecting proper error handling within asynchronous operations. The `bug.js` file showcases the issue, where a promise rejection during an asynchronous task is not caught effectively. This leads to a silent failure, leaving the client with no indication of the problem.

The `bugSolution.js` file provides a corrected version with comprehensive error handling, ensuring a graceful response to both successful and failed operations.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Observe the console output.  Note the lack of a response from the server when the simulated error occurs.
5. Run `node bugSolution.js` to see the improved error handling.