import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';


const stdlib = loadStdlib(process.env);
let ctcAlice = null;

const CHOICE_ARRAY = ["I'm not here", "I'm still here"]

const startingBalance = stdlib.parseCurrency(100);


const getBalance = async (who) => stdlib.formatCurrency((await stdlib.balanceOf(who)));


stdlib.setProviderByName('TestNet');

//asking for the passphase, which is need to interact with backend in the following operations
const secret = await ask(
  `Insert passphase`,
  (x => x)
);



const shared = () => ({
    showTime: (t) => { // t is time
        console.log(`The time is ${parseInt(t)}`);
    },
    informTimeout: () => {
        console.log("Timeout!!!");
    },
    showStillHere: (isStillHere) => {
        console.log(`Alice is still here? ${isStillHere}`);
    },
});

console.log("Starting backend ...");

const aliceRole = await ask(
    `Are you Alice?`,
    yesno
);

if (aliceRole){
    console.log("Hi Alice!");
    //const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(6000));
    //get the Wallet using newAccountFromMnemonic() function and the passphase
    const accAlice = await stdlib.newAccountFromMnemonic(secret);
    ctcAlice = accAlice.contract(backend);
    ctcAlice.getInfo().then((info) => {
        console.log(`The contract is deployed as = ${JSON.parse(info)}`); //display the id of the contract
    });
    console.log(`Alice's balance before is: ${await getBalance(accAlice)}`);

    const aliceInteract = { ...shared() };

    var aliceDeposit = await ask(
        `Deposit a large amount of token. Does not overspend your balance!! \nEnter an amount:`,
        stdlib.parseCurrency
    );
    aliceInteract.inherit = aliceDeposit;

    aliceInteract.getChoice = async() => {
        //const choice = Math.floor(Math.random() * 2); // return 0 or 1  //old version
        var key_pressed = null;
        key_pressed = await ask(
            `Press a key to continue ...:`,
            key_pressed
        );
        //console.log("You have pressed: ", key_pressed);
        return (key_pressed ? true : false);
    };
    
    const partAlice = backend.Alice;
    await partAlice(ctcAlice, aliceInteract);

    console.log(`Alice's balance is: ${await getBalance(accAlice)}`);
}else{
    console.log("Hi Bob!");
    //const accBob = await stdlib.newTestAccount(startingBalance);
    const accBob = await stdlib.newAccountFromMnemonic(secret);
    const info = await ask(
        `Please paste the contract information:`,
        JSON.parse
    );
    const ctcBob = accBob.contract(backend, info);
    console.log(`Bob's balance before is: ${await getBalance(accBob)}`);

    const bobInteract = { ...shared() };
    bobInteract.acceptTerms = async(num) =>{
        const termsAccepted = await ask(
            `Do you want to accept the terms of ${stdlib.formatCurrency(num)}?`,
            yesno
        );
        
        if (termsAccepted){
            console.log("Bob accepts the terms of the vault for ", stdlib.formatCurrency(num));
            return true;
        }else{
            console.log("Bob does NOT accepts the terms of the vault for ", stdlib.formatCurrency(num));
            return false;
        }
    }

    const partBob = backend.Bob;
    await partBob(ctcBob, bobInteract);

    console.log(`Bob's balance is: ${await getBalance(accBob)}`);
}

done();















// await Promise.all([
//     backend.Alice(ctcAlice, {
//         ...shared(),
//         //TODO: change the value of inherit
//         inherit: stdlib.parseCurrency(5000), //Alice can deposit a large amount of tokens
//         getChoice: () => {
//             const choice = Math.floor(Math.random() * 2); // return 0 or 1 
//             console.log("Alice's choice is ", CHOICE_ARRAY[choice])
//             return (choice == 0 ? false : true);
//         },
//     }),
//     backend.Bob(ctcBob,{
//         ...shared(),
//         acceptTerms: (num) =>{
//             const termsAccepted = await ask(
//                 `Hey Bob! Do you want to accept the terms of ${num}?`,
//                 yesno
//             );
            
//             if (termsAccepted){
//                 console.log("Bob accepts the terms of the vault for ", stdlib.formatCurrency(num));
//                 return true;
//             }else{
//                 console.log("Bob does NOT accepts the terms of the vault for ", stdlib.formatCurrency(num));
//                 return false;
//             }
              
            
//         }
//     }),
// ]);


/**
 * If the Deployer presses the button, the contract should return the funds to them.
 */


/**
 * If the Deployer does not press the switch then it transfers the funds to the Attacher.
 */



console.log("Bye!")



