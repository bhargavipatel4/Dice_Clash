 function rollDice()
{var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "./images/dice" +randomNumber1+ ".png" );
document.querySelector(".img2").setAttribute("src", "./images/dice" +randomNumber2+ ".png" );

var win1 = [ "🏆 Player One wins the game!"
    , "👑 Player One takes the crown!"
    ,"🎯 Player One hits the mark!"
    ,"💥 Boom! Player One dominates!" 
    ,"🎲 Player One rolls to victory!"
    ,"🚀 Player One blasts ahead!"
    ,"🔥 Player One reigns supreme!"
    ,"🌟 Glory goes to Player One"
]

var win2 = ["🎲 Player Two Takes the Crown!"
    ,"🚀 Player Two Dominates the Dice!"
    ,"🔥 Player Two Crushed It!"
    ,"👑 All Hail Player Two, the Victor!"
    
    ]
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = win1[Math.floor(Math.random()*8)];
}
else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = win2[Math.floor(Math.random()*4)];
}
else
{
    document.querySelector("h1").innerHTML = "It’s a draw! Try again!";
}
};