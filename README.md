# EthereumToDo
A simple TODO list built on the Ethereum network

Uses [truffle](https://github.com/ConsenSys/truffle) and [ethereumjs-testrpc](https://github.com/ethereumjs/testrpc)  


Run `truffle test` to run mocha tests.
Run `testrpc` to run the test network.  

For any viewers, let me state that if this was a serious project, many more libraries/frameworks/... would be used like:
- ui-router for angular routing  
- SASS for styles  
- ...  

The whole frontend is poorly developed. The goal was to test out Solidity and learn.  


## Deployment  

Run:
1. `testrpc` to start test network  
2. `truffle migrate` to deploy contracts  
3. `truffle serve` to run test server  
