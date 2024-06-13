/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  CrowdFunding,
  CrowdFundingInterface,
} from "../../contracts/CrowdFunding";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "campaignId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFunds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "cancelContribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getCampaign",
    outputs: [
      {
        internalType: "uint256",
        name: "remainingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFunds",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_contributor",
        type: "address",
      },
    ],
    name: "getContribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a7b380380610a7b83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6109e8806100936000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80635598f8cc116100765780638ed5b0fc1161005b5780638ed5b0fc146101cd578063e081dbf9146101e4578063fc0c546a146101f757600080fd5b80635598f8cc1461018c5780638c590917146101ba57600080fd5b806322502268116100a75780632250226814610153578063278ecde114610166578063368e571b1461017957600080fd5b8063141961bc146100c3578063155dd5ee1461013e575b600080fd5b6101086100d13660046108e6565b600160208190526000918252604090912080549181015460028201546003830154600490930154919290916001600160a01b031685565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a0015b60405180910390f35b61015161014c3660046108e6565b610222565b005b6101516101613660046108ff565b610376565b6101516101743660046108e6565b61049b565b6101516101873660046108e6565b61065b565b61019f61019a3660046108e6565b6106df565b60408051938452602084019290925290820152606001610135565b6101516101c83660046108ff565b610727565b6101d660025481565b604051908152602001610135565b6101d66101f2366004610921565b6108b9565b60005461020a906001600160a01b031681565b6040516001600160a01b039091168152602001610135565b60008181526001602081905260409091209081015460038201546102469190610973565b42101561029a5760405162461bcd60e51b815260206004820152601860248201527f43616d706169676e206973207374696c6c20616374697665000000000000000060448201526064015b60405180910390fd5b8054600282015410156102ef5760405162461bcd60e51b815260206004820152600c60248201527f476f616c206e6f74206d657400000000000000000000000000000000000000006044820152606401610291565b600054600482810154600284015460405163a9059cbb60e01b81526001600160a01b039283169381019390935260248301529091169063a9059cbb906044016020604051808303816000875af115801561034d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103719190610986565b505050565b600082116103c65760405162461bcd60e51b815260206004820152601b60248201527f476f616c206d7573742062652067726561746572207468616e203000000000006044820152606401610291565b600081116104165760405162461bcd60e51b815260206004820152601f60248201527f4475726174696f6e206d7573742062652067726561746572207468616e2030006044820152606401610291565b60028054906000610426836109af565b90915550506002805460009081526001602081905260408083209590955582548252848220019290925580548252828220810182905580548252828220426003909101555481522060040180547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055565b60008181526001602081905260409091209081015460038201546104bf9190610973565b42101561050e5760405162461bcd60e51b815260206004820152601860248201527f43616d706169676e206973207374696c6c2061637469766500000000000000006044820152606401610291565b80546002820154106105625760405162461bcd60e51b815260206004820152600860248201527f476f616c206d65740000000000000000000000000000000000000000000000006044820152606401610291565b336000908152600582016020526040902054806105b35760405162461bcd60e51b815260206004820152600f60248201526e27379031b7b73a3934b13aba34b7b760891b6044820152606401610291565b808260020160008282546105c791906109c8565b90915550503360008181526005840160205260408082208290559054905163a9059cbb60e01b81526004810192909252602482018390526001600160a01b03169063a9059cbb906044015b6020604051808303816000875af1158015610631573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106559190610986565b50505050565b600081815260016020908152604080832033845260058101909252909120546106b85760405162461bcd60e51b815260206004820152600f60248201526e27379031b7b73a3934b13aba34b7b760891b6044820152606401610291565b336000908152600582016020526040812054600283018054919283926105c79084906109c8565b60008181526001602081905260408220908101546003820154839283929091429161070991610973565b61071391906109c8565b815460029092015490969195509350915050565b600081116107775760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610291565b600082815260016020526040902060048101546001600160a01b03166107df5760405162461bcd60e51b815260206004820152601760248201527f43616d706169676e20646f6573206e6f742065786973740000000000000000006044820152606401610291565b60048101546001600160a01b0316330361083b5760405162461bcd60e51b815260206004820152601960248201527f43726561746f722063616e6e6f7420636f6e74726962757465000000000000006044820152606401610291565b3360009081526005820160205260408120805484929061085c908490610973565b92505081905550818160020160008282546108779190610973565b90915550506000546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd90606401610612565b60008281526001602090815260408083206001600160a01b03851684526005019091529020545b92915050565b6000602082840312156108f857600080fd5b5035919050565b6000806040838503121561091257600080fd5b50508035926020909101359150565b6000806040838503121561093457600080fd5b8235915060208301356001600160a01b038116811461095257600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108e0576108e061095d565b60006020828403121561099857600080fd5b815180151581146109a857600080fd5b9392505050565b6000600182016109c1576109c161095d565b5060010190565b818103818111156108e0576108e061095d56fea164736f6c6343000814000a";

type CrowdFundingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdFundingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdFunding__factory extends ContractFactory {
  constructor(...args: CrowdFundingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override deploy(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token, overrides || {}) as Promise<
      CrowdFunding & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CrowdFunding__factory {
    return super.connect(runner) as CrowdFunding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdFundingInterface {
    return new Interface(_abi) as CrowdFundingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CrowdFunding {
    return new Contract(address, _abi, runner) as unknown as CrowdFunding;
  }
}