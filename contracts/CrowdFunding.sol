// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CrowdFunding {
    mapping(address => bool) allowedTokens;

    struct Campaign {
        uint256 goal;
        uint256 duration;
        uint256 totalFunds;
        uint256 startTime;
        address creator;
        mapping(address => address) token;
        mapping(address => uint256) contributions;
    }
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignId;

    /**
     * @param _tokens list of allowed token addresses
     */
    constructor(address[] memory _tokens) {
        for (uint i = 0; i < _tokens.length; i++) {
            allowedTokens[_tokens[i]] = true;
        }
    }

    /**
     * @notice createCampaign allows anyone to create a campaign
     * @param _goal amount of funds to be raised in USD
     * @param _duration the duration of the campaign in seconds
     */
    function createCampaign(uint256 _goal, uint256 _duration) external {
        require(_goal > 0, "Goal must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");
        campaignId++;
        campaigns[campaignId].goal = _goal;
        campaigns[campaignId].duration = _duration;
        campaigns[campaignId].totalFunds = 0;
        campaigns[campaignId].startTime = block.timestamp;
        campaigns[campaignId].creator = msg.sender;
    }

    /**
     * @dev contribute allows anyone to contribute to a campaign
     * @param _id the id of the campaign
     * @param _token the address of the token to contribute
     * @param _amount the amount of tokens to contribute
     */
    function contribute(uint256 _id, address _token, uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");
        Campaign storage campaign = campaigns[_id];
        require(campaign.creator != address(0), "Campaign does not exist");
        require(msg.sender != campaign.creator, "Creator cannot contribute");
        require(allowedTokens[_token] == true, "not allowed");
        campaign.contributions[msg.sender] += _amount;
        campaign.totalFunds += _amount;
        campaign.token[msg.sender] = _token;
        IERC20 token = IERC20(_token);
        token.transferFrom(msg.sender, address(this), _amount);
    }

    /**
     * @dev cancelContribution allows anyone to cancel their contribution
     * @param _id the id of the campaign
     */
    function cancelContribution(uint256 _id) external {
        Campaign storage campaign = campaigns[_id];
        require(campaign.contributions[msg.sender] > 0, "No contribution");
        uint256 amount = campaign.contributions[msg.sender];
        campaign.totalFunds -= amount;
        campaign.contributions[msg.sender] = 0;
        IERC20 token = IERC20(campaign.token[msg.sender]);
        token.transfer(msg.sender, amount);
    }

    /**
     * @notice withdrawFunds allows the creator of the campaign to withdraw the funds
     * @param _id the id of the campaign
     */

    function withdrawFunds(uint256 _id) external {
        Campaign storage campaign = campaigns[_id];
        require(
            block.timestamp >= campaign.startTime + campaign.duration,
            "Campaign is still active"
        );
        require(campaign.totalFunds >= campaign.goal, "Goal not met");
        IERC20 token = IERC20(campaign.token[msg.sender]);
        token.transfer(campaign.creator, campaign.totalFunds);
    }

    /**
     * @notice refund allows the contributors to get a refund if the campaign failed
     * @param _id the id of the campaign
     */
    function refund(uint256 _id) external {
        Campaign storage campaign = campaigns[_id];
        require(
            block.timestamp >= campaign.startTime + campaign.duration,
            "Campaign is still active"
        );
        require(campaign.totalFunds < campaign.goal, "Goal met");
        uint256 amount = campaign.contributions[msg.sender];
        require(amount > 0, "No contribution");
        campaign.totalFunds -= amount;
        campaign.contributions[msg.sender] = 0;
        IERC20 token = IERC20(campaign.token[msg.sender]);
        token.transfer(msg.sender, amount);
    }

    /**
     * @notice getContribution returns the contribution of a contributor in USD
     * @param _id the id of the campaign
     * @param _contributor the address of the contributor
     */
    function getContribution(
        uint256 _id,
        address _contributor
    ) public view returns (uint256) {
        return campaigns[_id].contributions[_contributor];
    }

    /**
     * @notice getCampaign returns details about a campaign
     * @param _id the id of the campaign
     * @return remainingTime the time (in seconds) remaining for the campaign
     * @return goal the goal of the campaign (in USD)
     * @return totalFunds total funds (in USD) raised by the campaign
     */
    function getCampaign(
        uint256 _id
    )
        external
        view
        returns (uint256 remainingTime, uint256 goal, uint256 totalFunds)
    {
         Campaign storage campaign = campaigns[_id];
        remainingTime = (campaign.startTime + campaign.duration) - block.timestamp;
        goal = campaign.goal;
        totalFunds = campaign.totalFunds;

        return (remainingTime, goal, totalFunds);
    }
}
