
const eagles = {
    player1: "Wentz",
    player2: "Alshon",
    player3: "Jenkins",
    player4: "Kendricks"
}

const redskins = {
    player1: "Cousins",
    player2: "Pryor",
    player3: "Norman",
    player4: "Kerrigan"
}

const giants = {
    player1: "Manning",
    player2: "Beckham Jr.",
    player3: "Pierre-Paul",
    player4: "Rodgers-Cromartie"
}

const cowboys = { 
    player1: "Prescott",
    player2: "Elliot",
    player3: "Smith",
    player4: "Scandrick"
}

const output = document.getElementById('dice-Output');
const dice = document.getElementById('dice');
const landingSquare = document.getElementById('b1')
const wentz = document.getElementById("eagle_1")
const alshon = document.getElementById("eagle_2")
const jenkins = document.getElementById("eagle_3")
const kendricks = document.getElementById("eagle_4")
const eagle_sideline = document.getElementById("eagles")
const cousins = document.getElementById('redskin_1')
const pryor = document.getElementById("redskin_2")
const norman = document.getElementById("redskin_3")
const kerrigan = document.getElementById(" redskin_4")
const dak = document.getElementById("cowboy_1");
const eli = document.getElementById("giants_1");
const redskins_square = document.getElementById("b12");
const giants_square = document.getElementById("b24");
const cowboys_square = document.getElementById("b35");
    


/*---------------------Game Logic Below------------------------------

*-------------------------------------------------------------------*/
function welcome() {
    alert("Welcome to NFC East Parchessi! Your mission is to take the Eagles to the Promise Land...THE SUPER BOWL. But first! We must get through the NFC East. Are you ready? Roll the dice to begin !");
}

welcome();

/*---------------------Dice Logic Below------------------------------
//diceRoll function contains the main logic for the dice roll
//Roll will represent a random number between 1 and 6
//The ouput will be placed inside of a div above the dice
//If user rolls a 6, they will play and be able to roll again
//If user rolls 4 sixes in a row, they will lose their turn
*-------------------------------------------------------------------*/
redskins_square.appendChild(cousins);
giants_square.appendChild(eli);
cowboys_square.appendChild(dak);
const squareOne = function(){
                     landingSquare.appendChild(this);
                     //remove ability to click mutliple pieces on six roll
                  }

const move = function () {
                wentz.addEventListener("click", reposition)
                alshon.addEventListener("click", reposition)
                jenkins.addEventListener("click", reposition)
                kendricks.addEventListener("click", reposition)
             }

const reposition = function() {
                     let count = localStorage.getItem("currentRoll");
                     let currSpot = `b`;
                     let nextSpot = parseInt(this.parentNode.id.slice(1)) + parseInt(count);

                     let newSpot = currSpot + nextSpot;
                     document.getElementById(`${newSpot}`).appendChild(this);
                   }
        

const diceRoll = function() {
    const roll = Math.ceil(Math.random()*  6);

    dice.style.animation = `spin .5s linear`;
    output.innerHTML = roll;
    
    if (roll === 6) {
        setTimeout(function () {alert("You rolled a SIX! You can move a player onto the board")}, 200);

        wentz.addEventListener("click", squareOne)
        alshon.addEventListener("click", squareOne)
        jenkins.addEventListener("click", squareOne)
        kendricks.addEventListener("click", squareOne)
        move;
        
    }else if( roll !== 6 && wentz.parentNode === eagle_sideline && alshon.parentNode === eagle_sideline && jenkins.parentNode === eagle_sideline && jenkins.parentNode === eagle_sideline) {
        setTimeout(function() {alert("Computer's turn!")}, 400);
        moveRedskin(); 
        moveCowboy();
        moveGiant();
    }
    
    
    //bellow line used to reset animation so that it runs every click
    setTimeout(function() {dice.style.animation = null}, 1000);
    localStorage.setItem("currentRoll", roll)
    move;
}

//EventListener added to div with dice
document.getElementById('dice').addEventListener("click", diceRoll);


function moveRedskin() {
    setInterval(function(){
        const roll = Math.ceil(Math.random() *  3);
        localStorage.setItem("compRoll", roll);
        
        
        let currSpot = `b`;
        let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);
        

        let newSpot = currSpot + nextSpot;
        document.getElementById(`${newSpot}`).appendChild(cousins);
        
    }, 5000);
}

function moveGiant() {
    setInterval(function(){
        const roll = Math.ceil(Math.random() *  2);
        localStorage.setItem("compRoll", roll);
        
        
        let currSpot = `b`;
        let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);
        

        let newSpot = currSpot + nextSpot;
        document.getElementById(`${newSpot}`).appendChild(eli);
        
    },3000);
}

function moveCowboy() {
    setInterval(function(){
        const roll = Math.ceil(Math.random() *  3);
        localStorage.setItem("compRoll", roll);
        
        
        let currSpot = `b`;
        let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);
        

        let newSpot = currSpot + nextSpot;
        document.getElementById(`${newSpot}`).appendChild(dak);
        
    }, 5000);
}