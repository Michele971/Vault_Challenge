import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';


const stdlib = loadStdlib(process.env);

const CHOICE_ARRAY = ["I'm not here", "I'm still here"]

const startingBalance = stdlib.parseCurrency(100);
const accBob = await stdlib.newTestAccount(startingBalance)
const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(6000));

console.log("Launching ...");

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const getBalance = async (who) => stdlib.formatCurrency((await stdlib.balanceOf(who)));

console.log(`Alice's balance before is: ${await getBalance(accAlice)}`);
console.log(`Bob's balance before is: ${await getBalance(accBob)}`);

const shared = () => ({
    showTime: (t) => { // t is time
        console.log(`The time is ${parseInt(t)}`);
    },
});


console.log("Starting backend ...");
await Promise.all([
    backend.Alice(ctcAlice, {
        ...shared(),
        //TODO: change the value of inherit
        inherit: stdlib.parseCurrency(5000), //Alice can deposit a large amount of tokens
        getChoice: () => {
            const choice = Math.floor(Math.random() * 2); // return 0 or 1 
            console.log("Alice's choice is ", CHOICE_ARRAY[choice])
            return (choice == 0 ? false : true);
        },
    }),
    backend.Bob(ctcBob,{
        ...shared(),
        acceptTerms: (num) =>{
            const termsAccepted = await ask(
                `Hey Bob! Do you want to accept the terms of ${num}?`,
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
    }),
]);


/**
 * If the Deployer presses the button, the contract should return the funds to them.
 */


/**
 * If the Deployer does not press the switch then it transfers the funds to the Attacher.
 */

console.log(`Alice's balance is: ${await getBalance(accAlice)}`);
console.log(`Bob's balance is: ${await getBalance(accBob)}`);

console.log("Bye!")



