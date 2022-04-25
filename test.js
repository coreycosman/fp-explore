function curry(fn) {
  const arity = fn.length;


  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => {
  return xs.filter(f) 
});
const map = curry((f, xs) => xs.map(f));
const hasLetterR = match(/r/g); // x => x.match(/r/g)

// match(/r/g, 'hello world'); // [ 'r' ]

// hasLetterR('hello world'); // [ 'r' ]
// hasLetterR('just j and s and t etc')
// console.log(curry;
const filterNoLetterRs = filter(hasLetterR)
console.log((filterNoLetterRs(['sup', 'r', 'sup', 'rsup'])));