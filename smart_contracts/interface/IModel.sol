// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

interface IModel {
    function addProtocol(string calldata protocol) external;
    function getProtocols() view external returns(string[] memory);
    function paymentVerified() external ;
    function isPaymentVerified() view external returns(bool);
    function newMonth() external;
}