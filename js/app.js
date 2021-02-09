'use strict';
let score = 0
let UserName = prompt('what is your name ?');


let userInput = prompt('Do you think I like pasta ?');
//console.log(userInput.toLowerCase());
 userInput = userInput.toLowerCase();
if (userInput ==='yes' || userInput ==='y'){
score ++;
alert('correct')
} else if(userInput ==='no' || userInput ==='n'){
  alert('incorrect ')
}


let userLike = prompt('do you think I like Jawaker game ?');
//console.log(userLike.toLowerCase());
 userLike = userLike.toLowerCase();
if (userLike ==='yes' || userLike ==='y'){
score ++;
alert('correct')
} else if(userLike ==='no' || userLike ==='n'){
  alert('incorrect ')
}


let myFav = prompt('do you think I like PUBG game ?');
//console.log(myFav.toLowerCase());
 myFav = myFav.toLowerCase();
if (myFav ==='yes' || myFav ==='y'){
score++;
alert('incorrect')
} else if(myFav ==='no' || myFav ==='n'){
  alert('correct ')
}

let yourUser = prompt('do you think I LOVE SHOPPING ?');
//console.log(yourUser.toLowerCase());
 yourUser = yourUser.toLowerCase();
if (yourUser ==='yes' || yourUser ==='y'){
score++;
alert('correct')
} else if(yourUser ==='no' || yourUser ==='n'){
  alert('incorrect ')
}

let myUser = prompt('do you think my favourite color is black  ?');
//console.log(myUser.toLowerCase());
 myUser = myUser.toLowerCase();
if (myUser ==='yes' || myUser ==='y'){
score ++;
alert('correct')
} else if(myUser ==='no' || myUser ==='n'){
  alert('incorrect ')
}

let user1 = prompt('guess what is my age  ?');
 parseInt(user1);
if(user1===24){
  score++;
    alert ('correct my age is 24 ')
}
else{
 for(let i=1 ; i<=4 ;i++){
  if (user1 <= 23){
    alert ('too low');
    user1 = prompt('enter the correct number');  
  }else if (user1 > 24){
  alert ('too high');
  user1=prompt ('enter the correct number')
} if(user1 === 24){
  score++;
  break;
 } 
}
alert ('you are correct')}



let userFav =['black', 'blue' , 'green' ,'white','pink'];
for (let i = 0; i < 6; i++) {
  let userAnsw = prompt('Can you guess my favorite colors?');
  let guess = userAnsw.toLowerCase();
  for (let a = 0 ; a < userFav.length ; a++ ){
    if (guess === userFav[a]) {
      alert('Correct answer');
       score++;
      i = 6;
      break;
    }
  }
  if (i !== 6){
    alert('Sorry wrong answer, try again');
  }
}

 

alert('My favorite colors are: black, blue , green , white , pink');

alert(' You got ' + score + ' correct answers!');


alert ('welcome' + UserName)



