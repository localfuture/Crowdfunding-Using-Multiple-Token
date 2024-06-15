# CrowdFunding Smart Contract Using Multiple Tokens

This smart contract facilitates crowdfunding campaigns where contributions can be made in various ERC20 tokens. It allows creators to start campaigns, contributors to pledge tokens, and provides mechanisms for withdrawing funds or issuing refunds based on campaign outcomes.

## Features

- **Create Campaigns**: Any user can create a new crowdfunding campaign by specifying a funding goal and duration.
- **Contribute**: Contributors can pledge ERC20 tokens to campaigns. Tokens are held in the contract until the campaign concludes.
- **Cancel Contribution**: Contributors can cancel their pledges before a campaign ends and receive a refund.
- **Withdraw Funds**: Campaign creators can withdraw funds after a successful campaign (goal met and duration expired).
- **Refund**: Contributors can claim a refund if a campaign fails (goal not met after duration).

## Smart Contract Details

### Constructor

The constructor initializes the contract with a list of allowed ERC20 token addresses that can be used for contributions.

### Structs and Mappings

- **Campaign Struct**: Holds details of each campaign including goal amount, duration, total funds raised, start time, creator address, token contributions, and contributors' contributions.
- **Mappings**: 
  - `allowedTokens`: Tracks which ERC20 tokens are allowed for contributions.
  - `campaigns`: Stores all created campaigns indexed by `campaignId`.

### Functions

- `createCampaign(uint256 _goal, uint256 _duration)`: Allows anyone to create a new crowdfunding campaign.
- `contribute(uint256 _id, address _token, uint256 _amount)`: Enables contributors to pledge ERC20 tokens to a campaign.
- `cancelContribution(uint256 _id)`: Allows contributors to cancel their pledge and receive a refund.
- `withdrawFunds(uint256 _id)`: Permits campaign creators to withdraw funds if the campaign is successful.
- `refund(uint256 _id)`: Enables contributors to claim a refund if the campaign fails.
- `getContribution(uint256 _id, address _contributor)`: Retrieves the amount of tokens contributed by a specific contributor to a campaign.
- `getCampaign(uint256 _id)`: Returns details about a specific campaign including remaining time, funding goal, and total funds raised.

### Usage

1. **Deploying the Contract**: Deploy the smart contract to a supported Ethereum blockchain (e.g., Rinkeby, Mainnet).
2. **Interacting with the Contract**: Use a wallet or a contract interaction tool (like Remix IDE, Hardhat, or Truffle) to interact with the functions exposed by the contract.
3. **Contributing to Campaigns**: Contributors can pledge ERC20 tokens to campaigns by calling the `contribute` function.
4. **Managing Campaigns**: Creators can create new campaigns, withdraw funds, or check campaign details using the respective functions.

### Notes

- Ensure proper testing and auditing of the contract before deploying it to a production environment.
- Consider gas costs and transaction fees when interacting with the contract, especially during contribution and withdrawal phases.

## License

This smart contract is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
