//count the number of vowels in a given word/sentence

let word = "fantastica";
const vowels = ["a","e","i","o","u"]

function getCount(str){
  let count = 0;

  // loop through the array of letters
  for (let letter of str) {
    // check if a letter is in the vowels array
    if (vowels.includes(letter)) { //research includes()
      count++;
    }
  }

  return count
}

console.log(getCount(word))
