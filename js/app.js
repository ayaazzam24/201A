'use strict';
let score = 0;
 
  let UserName = prompt('what is your name ?');



//Q1

let userInput = prompt('Do you think I like pasta ?');

function Correct(){
  if (userInput.toLowerCase() ==='yes' || userInput.toLowerCase() ==='y'){
score ++;
alert('correct');
} else if(userInput ==='no' || userInput ==='n'){
  alert('incorrect ');

}
}


Correct(userInput);



let userLike = prompt('do you think I like Jawaker game ?');
function favGame(){

if (userLike.toLowerCase() ==='yes' || userLike.toLowerCase() ==='y'){
score ++;
alert('correct')
} else if(userLike ==='no' || userLike ==='n'){
  alert('incorrect ');
   
}

}
favGame(userLike);

//Q 3

let myFav = prompt('do you think I like PUBG game ?');

function pubgGame (){

if (myFav.toLowerCase() ==='yes' || myFav.toLowerCase() ==='y'){
score++;
alert('incorrect')
} else if(myFav ==='no' || myFav ==='n'){
  alert('correct ')
}

}
pubgGame(myFav);
 
//Q4
let yourUser = prompt('do you think I LOVE SHOPPING ?');

function luvShopping(){
 yourUser = yourUser.toLowerCase();
if (yourUser.toLowerCase() ==='yes' || yourUser.toLowerCase() ==='y'){
score++;
alert('correct')
} else if(yourUser ==='no' || yourUser ==='n'){
  alert('incorrect ')
}
}
luvShopping(yourUser);

//Q5
let myUser = prompt('do you think my favourite color is black  ?');

function favColor(){
 
if (myUser.toLowerCase() ==='yes' || myUser.toLowerCase() ==='y'){
score ++;
alert('correct')
} else if(myUser ==='no' || myUser ==='n'){
  alert('incorrect ')
}
}
favColor(myUser);

//Q6
let user1= prompt('guess what is my age  ?');
function myAge (){
 parseInt(user1);
if(user1===24){
  score++;
    alert ('correct my age is 24 ')
}
else{
 for(let i=1 ; i<4 ;i++){
  if (user1 <= 23){
    alert ('too low');
    user1 = prompt('enter the correct number');  
  }else if (user1 > 24){
  alert ('too high');
  user1=prompt ('enter the correct number')
} 
if(user1 === 24){
  score++;
  break;
 } 
}
alert ('My age is 24')}
}
myAge(user1);


//Q7
let userFav =['black', 'blue' , 'green' ,'white','pink'];
function favoriteColor(){
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
}
favoriteColor(userFav);


 

alert('My favorite colors are: black, blue , green , white , pink');

alert(' You got ' + score + ' correct answers!');


alert ('welcome' + UserName)

