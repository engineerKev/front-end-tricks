// USEEFFECT

  // async try catch
  useEffect(() => {
    async function fetchData() {
      try {
        //rest of code for fetch
      } catch (err) {
        console.log(err);
        //rest of error code
      }
    };
    fetchData();
  }, [])

  // async try catch arrow function
  useEffect(() => {
    const fetchData = async () => {
      try {
        //rest of code for fetch
      } catch (err) {
        console.log(err);
        //rest of error code
      }
    }
    fetchData();
  }, [])

  //async try catch IIFE (immediately invoked function expression)
  useEffect(() => {
    ;(async () => {
      try {
        //rest of code for fetch
      } catch (err) {
        console.log(err);
        //rest of error code
      }
    })()
  })