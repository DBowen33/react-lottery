import web3 from "./web3";

// got from running deploy.js in other lottery project
const address = '0x46A01Bd8eA51EB22420307A067f011005158c568'
const abi = [
    {
        constant: true,
        inputs:[],
        name: 'manager',
        outputs: [{ name: '', type: 'address'}],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    { 
        constant: false,
        inputs: [],
        name: 'pickWinner',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getPlayers',
        outputs: [{ name: '', type: 'address[]' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {   
        constant: false,
        inputs: [],
        name: 'enter',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'players',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    }
];

export default new web3.eth.Contract(abi, address)

