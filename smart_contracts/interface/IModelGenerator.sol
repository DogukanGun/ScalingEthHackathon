// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;


interface IModelGenerator {
    struct ModelData {
        string name;
        address owner;
        address contractAddress;
    }
    function createModel(string memory name) external ;
    function returnMySubcription() view external returns(ModelData memory);
    function userPayedSubscription(address userAddress) external;
}