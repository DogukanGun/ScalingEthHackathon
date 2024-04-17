// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IModel.sol";

contract Model is Ownable,IModel {

    string name;
    address generatorAddress;
    uint256 lastTimestamp;
    string[] protocols;
    bool paymentDone;

    constructor(string memory _name,address owner) Ownable(){
        transferOwnership(owner);
        name = _name;
        paymentDone = false;
        generatorAddress = msg.sender;
    }

    modifier onlyGenerator {
        require(msg.sender == generatorAddress,"Only generator can verify payments");
        _;
    }

    function addProtocol(string calldata protocol) external {
        protocols.push(protocol);
    }

    function getProtocols() view external returns(string[] memory) {
        return protocols;
    }

    function paymentVerified() external onlyGenerator {
        paymentDone = true;
        lastTimestamp = block.timestamp;
    }


    function newMonth() external onlyGenerator {
        if(monthsPassed() >= 1){
            paymentDone = false;
        }
    }

    function isPaymentVerified() view external returns(bool){
        return paymentDone;
    }   

    function monthsPassed() private view returns (uint256) {
        uint256 currentTimestamp = block.timestamp;

        uint256 timeDifference = currentTimestamp - lastTimestamp;

        return timeDifference / (30 days); // Assuming a month is 30 days
    }
}