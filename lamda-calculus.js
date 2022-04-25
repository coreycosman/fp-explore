// look into halting problem alan turing
// look into beta reduction and beta normal form
// schonfinkel
// haskell b curry
// smullyan to mock a mockingbird

/* mathematical logic:
  peano
  russell
  von neumann
  godel
  kleene
  rosser
  frege
  schonfinkel
  curry
  church
  turing
*/

/* combinators */
// identity / i combinator
// const i = (a) => a
function i(a) {
  debugger
  return a
}

// const m = f => f(f)
// mockingbird / little omega / m combinator / self-application
function m(f) {
  debugger
   return f(f)
}
// kestrel / k combinator / first / const
// const k = (a) => (b) => a 
function k(a) {
  return function(b) {
    return a
  }
}
// kite / k combinator / second
const ki = (a) => (b) => b 
function ki (a) {
  return function(b) {
    return b
  }
}














try {
  debugger
  console.log(m(i))
}
catch(e) {
  console.log(e);
}

https://www.youtube.com/watch?v=3VQ382QG-y4&list=PLpkHU923F2XFWv-XfVuvWuxq41h21nOPK&index=1&ab_channel=FullstackAcademy