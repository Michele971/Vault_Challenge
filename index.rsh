'reach 0.1';
'use strict';

const COUNTDOWN = 20;

const shared = {
    showTime: Fun([UInt], Null), //show the countdown
    ...hasConsoleLogger,
}
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
  
    init();
    A.only(() =>{
        const value = declassify(interact.inherit);
    })
    A.publish(value)
        .pay(value);
    commit();

    Bob.only(() => {
        const terms = declassify(interact.acceptTerms(value));
    })
    Bob.publish(terms);
    commit();

    //SHOW the countdown
    each([A, Bob], () => {
        interact.showTime(COUNTDOWN); 
    });

    //choice phase
    A.only(() => {
        const stillHere = declassify(interact.getChoice());
    });
    A.publish(stillHere);

    if (stillHere){
        transfer(value).to(A);
    }else{
        transfer(value).to(Bob);
    }

    commit();
    exit();
      
  
  });