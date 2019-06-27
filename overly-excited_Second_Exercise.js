// Practice: Some words are more exciting than others
// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if(i % 3 === 0) {
            buildMeUp = buildMeUp += theWordArray[i] + ! +' ';
        }else {
            theWordArray[i]
        }
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console
    }
    console.log(buildMeUp)

}

addExcitement(sentence)


/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
//const addExcitement = (theWordArray, character, num) => {
//     let buildMeUp = ""

//     for (let i = 1; i < theWordArray.length+1; i++) {
//         if (i%3 === 0) {
//             buildMeUp += `${theWordArray[i-1]}${character.repeat(num)} `
//             console.log(buildMeUp)
//         } else {
//             buildMeUp += `${theWordArray[i-1]} `;
//             console.log(buildMeUp);

//         }
        
        
//     }
    
// }


// // Invoke the function and pass in the array
// addExcitement(sentence, "?", 3);



/*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement(sentence, punc) {
//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = " ";
//     //   console.log('i',i,'i+1',i+1,'i % 3',i%3,'i+1%3',(i + 1) %3);
//     for (let i = 0; i < sentence.length; i++) {
//       // Concatenate the new word onto buildMeUp
//       // buildMeUp += sentence[i];
//       // let buildSentence = buildMeUp[i];
//       // buildMeUp[sentence];
  
//       //
//       //     If the current value of `i` divided by 3 has no
//       //     remainder, add an exclamation point to the end of
//       //     the word and then concatenate it to `buildMeUp`.
//       if ([i + 1] % 3 === 0) {
//         buildMeUp += sentence[i] + punc;
//         //   console.log('i',i,'i+1',i+1,'i % 3',i%3,'i+1%3',(i + 1) %3);
//       } else {
//         buildMeUp += sentence[i];
//       }
//       console.log(buildMeUp);
//       //     Otherwise, just concatenate the word itself.
//       //
  
//       // Print buildMeUp to the console
//     }
//   }
  
//   // Invoke the function and pass in the array
  
//   // Add a new argument to the function so that a developer can specify how many times the special character should be added.
  
//   // I want to use a 4 asterisks
//   // addExcitement(sentence, "*", 4)
//   addExcitement(sentence, "*");



function go (name, age) {
    if(age < 20) {
        return name;
    }else {
        return `i am ${age} years old!`
    }
     
}

console.log(go("Will", 19))