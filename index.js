const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.
const titleCased = () => tutorials.map((name) => { 
  const x = name.split(" ");
  for( let i = 0; i< x.length; i++){
        x[i] = x[i][0].toUpperCase() + x[i].slice(1);
        console.log(x);
  }
 
  return x.join(' ');
})

// const titleCased = () =>{
//   const result = tutorials.map(name => callback(name))
//   return result;
// }
// const callback = (name) =>{
//    return name.split(' ').map((word) =>{
//     return (word.charAt(0).toUpperCase() + word.slice(1))
//   }).join(' ');
// }