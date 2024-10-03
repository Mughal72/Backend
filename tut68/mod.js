// mod.js, we will make our own modules.

console.log("This is mod.js ")
// making the module first
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
        // In the above example, we have created a simple average function that takes the value as arr and returns the average.
        // Now to import this module, we have to write as follows in index.js-
    });
    return sum/arr.length;

}
//  module.exports = average; //mode function average will return

// We can also create an object and make it as a module
// module.exports = {
//     avg: average,
//     name: "Anber",
//     fname: "Sattar",
//     profession: "Front - end Developer" ,
//     repo: "Github"
//     // We can call this module in index.js
// }

module.exports.name  = "Anber"
 //module.expots apny ap mn ek object hai