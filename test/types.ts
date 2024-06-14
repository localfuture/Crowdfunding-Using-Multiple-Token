import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/dist/src/signer-with-address";

import type { CrowdFunding } from "../types/contracts/CrowdFunding";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    crowdFunding: CrowdFunding;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
