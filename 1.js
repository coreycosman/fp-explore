const R = require('ramda')
const Maybe = require('ramda-fantasy').Maybe

// parse JSON string into object
// parse :: String -> Object | Null
function parse(s) {
  try {
    return JSON.parse(s)
  } catch (e) {
    return null
  }
}

// prop :: (Object, String) -> Object | String | Null
const prop = (obj, name) => obj[name]

// maybeParseJson :: String -> Maybe
const maybeParseJson = json => Maybe.toMaybe(parse(json))

// maybeProp :: String -> Object -> Maybe
const maybeProp = prop => obj => Maybe.toMaybe(obj[prop])

// convert a "simple" function to return Maybe
// https://github.com/ramda/ramda-fantasy/blob/master/docs/Maybe.md#maybeof
const maybeUpper = R.compose(Maybe.of, R.toUpper)

// a typical user object is
/*
{
  user:
   {
     address:
       {
         state: "fl"
       }
    }
}
*/
// getStateCode :: String -> Maybe
// const getStateCode = R.composeK(
//   maybeUpper,
//   maybeProp('state'),
//   maybeProp('address'),
//   maybeProp('user'),
//   maybeParseJson
// )

module.exports = getStateCode