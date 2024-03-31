// Palindrome
const user_word = prompt("Please enter the word"); 

let beginningEl = 0;// my left side with index 0
let endEl = user_word.length - 1;//my right side with the start index 


while(beginningEl < endEl) {
    if (user_word[beginningEl] !== user_word[endEl]) {
     let noPalindrome = false;
     console.log(`${user_word} is not a palindrome`);
    break}else{
     let palindromeEl = true;
     console.log(`${user_word} is a palindrome`);
    
}
    beginningEl++;// the increment from left
    endEl--;// decreament from right
      

}




