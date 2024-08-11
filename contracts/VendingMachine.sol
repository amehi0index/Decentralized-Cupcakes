// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Rule 2: The vending machine's rules can't be changed by anyone.
contract VendingMachine {
    mapping(address => uint) private _cupcakeBalances;
    mapping(address => uint) private _cupcakeDistributionTimes;

    function giveCupcakeTo(address userAddress) public returns (bool) {
        // Rule 1: The vending machine will distribute a cupcake to anyone who hasn't recently received one.
        uint fiveSecondsFromLastDistribution = _cupcakeDistributionTimes[userAddress] + 5 seconds;
        bool userCanReceiveCupcake = fiveSecondsFromLastDistribution <= block.timestamp;
        
        if (!userCanReceiveCupcake) {
            revert("HTTP 429: Too Many Cupcakes (you must wait at least 5 seconds between cupcakes)");
        }

        _cupcakeBalances[userAddress]++;
        _cupcakeDistributionTimes[userAddress] = block.timestamp;
        
        return true;
    }

    // Getter function for the cupcake balance of a user
    function getCupcakeBalanceFor(address userAddress) public view returns (uint) {
        return _cupcakeBalances[userAddress];
    }
}