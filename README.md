# External API Integration

The following imaginary (external) API has been fabricated. While some usernames may be valid, some may not.
```
https://api.rajdeepmandal.com/users/${username}
```

## Frameworks
Programming Language: **Node.js/Javascript**
Testing Framework: **[Mocha](https://www.npmjs.com/package/mocha)**

## Explaination

NPM package [nock](https://www.npmjs.com/package/nock#how-does-it-work) has been used to intercept all API calls, and respond. For username *mandalrajdeep* the API will return a regular response, whereas for username *jondoe*, the API will throw a **404** error, which has been handled. 

## Running the Program
Running the program is simple, the instructions are cited as follows. Please not the the program will not run for real as the external API is not real, but the test cases will run.

```
1 ... npm install
2 ... npm test
```
