/**

    We will push to github all along the way so we track our week and keep a log

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */
const assignments=[{name : 'name',completed: true}]

 
import { assignments } from './data/assigments'
console.log(assignments)
/**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function
    


    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */


/**

    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */
for(let index in assignments){

    const assigment = assignments[index]
    console.log(index,assignment)
}

for(let index =0; index < assignments.length;index +1){
const assigment = assignments[index]
cosnsole.log({ assigment })
}



/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */
let AllAssigment=[]
for(let index = 0; index < assignments.length;index +1){
const assigment = assignments[index]
AllAssigments.push(assigment)}

console.log({AllAssigments})

let allAssignments = assignments.map((assigment)=>{
return assigment
})
console.log(allAssignments)


/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */


module.export = assignments