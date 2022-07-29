// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1],
      3: [ctc0, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      10: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v204 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v209, time: v208, didSend: v26, from: v207 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v209, time: v208, didSend: v26, from: v207 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v207, v204],
    evt_cnt: 1,
    funcNum: 1,
    lct: v208,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v204, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211], secs: v213, time: v212, didSend: v34, from: v210 } = txn2;
      
      sim_r.txns.push({
        amt: v211,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v34, from: v210 } = txn2;
  ;
  const v216 = stdlib.addressEq(v207, v210);
  stdlib.assert(v216, {
    at: './index.rsh:39:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v221], secs: v223, time: v222, didSend: v43, from: v220 } = txn3;
  ;
  if (v221) {
    const txn4 = await (ctc.sendrecv({
      args: [v207, v211, v220, v222],
      evt_cnt: 0,
      funcNum: 3,
      lct: v222,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v226, time: v225, didSend: v48, from: v224 } = txn4;
        
        ;
        const v229 = stdlib.add(v222, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
        const v236 = stdlib.add(v225, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v226, time: v225, didSend: v48, from: v224 } = txn4;
    ;
    const v227 = stdlib.addressEq(v207, v224);
    stdlib.assert(v227, {
      at: './index.rsh:51:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v229 = stdlib.add(v222, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
    const v236 = stdlib.add(v225, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
    stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4')), {
      at: './index.rsh:57:30:application',
      fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:27:function exp)'],
      msg: 'showTime',
      who: 'Alice'
      });
    
    const v244 = stdlib.protect(ctc1, await interact.getChoice(), {
      at: './index.rsh:62:60:application',
      fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:19:function exp)'],
      msg: 'getChoice',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v207, v211, v220, v225, v229, v236, v244],
      evt_cnt: 1,
      funcNum: 4,
      lct: v225,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:66:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v246], secs: v248, time: v247, didSend: v66, from: v245 } = txn5;
        
        ;
        
        const v254 = v246;
        const v255 = v247;
        const v256 = v225;
        const v262 = v211;
        
        if (await (async () => {
          
          return v254;})()) {
          const v267 = stdlib.sub(v229, v256);
          const v268 = stdlib.le(v267, stdlib.checkedBigNumberify('./index.rsh:77:55:decimal', stdlib.UInt_max, '0'));
          if (v268) {
            sim_r.txns.push({
              kind: 'from',
              to: v207,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v283 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
            sim_r.isHalt = false;
            }}
        else {
          const v316 = stdlib.gt(v262, stdlib.checkedBigNumberify('./index.rsh:96:24:decimal', stdlib.UInt_max, '0'));
          if (v316) {
            sim_r.txns.push({
              kind: 'from',
              to: v220,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v236],
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v207, v211, v220, v225, v229, v236],
        evt_cnt: 0,
        funcNum: 5,
        lct: v225,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v328, time: v327, didSend: v166, from: v326 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v220,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v328, time: v327, didSend: v166, from: v326 } = txn6;
      ;
      const v329 = stdlib.addressEq(v207, v326);
      const v330 = stdlib.addressEq(v220, v326);
      const v331 = v329 ? true : v330;
      stdlib.assert(v331, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:67:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:27:35:application',
        fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:67:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v246], secs: v248, time: v247, didSend: v66, from: v245 } = txn5;
      ;
      const v249 = stdlib.addressEq(v207, v245);
      stdlib.assert(v249, {
        at: './index.rsh:66:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc2, await interact.showStillHere(v246), {
        at: './index.rsh:70:35:application',
        fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:27:function exp)'],
        msg: 'showStillHere',
        who: 'Alice'
        });
      
      let v254 = v246;
      let v255 = v247;
      let v256 = v225;
      let v262 = v211;
      
      while (await (async () => {
        
        return v254;})()) {
        const v267 = stdlib.sub(v229, v256);
        const v268 = stdlib.le(v267, stdlib.checkedBigNumberify('./index.rsh:77:55:decimal', stdlib.UInt_max, '0'));
        if (v268) {
          ;
          return;
          }
        else {
          const v283 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
          const v287 = stdlib.protect(ctc1, await interact.getChoice(), {
            at: './index.rsh:84:69:application',
            fs: ['at ./index.rsh:83:19:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
            msg: 'getChoice',
            who: 'Alice'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v207, v220, v229, v255, v262, v283, v287],
            evt_cnt: 1,
            funcNum: 7,
            lct: v255,
            onlyIf: true,
            out_tys: [ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v289], secs: v291, time: v290, didSend: v99, from: v288 } = txn6;
              
              ;
              
              const cv254 = v289;
              const cv255 = v290;
              const cv256 = v255;
              const cv262 = v262;
              
              await (async () => {
                const v254 = cv254;
                const v255 = cv255;
                const v256 = cv256;
                const v262 = cv262;
                
                if (await (async () => {
                  
                  return v254;})()) {
                  const v267 = stdlib.sub(v229, v256);
                  const v268 = stdlib.le(v267, stdlib.checkedBigNumberify('./index.rsh:77:55:decimal', stdlib.UInt_max, '0'));
                  if (v268) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v207,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v283 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
                    sim_r.isHalt = false;
                    }}
                else {
                  const v316 = stdlib.gt(v262, stdlib.checkedBigNumberify('./index.rsh:96:24:decimal', stdlib.UInt_max, '0'));
                  if (v316) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v220,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v283],
            tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v207, v220, v229, v255, v262, v283],
              evt_cnt: 0,
              funcNum: 8,
              lct: v255,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v299, time: v298, didSend: v125, from: v297 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v220,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v299, time: v298, didSend: v125, from: v297 } = txn7;
            ;
            const v300 = stdlib.addressEq(v207, v297);
            const v301 = stdlib.addressEq(v220, v297);
            const v302 = v300 ? true : v301;
            stdlib.assert(v302, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:87:64:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:27:35:application',
              fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:87:64:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v289], secs: v291, time: v290, didSend: v99, from: v288 } = txn6;
            ;
            const v292 = stdlib.addressEq(v207, v288);
            stdlib.assert(v292, {
              at: './index.rsh:86:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            stdlib.protect(ctc2, await interact.showStillHere(v289), {
              at: './index.rsh:90:39:application',
              fs: ['at ./index.rsh:89:17:application call to [unknown function] (defined at: ./index.rsh:89:31:function exp)'],
              msg: 'showStillHere',
              who: 'Alice'
              });
            
            const cv254 = v289;
            const cv255 = v290;
            const cv256 = v255;
            const cv262 = v262;
            
            v254 = cv254;
            v255 = cv255;
            v256 = cv256;
            v262 = cv262;
            
            continue;}
          
          }}
      const v316 = stdlib.gt(v262, stdlib.checkedBigNumberify('./index.rsh:96:24:decimal', stdlib.UInt_max, '0'));
      if (v316) {
        ;
        return;
        }
      else {
        return;
        }}
    
    
    
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v209, time: v208, didSend: v26, from: v207 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v34, from: v210 } = txn2;
  ;
  const v216 = stdlib.addressEq(v207, v210);
  stdlib.assert(v216, {
    at: './index.rsh:39:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v219 = stdlib.protect(ctc1, await interact.acceptTerms(v211), {
    at: './index.rsh:44:54:application',
    fs: ['at ./index.rsh:43:13:application call to [unknown function] (defined at: ./index.rsh:43:17:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v207, v211, v219],
    evt_cnt: 1,
    funcNum: 2,
    lct: v212,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v221], secs: v223, time: v222, didSend: v43, from: v220 } = txn3;
      
      ;
      if (v221) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v207,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v221], secs: v223, time: v222, didSend: v43, from: v220 } = txn3;
  ;
  if (v221) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v226, time: v225, didSend: v48, from: v224 } = txn4;
    ;
    const v227 = stdlib.addressEq(v207, v224);
    stdlib.assert(v227, {
      at: './index.rsh:51:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v229 = stdlib.add(v222, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
    const v236 = stdlib.add(v225, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
    stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4')), {
      at: './index.rsh:57:30:application',
      fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:27:function exp)'],
      msg: 'showTime',
      who: 'Bob'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: ['time', v236],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v207, v211, v220, v225, v229, v236],
        evt_cnt: 0,
        funcNum: 5,
        lct: v225,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v328, time: v327, didSend: v166, from: v326 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v220,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v328, time: v327, didSend: v166, from: v326 } = txn6;
      ;
      const v329 = stdlib.addressEq(v207, v326);
      const v330 = stdlib.addressEq(v220, v326);
      const v331 = v329 ? true : v330;
      stdlib.assert(v331, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:67:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:27:35:application',
        fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:67:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v246], secs: v248, time: v247, didSend: v66, from: v245 } = txn5;
      ;
      const v249 = stdlib.addressEq(v207, v245);
      stdlib.assert(v249, {
        at: './index.rsh:66:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc2, await interact.showStillHere(v246), {
        at: './index.rsh:70:35:application',
        fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:27:function exp)'],
        msg: 'showStillHere',
        who: 'Bob'
        });
      
      let v254 = v246;
      let v255 = v247;
      let v256 = v225;
      let v262 = v211;
      
      while (await (async () => {
        
        return v254;})()) {
        const v267 = stdlib.sub(v229, v256);
        const v268 = stdlib.le(v267, stdlib.checkedBigNumberify('./index.rsh:77:55:decimal', stdlib.UInt_max, '0'));
        if (v268) {
          ;
          return;
          }
        else {
          const v283 = stdlib.add(v255, stdlib.checkedBigNumberify('./index.rsh:4:21:application', stdlib.UInt_max, '4'));
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 7,
            out_tys: [ctc1],
            timeoutAt: ['time', v283],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v207, v220, v229, v255, v262, v283],
              evt_cnt: 0,
              funcNum: 8,
              lct: v255,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v299, time: v298, didSend: v125, from: v297 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v220,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v299, time: v298, didSend: v125, from: v297 } = txn7;
            ;
            const v300 = stdlib.addressEq(v207, v297);
            const v301 = stdlib.addressEq(v220, v297);
            const v302 = v300 ? true : v301;
            stdlib.assert(v302, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:87:64:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:27:35:application',
              fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:87:64:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v289], secs: v291, time: v290, didSend: v99, from: v288 } = txn6;
            ;
            const v292 = stdlib.addressEq(v207, v288);
            stdlib.assert(v292, {
              at: './index.rsh:86:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            stdlib.protect(ctc2, await interact.showStillHere(v289), {
              at: './index.rsh:90:39:application',
              fs: ['at ./index.rsh:89:17:application call to [unknown function] (defined at: ./index.rsh:89:31:function exp)'],
              msg: 'showStillHere',
              who: 'Bob'
              });
            
            const cv254 = v289;
            const cv255 = v290;
            const cv256 = v255;
            const cv262 = v262;
            
            v254 = cv254;
            v255 = cv255;
            v256 = cv256;
            v262 = cv262;
            
            continue;}
          
          }}
      const v316 = stdlib.gt(v262, stdlib.checkedBigNumberify('./index.rsh:96:24:decimal', stdlib.UInt_max, '0'));
      if (v316) {
        ;
        return;
        }
      else {
        return;
        }}
    
    
    
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEEWCACCApQSAUDJgIBAAAiNQAxGEED1SlkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJAxAAW9JgQcMQAC1SSEGDEAAUyEGEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf+ABBf82y6wMgY0AyVbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhCFuyCCOyEDT/sgezQgL2SCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAEYCOXszT+FlEHCFCwMgY0AyVbDEQ0/zEAEkQ0/zQDVyAgNAOBQFs0/jIGNAMhCVs0AyEIW0ICIEkhCgxAAFIhChJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABMyZklywMgY0AyVbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgJCSCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gATu5+giNP4WUQcIULAyBjQDJVsMRDT/MQASRDT/NANXKCA0AyEIWzT+MgY0AyEJWzQDIQRbQgFtSSEFDEAA4EkhCwxAAGtIIQs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9gASnZcS0sDT/MQASRDQDIQlbJAg1/DIGJAg1+zT/NP4WUDT9UDIGFlA0/BZQNPsWUChLAVcAYGdIJDUBMgY1AkIBi0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQUXNf2ABGoROgg0/RZRBwhQsDT9QQAgNP80/hZQMQBQMgYWUChLAVcAUGdIIQs1ATIGNQJCATCxIrIBNP6yCCOyEDT/sgezQgEBSSMMQABNSCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gATVFRkUNP4WULA0/ogBOzT/MQASRDT/NP4WUChLAVcAKGdIIQU1ATIGNQJCAMpIgaCNBogBFCI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCAJc1/zX+Nf01/DX7Nfo1+TT8QQBLNPs0/gkiDkEAE7EisgE0/7III7IQNPmyB7NCAEs0/SQINfg0+TT6UDT7FlA0/RZQNP8WUDT4FlAoSwFXAGBnSCEHNQEyBjUCQgA5NP8iDUEAE7EisgE0/7III7IQNPqyB7NCAANCAAAxGSEKEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v221",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v246",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v289",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v221",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v246",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v289",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620018a8380380620018a88339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b61164c806200025c6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a5780638f3c54f41461011d578063a98bf22314610130578063ab53f2c614610143578063e533a29d1461016657005b80631e93b0f1146100985780633e59bac4146100bc57806373b4522c146100cf57806383230757146100e2578063873779a1146100f757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611224565b610179565b6100966100dd366004611224565b610399565b3480156100ee57600080fd5b506001546100a9565b610096610105366004611224565b61060a565b610096610118366004611224565b6107ad565b61009661012b366004611224565b610948565b61009661013e366004611224565b610aff565b34801561014f57600080fd5b50610158610caf565b6040516100b3929190611247565b610096610174366004611224565b610d4c565b610189600260005414600d610ee7565b6101a38135158061019c57506001548235145b600e610ee7565b6000808055600280546101b5906112a4565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906112a4565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050806020019051810190610246919061132c565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33836040516102799291906113bc565b60405180910390a161028d3415600c610ee7565b61029d60408301602084016113d9565b1561034157604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b8701518652338552438084526003909855600197909755895195860196909652925197840197909752519092169481019490945251908301529060a0015b6040516020818303038152906040526002908051906020019061033b9291906110db565b50505050565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561037e573d6000803e3d6000fd5b50600080805560018190556103959060029061115f565b5050565b6103a96003600054146011610ee7565b6103c3813515806103bc57506001548235145b6012610ee7565b6000808055600280546103d5906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610401906112a4565b801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b505050505080602001905181019061046691906113f4565b9050610485604051806040016040528060008152602001600081525090565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633846040516104b6929190611474565b60405180910390a16104ca3415600f610ee7565b81516104e2906001600160a01b031633146010610ee7565b600482606001516104f391906114bf565b81526105006004436114bf565b8160200181815250506105546040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015185168187019081524360608089018281528a516080808c019182528c89015160a0808e0191825260046000556001969096558751998a019a909a52965195880195909552925190971696850196909652519183019190915251928101929092525160c082015260e001604051602081830303815290604052600290805190602001906106039291906110db565b5050505050565b61061a600160005414600a610ee7565b6106348135158061062d57506001548235145b600b610ee7565b600080805560028054610646906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610672906112a4565b80156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b50505050508060200190518101906106d791906114d7565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a1610731346020840135146008610ee7565b8051610749906001600160a01b031633146009610ee7565b6040805180820182526000808252602080830182815285516001600160a01b03168085528783013582526002938490554360015585518084019190915290518186015284518082038601815260609091019094528351929361033b939101906110db565b6107bd600460005414601a610ee7565b6107d7813515806107d057506001548235145b601b610ee7565b6000808055600280546107e9906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610815906112a4565b80156108625780601f1061083757610100808354040283529160200191610862565b820191906000526020600020905b81548152906001019060200180831161084557829003601f168201915b505050505080602001905181019061087a919061152f565b905061088e8160a00151431015601c610ee7565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108bf929190611474565b60405180910390a16108d334156018610ee7565b8051610907906001600160a01b031633146108fd5760408201516001600160a01b03163314610900565b60015b6019610ee7565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f1935050505015801561037e573d6000803e3d6000fd5b610958600a60005414601f610ee7565b6109728135158061096b57506001548235145b6020610ee7565b600080805560028054610984906112a4565b80601f01602080910402602001604051908101604052809291908181526020018280546109b0906112a4565b80156109fd5780601f106109d2576101008083540402835291602001916109fd565b820191906000526020600020905b8154815290600101906020018083116109e057829003601f168201915b5050505050806020019051810190610a159190611597565b9050610a288160a0015143106021610ee7565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3383604051610a599291906113bc565b60405180910390a1610a6d3415601d610ee7565b8051610a85906001600160a01b03163314601e610ee7565b610a8d61119c565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152610ac9919085019085016113d9565b60208083018051921515909252815143910152606080840151825160400152608084015191510152610afa81610f0c565b505050565b610b0f6004600054146015610ee7565b610b2981351580610b2257506001548235145b6016610ee7565b600080805560028054610b3b906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b67906112a4565b8015610bb45780601f10610b8957610100808354040283529160200191610bb4565b820191906000526020600020905b815481529060010190602001808311610b9757829003601f168201915b5050505050806020019051810190610bcc919061152f565b9050610bdf8160a0015143106017610ee7565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610c109291906113bc565b60405180910390a1610c2434156013610ee7565b8051610c3c906001600160a01b031633146014610ee7565b610c4461119c565b815181516001600160a01b0391821690526040808401518351921660209283015260808401518351820152610c7e919085019085016113d9565b60208083018051921515909252815143908201526060808501518351604001529084015191510152610afa81610f0c565b600060606000546002808054610cc4906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf0906112a4565b8015610d3d5780601f10610d1257610100808354040283529160200191610d3d565b820191906000526020600020905b815481529060010190602001808311610d2057829003601f168201915b50505050509050915091509091565b610d5c600a600054146024610ee7565b610d7681351580610d6f57506001548235145b6025610ee7565b600080805560028054610d88906112a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610db4906112a4565b8015610e015780601f10610dd657610100808354040283529160200191610e01565b820191906000526020600020905b815481529060010190602001808311610de457829003601f168201915b5050505050806020019051810190610e199190611597565b9050610e2d8160a001514310156026610ee7565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610e5e929190611474565b60405180910390a1610e7234156022610ee7565b8051610ea6906001600160a01b03163314610e9c5760208201516001600160a01b03163314610e9f565b60015b6023610ee7565b80602001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561037e573d6000803e3d6000fd5b816103955760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151511561106e576000826020015160400151836000015160400151610f4491906115ff565b11610f8b578151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561037e573d6000803e3d6000fd5b6004826020015160200151610fa091906114bf565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b0390811680835284516020908101518316818501908152865160409081015181870190815283890180518501516060808a0191825291518201516080808b019182528b5160a0808d01918252600a600055436001558751998a019a909a529651909916948701949094529151908501525194830194909452925191810191909152905160c082015260e001610317565b602082015160600151156110c5578160000151602001516001600160a01b03166108fc8360200151606001519081150290604051600060405180830381858888f1935050505015801561037e573d6000803e3d6000fd5b600080805560018190556103959060029061115f565b8280546110e7906112a4565b90600052602060002090601f016020900481019282611109576000855561114f565b82601f1061112257805160ff191683800117855561114f565b8280016001018555821561114f579182015b8281111561114f578251825591602001919060010190611134565b5061115b9291506111f7565b5090565b50805461116b906112a4565b6000825580601f1061117b575050565b601f01602090049060005260206000209081019061119991906111f7565b50565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016111f260405180608001604052806000151581526020016000815260200160008152602001600081525090565b905290565b5b8082111561115b57600081556001016111f8565b60006040828403121561121e57600080fd5b50919050565b60006040828403121561123657600080fd5b611240838361120c565b9392505050565b82815260006020604081840152835180604085015260005b8181101561127b5785810183015185820160600152820161125f565b8181111561128d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806112b857607f821691505b6020821081141561121e57634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561130a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461132757600080fd5b919050565b60006040828403121561133e57600080fd5b6040516040810181811067ffffffffffffffff8211171561136f57634e487b7160e01b600052604160045260246000fd5b60405261137b83611310565b8152602083015160208201528091505092915050565b8035801515811461132757600080fd5b803582526113b160208201611391565b151560208301525050565b6001600160a01b03831681526060810161124060208301846113a1565b6000602082840312156113eb57600080fd5b61124082611391565b60006080828403121561140657600080fd5b6040516080810181811067ffffffffffffffff8211171561143757634e487b7160e01b600052604160045260246000fd5b60405261144383611310565b81526020830151602082015261145b60408401611310565b6040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019061149b908401611391565b151560408301529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114d2576114d26114a9565b500190565b6000602082840312156114e957600080fd5b6040516020810181811067ffffffffffffffff8211171561151a57634e487b7160e01b600052604160045260246000fd5b60405261152683611310565b81529392505050565b600060c0828403121561154157600080fd5b6115496112d9565b61155283611310565b81526020830151602082015261156a60408401611310565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060c082840312156115a957600080fd5b6115b16112d9565b6115ba83611310565b81526115c860208401611310565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600082821015611611576116116114a9565b50039056fea2646970667358221220ab9d0c85829d97c00050804afd1e51cc37cfb6325d5449f3486ca48f02b0a74564736f6c634300080c0033`,
  BytecodeLen: 6312,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:41:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:49:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:53:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:67:60:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:79:25:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:82:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:64:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
