

// domain/.netlify/functions/hello

const items = [
  {id : 1 , name : 'sina'},
  {id : 2 , name : 'amin'}
]


exports.handler = async function(event , context) {
   return {
     statusCode: 200,
     body: 'Hello World'
   }
}