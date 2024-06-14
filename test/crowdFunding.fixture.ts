import { ethers } from "hardhat";

import type { CrowdFunding } from "../types/contracts/CrowdFunding";
import type { CrowdFunding__factory } from "../types/factories/contracts/CrowdFunding__factory";

import type { MyToken } from "../types/contracts/MyToken";
import type { MyToken__factory } from "../types/factories/contracts/MyToken__factory";



export async function deployLockFixture() {
  const [owner, address1, address2] = await ethers.getSigners();

  const Token1 = (await ethers.getContractFactory(
    "MyToken"
  )) as MyToken__factory;
  const token1 = (await Token1.connect(owner).deploy(
    "Token1",
    "TKN1",
    1
  )) as MyToken;
  const token1_address = await token1.getAddress();

  const Token2 = (await ethers.getContractFactory(
    "MyToken"
  )) as MyToken__factory;
  const token2 = (await Token2.connect(owner).deploy(
    "Token2",
    "TKN2",
    4
  )) as MyToken;
  const token2_address = await token2.getAddress();

  const Token3 = (await ethers.getContractFactory(
    "MyToken"
  )) as MyToken__factory;
  const token3 = (await Token3.connect(owner).deploy(
    "Token3",
    "TKN3",
    5
  )) as MyToken;
  const token3_address = await token3.getAddress();

  await token1.connect(owner).mint(address1.address, 100000);
  await token1.connect(owner).mint(address2.address, 100000);
  await token2.connect(owner).mint(address1.address, 100000);

  const CrowdFunding = (await ethers.getContractFactory(
    "CrowdFunding"
  )) as CrowdFunding__factory;
  const crowdFunding = (await CrowdFunding.deploy(
    [ token1_address, token2_address]
  )) as CrowdFunding;
  const crowdFunding_address = await crowdFunding.getAddress();

  await token2.connect(address1).approve(crowdFunding_address, 100000);
  await token1.connect(address1).approve(crowdFunding_address, 100000);

  return {
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
    address2,
  };
}
