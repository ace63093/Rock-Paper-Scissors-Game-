function playerSelection(){
    let string='Nothing yet'
    string=window.prompt('Please type in rock, paper, or scissors')
    string=string.toLowerCase()
    return string;

}

function computerPlay(){
    result = 3*Math.random()
    console.log(result)
    answer='Nothing yet'
    if (result <= 3 && result >2) {
     answer= 'rock';
     console.log(`Computer picks: `+answer)
    }
    else if (result <= 2 && result >1) {
     answer= 'paper';
     console.log(`Computer picks: `+answer)
    }
    else  {
        answer= 'scissors';
        console.log(`Computer picks: `+answer)
       }
    return(answer)
}

function playRound(pls,cls){
 //pls=playerSelection()
 //cls=computerPlay()
 let computerScore = 0;
 let playerScore = 0;
if (pls=='rock' && cls == 'scissors'){
    playerScore++
    }
else if (pls=='rock' && cls == 'paper'){
    computerScore++
        }
else if (pls=='scissors' && cls == 'paper'){
    playerScore++
                }
else if (pls=='scissors' && cls == 'rock'){
    computerScore++
                                }    
else if (pls=='paper' && cls == 'scissors'){
    computerScore++}

else if (pls=='paper' && cls == 'rock'){
        playerScore++
                                                }
else if (pls=='scissors' && cls == 'rock'){
        computerScore++
                                                        }
else if (pls=='scissors' && cls == 'paper'){
        playerScore++
                                                                }
else if (pls=='rock' && cls == 'paper'){
        computerScore++
                                                                                }    
else if (pls=='paper' && cls == 'scissors'){
        computerScore++}
                                                
 else if (pls=='paper' && cls == 'scissors'){
        playerScore++
                                                                                                }

console.log('Player Score is : '+playerScore)
console.log('Computer Score is : '+computerScore)
if (computerScore==1){
    return 'computer won'
}
else if (playerScore === 1){
    return 'player won'
}
else return 'tie'

}

function game(){
    let i=0;
    let cScore=0;
    let pScore=0;
    let r= 'nothing yet'
    do {
    r='n'    
    r = playRound(playerSelection(),computerPlay())
    i++
    if (r == 'player won'){
        pScore++
        console.log(r)}
        else if (r == 'computer won') {cScore++ 
            console.log(r)}
        
        else console.log('tied')
        }
        while(i<5)

   
    

    if (cScore>pScore){
       alert('The Computer beat you human! The score was: Computer: '+cScore+', Player: '+pScore)}
    else if (pScore>cScore){
     alert('You Won! The score was: Computer: '+cScore+', Player: '+pScore)}
    else alert('game was tied!')
    

    }


game();