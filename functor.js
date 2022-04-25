
/* 
  * map with context  Functor(a) => Functor(b)
  * pass in the function you want to map with; the initialization object is stored in closure scope of the functor, and when you call map on the instance of the functor initialized with some object, you will receive a new object with the function applied to the initialization object
*/

const testFunctor = (run) => {
  return {
    run,
    map(fn) {
      if (typeof run !== 'object') return
      let mappedObj;
      if (Array.isArray(this.run)) {
        mappedObj = [] 
        for (const element of this.run) {
          mappedObj.push(fn(element))
        }
      } else {
        mappedObj = {}
        for (const key of Object.keys(this.run)) {
          mappedObj[key] = fn(this.run[key])
        }
        
      }
      return mappedObj
    }
  }
}
const functorInstanceWithObj = testFunctor({ test: 2 }) // testFunctorWithObj initialized
const functorInstanceWithArray = testFunctor([2]) // functorInstanceWithArray initialized
const test1 = functorInstanceWithObj.map((number) => number + 40)
const test2 = functorInstanceWithArray.map((number) => number + 40)

module.exports = {
  testFunctor
}