// Iteration 1: Names and Input

let hacker1 = 'Roberto';
console.log(hacker1);
console.log(`The driver's name is ${hacker1}`); // use backticks to create the string with variable inside defined as ${ variable }
let hacker2 = 'Ana';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

hacker1 = 'Juan'
hacker2 = 'Anna'

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name and it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name with ${hacker2.length} characters`)
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length}!`)};

// Iteration 3: Loops
// 3.1

let newHacker1 = ""   // declare an empty variable 
for (let i = 0; i < hacker1.length; i++){   // the loop has 3 expressions, 1st declares the i (itarator), 2nd compares until when it should run, 3rd it adds one number to the counter
  newHacker1 += hacker1[i] + ' ';
}
console.log(newHacker1.toUpperCase().trim())

// 3.2

console.log(hacker2.split("").reverse().join(''))

// 3.3

if(hacker1 < hacker2){
  console.log(`The driver's name goes first.`)
}else if(hacker1>hacker2){
  console.log(`Yo, the navigator goes first, definitely.`)
}else(console.log('What?! You both have the same name?'));

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare vitae orci nec semper. Nulla facilisi. Aenean a dui porta, commodo risus sed, porta lorem. Morbi augue libero, sagittis non sodales eget, tincidunt quis velit. Etiam fringilla lacus non pulvinar eleifend. Maecenas ac bibendum lorem, eget vestibulum sapien. Donec ac elementum nisl. Phasellus leo nulla, aliquet vel fermentum at, sollicitudin a nisi. Maecenas semper non enim fringilla dapibus. Quisque turpis sapien, suscipit vitae commodo ullamcorper, vestibulum in turpis. Nulla laoreet purus ac viverra egestas. Ut vel quam eu diam tempor dictum et sed leo. In vitae arcu sollicitudin, fermentum risus at, dapibus nunc. Nullam auctor tempus metus et convallis. Mauris tincidunt purus sit amet lectus consequat egestas. Integer eu diam massa.

Sed placerat, diam vitae dictum lobortis, magna ligula lobortis dui, id pulvinar quam metus at libero. Mauris ut ultricies enim. Sed nec enim sit amet ex mollis feugiat. Maecenas feugiat porta magna, at congue magna lobortis eget. Maecenas ultricies ante in mollis pellentesque. Cras tempor tellus id ante porta cursus. Nam quis egestas ex, sit amet lobortis leo. Nunc sed elit tortor.

Nulla auctor sodales turpis. Fusce condimentum urna leo, sed tempor augue molestie ut. Suspendisse auctor odio a felis efficitur, sed accumsan eros sollicitudin. Mauris id augue non nisi laoreet auctor. Maecenas tincidunt ante sit amet nunc porta, sit amet accumsan nunc tincidunt. Nam commodo orci tristique, venenatis urna eget, facilisis quam. Suspendisse vel enim id nisl lacinia euismod at a arcu. Fusce ut orci rhoncus, vestibulum erat sed, semper ex. Donec vitae dolor elit. Praesent maximus nisl sed nulla condimentum consequat. Pellentesque at interdum diam, eu congue lorem. Etiam porttitor consectetur aliquam.`
 
// Number of charachters:
console.log(longText.length)
// Number of Words:
console.log(`Number of words in the text is: ${longText.split(" ").length}`)

// Count number of times a word appears:

wordsArray = longText.split(" ")

let counter = 0

for (let i = 0; i < wordsArray.lenght; i++){
  if(i.includes('et')){
  counter += 1  
  }else(counter += 0)
}
console.log(counter)
