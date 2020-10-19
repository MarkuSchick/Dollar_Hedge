var aEURuAbi = [{
	"compiler": {
		"version": "0.6.12+commit.27d51765"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "Paused",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "RoleGranted",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "RoleRevoked",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "Unpaused",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "DEFAULT_ADMIN_ROLE",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "MINTER_ROLE",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "PAUSER_ROLE",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "burnFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"internalType": "uint8",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "subtractedValue",
						"type": "uint256"
					}
				],
				"name": "decreaseAllowance",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					}
				],
				"name": "getRoleAdmin",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "getRoleMember",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					}
				],
				"name": "getRoleMemberCount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "grantRole",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "hasRole",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "addedValue",
						"type": "uint256"
					}
				],
				"name": "increaseAllowance",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "pause",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "paused",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "renounceRole",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes32",
						"name": "role",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "revokeRole",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "unpause",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {
				"allowance(address,address)": {
					"details": "See {IERC20-allowance}."
				},
				"approve(address,uint256)": {
					"details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
				},
				"balanceOf(address)": {
					"details": "See {IERC20-balanceOf}."
				},
				"burn(uint256)": {
					"details": "Destroys `amount` tokens from the caller. See {ERC20-_burn}."
				},
				"burnFrom(address,uint256)": {
					"details": "Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`."
				},
				"decimals()": {
					"details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
				},
				"decreaseAllowance(address,uint256)": {
					"details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
				},
				"getRoleAdmin(bytes32)": {
					"details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
				},
				"getRoleMember(bytes32,uint256)": {
					"details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
				},
				"getRoleMemberCount(bytes32)": {
					"details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
				},
				"grantRole(bytes32,address)": {
					"details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
				},
				"hasRole(bytes32,address)": {
					"details": "Returns `true` if `account` has been granted `role`."
				},
				"increaseAllowance(address,uint256)": {
					"details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
				},
				"mint(address,uint256)": {
					"details": "Creates `amount` new tokens for `to`. See {ERC20-_mint}. Requirements: - the caller must have the `MINTER_ROLE`."
				},
				"name()": {
					"details": "Returns the name of the token."
				},
				"pause()": {
					"details": "Pauses all token transfers. See {ERC20Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`."
				},
				"paused()": {
					"details": "Returns true if the contract is paused, and false otherwise."
				},
				"renounceRole(bytes32,address)": {
					"details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
				},
				"revokeRole(bytes32,address)": {
					"details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
				},
				"symbol()": {
					"details": "Returns the symbol of the token, usually a shorter version of the name."
				},
				"totalSupply()": {
					"details": "See {IERC20-totalSupply}."
				},
				"transfer(address,uint256)": {
					"details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
				},
				"unpause()": {
					"details": "Unpauses all token transfers. See {ERC20Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`."
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"browser/aEURu.sol": "aEURu"
		},
		"evmVersion": "istanbul",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"browser/aEURu.sol": {
			"keccak256": "0xdd2eb02a5b57fad181a9b0b94d5de2595c62d375fea3e827ee218d3e9b608bfa",
			"license": "MIT",
			"urls": [
				"bzz-raw://366cc29bbcbae02ac85b27f46bf716e76acda8351def8a2e5ffe8350ea87c5b5",
				"dweb:/ipfs/QmPzaSZVMqR1Dc9X95NMByR3cF2gZiCa7bNBMG9g8RgEf6"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/GSN/Context.sol": {
			"keccak256": "0x0de74dfa6b37943c1b834cbd8fb7a8d052e5ff80c7adb33692102dd6cd2985e9",
			"urls": [
				"bzz-raw://9d2d827fcf4a838f5821732c0acd6a40d21c2a5a2cfe2563feec91465f47bb60",
				"dweb:/ipfs/Qmex3wMKf5Sghbfvr288RUg1kP2uAyTMf11w83WbMbpQQc"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/access/AccessControl.sol": {
			"keccak256": "0xc35d706da2c3b3228e8c2bfd9c775201688ef307e4990cd59a6dadc2a61abddc",
			"urls": [
				"bzz-raw://45c9859e241844143aaad5054ca5ffebf998a069592cd9c780c88c723849400b",
				"dweb:/ipfs/QmPFPTuys4hWRUga4UJvdyXKP32a9kdhg8hDu7Zku1ENFT"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/math/SafeMath.sol": {
			"keccak256": "0x04d34b3cd5677bea25f8dfceb6dec0eaa071d4d4b789a43f13fe0c415ba4c296",
			"urls": [
				"bzz-raw://e7e8b526a6839e5ba14f0d23a830387fec47f7043ce01d42c9f285b709a9d080",
				"dweb:/ipfs/QmXmhhFmX5gcAvVzNiDPAGA35iHMPNaYtQkACswRHBVTNw"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/presets/ERC20PresetMinterPauser.sol": {
			"keccak256": "0xf3a602b288ab23e8cef142e2bf2f85380d85571dad29c1a5ac99350357b05fad",
			"urls": [
				"bzz-raw://81be3b2bf302ae3faed170d6246052af7a6535626680bf34b0f5fa3c8164996a",
				"dweb:/ipfs/QmYFmKUhRxE7wE55aRYQxTDf9Q3bRD38Ry2EHJ6p35QLxg"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/token/ERC20/ERC20.sol": {
			"keccak256": "0x3211de52f707a62a356a34fdea9d6a7bed46402d5ce45f1891a16fe2132fbb47",
			"urls": [
				"bzz-raw://45dfe794ad43a3674fab38a378c57eb6ed3353949f6529ccad4a4cbc91d45fc5",
				"dweb:/ipfs/QmReFGciE9fgsb6Nas1Fx593pzKWMjaDa1VQg4CEJQaD6U"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/token/ERC20/ERC20Burnable.sol": {
			"keccak256": "0xcb2cb98b4655b34856045f3f33afed0d4dd6a4425677da6df517d09dd5c9ac92",
			"urls": [
				"bzz-raw://377c7baa8c00dad796eb2b76b79eaadfe2ab91d6d0f378a0cff80d4160903eb8",
				"dweb:/ipfs/QmZV2gwXp3XV24JmnK547JdZ1VVyVoM9LqzqWqfAaxU9aw"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/token/ERC20/ERC20Pausable.sol": {
			"keccak256": "0x06328601d8618dec93b300ec7ecdae5a5d50907a57798d655863381c82165d15",
			"urls": [
				"bzz-raw://99c50f3a4ec687fbf4be0d0bb5afcf38c6d14e52ed81918c6fda7bc7ea050108",
				"dweb:/ipfs/QmZ8UcCqxnhoxu2xjiWdbTKAX4Z4ScrU8t2xqHCGvfixFy"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/token/ERC20/IERC20.sol": {
			"keccak256": "0x6cc1cb934a3ac2137a7dcaed018af9e235392236ceecfd3687259702b9c767ad",
			"urls": [
				"bzz-raw://0055fa88138cd1c3c6440370f8580f85857f8fe9dec41c99af9eafbeb8d9c3ce",
				"dweb:/ipfs/QmX1xDh8vwGLLCH8ti45eXjQ7Wcxv1FEGTR3jkFnd5Nv6F"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/utils/Address.sol": {
			"keccak256": "0x5f7da58ee3d9faa9b8999a93d49c8ff978f1afc88ae9bcfc6f9cbb44da011c2b",
			"urls": [
				"bzz-raw://4f089d954b3ecaa26949412fe63e9a184b056562c6c13dd4a0529a5d9a2e685a",
				"dweb:/ipfs/QmVK5iCNAMcEJQxT59bsC5E53JQASDQPU6khHox3d5ZXCn"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/utils/EnumerableSet.sol": {
			"keccak256": "0x7f6401708b61f575b497aa7c8118ca9d70348643c83c26e70d9b643edf1a95c1",
			"urls": [
				"bzz-raw://b020d65f592c1715bc3d5799ad835cd975ef7d314f340f27603fb99ad86a0427",
				"dweb:/ipfs/QmQoGZmzE5aDTMGJM4BW77eraerfTSV9Rs8wykpQ42i1in"
			]
		},
		"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.1/contracts/utils/Pausable.sol": {
			"keccak256": "0x0336d64bd695c5d8bb962fd3dacb3d26f52879b19e75472d7dea9f91f7add79a",
			"urls": [
				"bzz-raw://d709c1de86475b74fa4f614458e868213f8e5b13eed8b29b465793cd97e5c0f5",
				"dweb:/ipfs/QmYVgazum1VVeDoJYYmKhAJ1mcuTy8vidb2iFEMWcVdSeY"
			]
		}
	},
	"version": 1
}];