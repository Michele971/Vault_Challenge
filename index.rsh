'reach 0.1';
'use strict';

const COUNTDOWN = 20/5; //this is the number of blocks instead seconds

const shared = {
    showTime: Fun([UInt], Null), //show the countdown
    ...hasConsoleLogger,
    informTimeout: Fun([], Null),
    showStillHere: Fun([Bool], Null), //show the variable stillHere
}
// NOTE: I do not display the outcome of the balance of EACH round, but only on the initial and final part 
export const main = Reach.App(() => {
    const A = Participant('Alice', {
      ...shared,
      inherit: UInt,
      getChoice: Fun([], Bool),
      
    });
    const Bob = Participant('Bob',{
        ...shared,
        acceptTerms: Fun([UInt], Bool),
    });

    const informTimeout = () => {
        each([A, Bob], () => {
            interact.informTimeout();
        });
    }

    init();

    A.only(() =>{
        const value = declassify(interact.inherit);
    });
    A.publish();
    commit();

    A.publish(value)
        .pay(value)
    commit();

    Bob.only(() => {
        const terms = declassify(interact.acceptTerms(value));
    })
    Bob.publish(terms);

    if(terms){ //Bob has accepted the terms
        commit();
   
        A.publish();
        const END_PROGRAM = lastConsensusTime() + COUNTDOWN; //a time in the future. At this time the program must stop.
        commit();  
        
        //     //SHOW the countdown
        each([A, Bob], () => {
            interact.showTime(COUNTDOWN); 
        });

        //choice phase
        A.only(() => {
            const stillHere = declassify(interact.getChoice());
        });

            
        A.publish(stillHere)
            .timeout(relativeTime(COUNTDOWN), () => closeTo(Bob, informTimeout));
            
        each([A, Bob], () => {
            interact.showStillHere(stillHere); 
        });

        var stillHereAlice = stillHere;
        invariant(balance() == balance());
        while(stillHereAlice){
            // END_PROGRAM - lastConsensusTime() is my counter variable
            if ( END_PROGRAM - lastConsensusTime() <= 0 && stillHereAlice){ //If timer reaches “zero” and Alice is “still here”. 
                transfer(balance()).to(A); // transfer the balance of the contract to Alice
                commit();
                exit();
            }
            commit();
            A.only(() => {
                const stillHereAgain = declassify(interact.getChoice());
            });
            A.publish(stillHereAgain)
                .timeout(relativeTime(COUNTDOWN), () => closeTo(Bob, informTimeout));

            each([A, Bob], () => { //information about Alice status
                interact.showStillHere(stillHereAgain); 
            });
            stillHereAlice = stillHereAgain;
            continue;
        }
        
        if (balance()> 0){ //if we are here, stillHere is false
            transfer(balance()).to(Bob);
        }

    }else{ //bob does not accept the terms
        transfer(value).to(A);
    }

    commit();
    exit();
      
  });



/**-----------------------------------------------------
 * ----------------- FOR REACH'S TEAM: -----------------
 * 
 * an other version: it was a different interpetation of specification
 * 
 * 
 */
    //var [count, end_program2] = [END_PROGRAM - lastConsensusTime(), lastConsensusTime() + COUNTDOWN];
    //invariant(balance() == balance());
    // while(count>0){
    //     commit();
    //     //SHOW the countdown
    //     each([A, Bob], () => {
    //         interact.showTime(count); 
    //     });

    //     //choice phase
    //     A.only(() => {
    //         const stillHere = declassify(interact.getChoice());
    //     });
                
    //     A.publish(stillHere)
    //         .timeout(relativeTime(COUNTDOWN), () => closeTo(Bob, informTimeout));
        
    //     each([A, Bob], () => {
    //         interact.showStillHere(stillHere); 
    //     });
    //     //if Alice is still here, then I have to reset the counter
    //     if(stillHere && end_program2 - lastConsensusTime() != 0){
    //         end_program2 = lastConsensusTime() + COUNTDOWN; //the date in the future is prolonged
    //         continue;
    //     }
        
    //     if (end_program2 - lastConsensusTime() == 0 && stillHere){ //If timer reaches “zero” and Alice is “still here”. 
    //         transfer(balance()).to(A); // transfer the balance of the contract to Alice
    //         commit();
    //         exit();
    //     }
    //     each([A, Bob], () => {
    //         interact.showTime(count); 
    //     });

    //     count = end_program2 - lastConsensusTime();
    //     continue; 
        

    // }