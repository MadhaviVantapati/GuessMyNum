//for guessing the secret number
const number=Math.trunc(Math.random()*30)+1;


let score=20;
let highscore=0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function(){
const guess=Number(document.querySelector('.guess').value);

if(!guess){
    console.log(document.querySelector('.message').textContent="No number  :)");
    document.querySelector('.message').style.color="white";
    document.querySelector('.message').style.fontSize = "5rem";


}
//if we find out the number correctly
else if(guess===number){
    document.querySelector('.message').textContent=" Wahoooo Correct number  "
    document.querySelector('.number').textContent=number;
    document.querySelector('.highscore').textContent=score;
    document.querySelector('.message').style.color="white";
    document.querySelector('.message').style.fontSize = "4rem";
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    
}//if the number is less

else if(guess<number){

    if(score>1){
    document.querySelector('.message').textContent="Tooo Lowww"
    score--;
    document.querySelector('.score').textContent=score;

}else{
    document.querySelector('.message').textContent="we lose the game";
    document.querySelector('.score').textContent=0;
}
//if the number is greater

}else if(guess>number){
    if(score>1){
    document.querySelector('.message').textContent="Tooo Highhhh"
   score--;
   document.querySelector('.score').textContent=score;
   

}else{
    document.querySelector('.message').textContent="You lost the game";
    document.querySelector('.score').textContent=0;
}
}

});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });


