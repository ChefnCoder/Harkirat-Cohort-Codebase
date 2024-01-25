//gpt code, but understood

function promiseFunction1(t1) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Promise 1 resolved after', t1, 'seconds');
        resolve();
      }, t1 * 1000);
    });
  }
  
  function promiseFunction2(t2) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Promise 2 resolved after', t2, 'seconds');
        resolve();
      }, t2 * 1000);
    });
  }
  
  function promiseFunction3(t3) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Promise 3 resolved after', t3, 'seconds');
        resolve();
      }, t3 * 1000);
    });
  }
  
  function waitForAllPromises(t1, t2, t3) {
    const startTime = Date.now();
  
    const promise1 = promiseFunction1(t1);
    const promise2 = promiseFunction2(t2);
    const promise3 = promiseFunction3(t3);
  
    return Promise.all([promise1, promise2, promise3])
      .then(() => {
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        console.log('All promises completed in', totalTime, 'milliseconds');
        return totalTime;
      });
  }
  
  // Example usage:
  waitForAllPromises(3,2,1)
    .then(totalTime => {
      console.log('Total time taken:', totalTime, 'milliseconds');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  