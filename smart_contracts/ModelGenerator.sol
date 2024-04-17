// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "./Model.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IModel.sol";
import "./interface/IModelGenerator.sol";


contract ModelGenerator is Ownable,IModelGenerator  {

    ModelData[] userModels;

    constructor() Ownable() {}

    function createModel(string memory name) external  {
        address modelAddress = address(new Model(name,msg.sender));
        userModels.push(ModelData(name, msg.sender,modelAddress));
    }
    
    function returnMySubcription() view external returns(ModelData memory){
        for (uint i = 0; i < userModels.length; i++) 
        {
            if(userModels[i].owner == msg.sender){
                return userModels[i];
            }
        }
        revert();
    }

    function userPayedSubscription(address userAddress) external onlyOwner{
        for (uint i = 0; i < userModels.length; i++) 
        {
            if(userModels[i].owner == userAddress){
                IModel(userModels[i].contractAddress).paymentVerified();
            }
        }
    }

    function newMonth() external  {
        for (uint i = 0; i < userModels.length; i++) 
        {
            IModel(userModels[i].contractAddress).newMonth();
        }
    }

}