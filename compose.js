/* 
  accepts functions, 
  stores them in closure scope of execution context,
  returns function that accepts first input and applies all functions to it with right associativity
*/
const compose = (f, g) => x => f(g(x));
/* 
  each iteration of reduce keeps track of what the previous iterations' values of acc and f are
  when invoked, the value simply goes through to closure scope chain of functions
*/
const compose2 = (...ff) => {
  return ff.reduceRight((acc, f) => {
    return (x) => {
      return f(acc(x));
    }
  });
};
const someMap1 = n => n + 1;
const someMap2 = n => n * 2;
const someMap3 = n => n * 3;
const q = compose2(someMap1, someMap2, someMap3)(1)

const identity = (x) => x;

const composeMap = (...ff) => {
  return ff.reduce((g, f) => {
    return (x) => {
      return g(x).map(f)
    }
  }, identity);
};

const f = x => x + 1
const g = x => x + 2
const res = composeMap(f, g)([1]);

