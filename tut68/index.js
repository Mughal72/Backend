//  we are going to learn how to create our own custom modules in Node using NodeJs. The purpose of creating our own modules is to help other creators to use them in their code which can help them.  we are going to learn how to create our own custom modules in Node using NodeJs. The purpose of creating our own modules is to help other creators to use them in their code which can help them. 
// index.js, we will make a file that will use modules

// console.log(average([3,4])); //3.5 o/p
// const average = require("./mod");
// After executing this, one thing to notice is, the code gets executed but we still do not get the function back. To get back the function, we have to make the function to behave explicitly in mod.js file 
const mod = require("./mod"); //mod module.exports jo krta h wo yahan li ha
console.log(mod.name);  //name will print in the output
// console.log(mod.avg([3,4])); 
console.log('This is index')
// In the same way, we can export multiple objects and create our own modules with the help of NodeJs. 

