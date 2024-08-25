async function asyncFunction1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Async function 1');
        resolve('Result from async function 1');
      }, 1000);
    });
  }
  
  async function asyncFunction2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Async function 2');
        resolve('Result from async function 2');
      }, 1500);
    });
  }
  
  //Call both functions in parallel using Promise.all
  async function executeParallelFunctions() {
    try {
      const [result1, result2] = await Promise.all([asyncFunction1(), asyncFunction2()]);
  
      console.log('Results:', result1, result2);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // let db = sqlmodel
  // let data = await sqlmodel.user();
  // let is = data.id
  // let newdata = await sqlmodel.user().update({});
  
  // Invoke the function
  executeParallelFunctions();