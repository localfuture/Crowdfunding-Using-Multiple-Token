import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers, network } from "hardhat";

import { deployLockFixture } from "./crowdFunding.fixture";
import { Signers } from "./types";

describe("CrowdFunding", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Crowd Funding Multi Token", function () {
    beforeEach(async function () {
      const {
        token1,
        token1_address,
        token2,
        token2_address,
        token3,
        token3_address,
        crowdFunding,
        crowdFunding_address,
        owner,
        address1,
        address2
      } = await this.loadFixture(deployLockFixture);

      this.token1 = token1;
      this.token1_address = token1_address;
      this.token2 = token2;
      this.token2_address = token2_address;
      this.token3 = token3;
      this.token3_address = token3_address;
      this.crowdFunding = crowdFunding;
      this.crowdFunding_address = crowdFunding_address;
      this.owner = owner;
      this.address1 = address1;
      this.address2 = address2;
    });

    it("test 1", async function () {
        await this.crowdFunding.connect(this.address1).createCampaign(1000,10000);
        await this.crowdFunding.connect(this.address2).createCampaign(100,20000);

        await network.provider.send("evm_increaseTime", [110]);
        await network.provider.send("evm_mine");

        await this.crowdFunding.connect(this.address1).getCampaign(1);
        await this.crowdFunding.connect(this.address1).getCampaign(2);

        await this.crowdFunding.connect(this.address1).contribute(2, this.token1_address, 100);

        const getContribution = await this.crowdFunding.connect(this.address2).getContribution(2, this.address1);
        
        expect(getContribution).to.equals(getContribution);
    });

  });

  describe("Crowd Funding with Multiple Token", function () {
    beforeEach(async function () {
      const {
        token1,
        token1_address,
        token2,
        token2_address,
        token3,
        token3_address,
        crowdFunding,
        crowdFunding_address,
        owner,
        address1,
        address2
      } = await this.loadFixture(deployLockFixture);

      this.token1 = token1;
      this.token1_address = token1_address;
      this.token2 = token2;
      this.token2_address = token2_address;
      this.token3 = token3;
      this.token3_address = token3_address;
      this.crowdFunding = crowdFunding;
      this.crowdFunding_address = crowdFunding_address;
      this.owner = owner;
      this.address1 = address1;
      this.address2 = address2;
    });

    it("test 2", async function () {
        await this.crowdFunding.connect(this.address1).createCampaign(1000,10000);
        await this.crowdFunding.connect(this.address1).createCampaign(5000,40000);

        await this.crowdFunding.connect(this.address2).contribute(1, this.token2_address, 300);

    })
  })
});
