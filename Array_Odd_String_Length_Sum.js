// Given an array of strings print the sum of lengths if the characters in the string are odd

const arr = ["desk" ,"chair" , "book" , "beaker" ,"pencil" , "calculator" , "clock" , "blackboard"]

 const arrayString = (x,y) => (y.length %2 === 1)? x+y.length : x+0
 console.log(arr.reduce(arrayString ,0))