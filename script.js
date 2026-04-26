// CODE MADE BY TGCPLAYZ4220. YOU MAY EDIT THIS CODE BUT PLEASE GIVE CREDIT! im also a beginner so feel free to add changes

// Link References
let foodButton = document.getElementById("foodButton")
let xpDisplay = document.getElementById("xpDisplay")
let xpPowerDisplay = document.getElementById("xpPowerDisplay")
let levelDisplay = document.getElementById("levelDisplay")
let lvlBonusDisplay = document.getElementById("lvlBonusDisplay")
let currentAnimalDisplay = document.getElementById("currentAnimalDisplay")
let nextAnimalDisplay = document.getElementById("nextAnimalDisplay")

// Special Abilities Link References
let butterflySpecial = document.getElementById("butterflySpecial")
let mosquitoSpecial = document.getElementById("mosquitoSpecial")
let waspSpecial = document.getElementById("waspSpecial")
let duckSpecial = document.getElementById("duckSpecial")
let parrotSpecial = document.getElementById("parrotSpecial")
let turkeySpecial = document.getElementById("turkeySpecial")
let hornetSpecial = document.getElementById("hornetSpecial")
let eagleSpecial = document.getElementById("eagleSpecial")
let ravenSpecial = document.getElementById("ravenSpecial")
let pterodactylSpecial = document.getElementById("pterodactylSpecial")
let stoneeaterSpecial = document.getElementById("stoneeaterSpecial")
let dragonSpecial = document.getElementById("dragonSpecial")
let cosmicinsectSpecial = document.getElementById("cosmicinsectSpecial")
let ghostSpecial = document.getElementById("ghostSpecial")


// Variables
let EXP = 0
let xpPerClick = 1
let level = 0
let levelBonusMultiplier = 1 + level * 0.1
let xpUntilNextAnimal = 30
let xpUntilNextLevel = 1000
let currentAnimal = "Fly"
let nextAnimal = "Butterfly"
let ranks = 1
let nextLevel = level + 1
let levelDisplayInteger = level * 10

// Main Manager
function Manage(){
    uiManager()
    levelManager()
    evolutionManager()
}

// UI Manager (please do not touch unless you know what you're doing)
function uiManager(){
    xpDisplay.innerText = "📈 Current EXP: " + EXP
    xpPowerDisplay.innerText = "🎚️ EXP per click: " + xpPerClick
    levelDisplay.innerText = "⚙️ Level: " + level + " ("+ xpUntilNextLevel +" EXP until Level " + nextLevel + ")"
    lvlBonusDisplay.innerText = "📊 Level Bonus: " + levelDisplayInteger + "%"
    currentAnimalDisplay.innerText = "🐦 Current: " + currentAnimal + " (" + xpUntilNextAnimal + " EXP until " + nextAnimal + ")"
    nextAnimalDisplay.innerText = "⏭️ Next: " + nextAnimal
}

// Level Manager (please do not touch unless you know what you're doing)
function levelManager(){
    // Level 1
    if(EXP >= 1000 && level === 0){
        level = 1
        nextLevel = 2
        levelBonusMultiplier = 1.1
        levelDisplayInteger = 10
        xpUntilNextLevel = 10000
    }

    // Level 2
    if(EXP >= 10000 && level === 1){
        level = 2
        nextLevel = 3
        levelBonusMultiplier = 1.2
        levelDisplayInteger = 20
        xpUntilNextLevel = 20000
    }

    // Level 3
    if(EXP >= 20000 && level === 2){
        level = 3
        nextLevel = 4
        levelBonusMultiplier = 1.3
        levelDisplayInteger = 30
        xpUntilNextLevel = 40000 
    }

    // Level 4
    if(EXP >= 40000 && level === 3){
        level = 4
        nextLevel = 5
        levelBonusMultiplier = 1.4
        levelDisplayInteger = 40
        xpUntilNextLevel = 100000
    }

    // Level 5 (MAX)
    if(EXP >= 100000 && level === 4){
        level = 5
        nextLevel = "MAX"
        levelBonusMultiplier = 1.5
        levelDisplayInteger = 50
        xpUntilNextLevel = Infinity
    }
}

// Evolution Manager (please do not touch unless you know what you're doing)
function evolutionManager(){ 
    if(EXP >= 30 && currentAnimal === "Fly"){ 
        ranks = 2
        currentAnimal = "Butterfly"
        nextAnimal = "Mosquito"
        xpUntilNextAnimal = 50
    }

    if(EXP >= 80 && currentAnimal === "Butterfly"){
        ranks = 3
        currentAnimal = "Mosquito"
        nextAnimal = "Wasp"
        xpUntilNextAnimal = 70
    }

    if(EXP >= 150 && currentAnimal === "Mosquito"){
        ranks = 4
        currentAnimal = "Wasp"
        nextAnimal = "Dragonfly"
        xpUntilNextAnimal = 240
    }

    if(EXP >= 390 && currentAnimal === "Wasp"){
        ranks = 5
        currentAnimal = "Dragonfly"
        nextAnimal = "Pigeon"
        xpUntilNextAnimal = 260
    }

    if(EXP >= 650 && currentAnimal === "Dragonfly"){
        ranks = 6
        currentAnimal = "Pigeon"
        nextAnimal = "Duck"
        xpUntilNextAnimal = 300
    }

    if(EXP >= 950 && currentAnimal === "Pigeon"){
        ranks = 7
        currentAnimal = "Duck"
        nextAnimal = "Blue Bird"
        xpUntilNextAnimal = 350
    }

    if(EXP >= 1300 && currentAnimal === "Duck"){
        ranks = 8
        currentAnimal = "Blue Bird"
        nextAnimal = "Hen"
        xpUntilNextAnimal = 400
    }

    if(EXP >= 1700 && currentAnimal === "Blue Bird"){
        ranks = 9
        currentAnimal = "Hen"
        nextAnimal = "Parrot"
        xpUntilNextAnimal = 450
    }

    if(EXP >= 2150 && currentAnimal === "Hen"){
        ranks = 10
        currentAnimal = "Parrot"
        nextAnimal = "Stork"
        xpUntilNextAnimal = 450
    }

    if(EXP >= 2600 && currentAnimal === "Parrot"){
        ranks = 11
        currentAnimal = "Stork"
        nextAnimal = "Red Bird"
        xpUntilNextAnimal = 500
    }

    if(EXP >= 3100 && currentAnimal === "Stork"){
        ranks = 12
        currentAnimal = "Red Bird"
        nextAnimal = "Pelican"
        xpUntilNextAnimal = 550
    }

    if(EXP >= 3650 && currentAnimal === "Red Bird"){
        ranks = 13
        currentAnimal = "Pelican"
        nextAnimal = "Turkey"
        xpUntilNextAnimal = 850
    }

    if(EXP >= 4500 && currentAnimal === "Pelican"){
        ranks = 14
        currentAnimal = "Turkey"
        nextAnimal = "Bat"
        xpUntilNextAnimal = 750
    }

    if(EXP >= 5250 && currentAnimal === "Turkey"){
        ranks = 15
        currentAnimal = "Bat"
        nextAnimal = "Seagull"
        xpUntilNextAnimal = 800
    }

    if(EXP >= 6050 && currentAnimal === "Bat"){
        ranks = 16
        currentAnimal = "Seagull"
        nextAnimal = "Blackbird"
        xpUntilNextAnimal = 2000
    }

    if(EXP >= 8050 && currentAnimal === "Seagull"){
        ranks = 17
        currentAnimal = "Blackbird"
        nextAnimal = "Hornet"
        xpUntilNextAnimal = 1000
    }

    if(EXP >= 9050 && currentAnimal === "Blackbird"){
        ranks = 18
        currentAnimal = "Hornet"
        nextAnimal = "Vulture"
        xpUntilNextAnimal = 1000
    }

    if(EXP >= 10050 && currentAnimal === "Hornet"){
        ranks = 19
        currentAnimal = "Vulture"
        nextAnimal = "Owl"
        xpUntilNextAnimal = 600
    }

    if(EXP >= 10650 && currentAnimal === "Vulture"){
        ranks = 20
        currentAnimal = "Owl"
        nextAnimal = "Maroon Bird"
        xpUntilNextAnimal = 1400
    }

    if(EXP >= 12050 && currentAnimal === "Owl"){
        ranks = 21
        currentAnimal = "Maroon Bird"
        nextAnimal = "Falcon"
        xpUntilNextAnimal = 1700
    }

    if(EXP >= 13750 && currentAnimal === "Maroon Bird"){
        ranks = 22
        currentAnimal = "Falcon"
        nextAnimal = "Eagle"
        xpUntilNextAnimal = 2000
    }

    if(EXP >= 15750 && currentAnimal === "Falcon"){
        ranks = 23
        currentAnimal = "Eagle"
        nextAnimal = "Snowy Owl"
        xpUntilNextAnimal = 2400
    }

    if(EXP >= 18150 && currentAnimal === "Eagle"){
        ranks = 24
        currentAnimal = "Snowy Owl"
        nextAnimal = "Hawk"
        xpUntilNextAnimal = 5000
    }

      if(EXP >= 23150 && currentAnimal === "Snowy Owl"){
        ranks = 25
        currentAnimal = "Hawk"
        nextAnimal = "Raven"
        xpUntilNextAnimal = 6000
    }

    if(EXP >= 29150 && currentAnimal === "Hawk"){
        ranks = 26
        currentAnimal = "Raven"
        nextAnimal = "Mad Bat"
        xpUntilNextAnimal = 8000
    }

    if(EXP >= 37150 && currentAnimal === "Raven"){
        ranks = 27
        currentAnimal = "Mad Bat"
        nextAnimal = "Pterodactyl Child"
        xpUntilNextAnimal = 10000
    }

    if(EXP >= 47150 && currentAnimal === "Mad Bat"){
        ranks = 28
        currentAnimal = "Pterodactyl Child"
        nextAnimal = "Pterodactyl"
        xpUntilNextAnimal = 10000
    }

    if(EXP >= 57150 && currentAnimal === "Pterodactyl Child"){
        ranks = 29
        currentAnimal = "Pterodactyl"
        nextAnimal = "Swamp Monster"
        xpUntilNextAnimal = 25000
    }

    if(EXP >= 82150 && currentAnimal === "Pterodactyl"){
        ranks = 30
        currentAnimal = "Swamp Monster"
        nextAnimal = "Stone Eater"
        xpUntilNextAnimal = 35000
    }

    if(EXP >= 117150 && currentAnimal === "Swamp Monster"){
        ranks = 31
        currentAnimal = "Stone Eater"
        nextAnimal = "Demonic Egg Eater"
        xpUntilNextAnimal = 15000
    }

    if(EXP >= 132150 && currentAnimal === "Stone Eater"){
        ranks = 32
        currentAnimal = "Demonic Egg Eater"
        nextAnimal = "Demonic Bat"
        xpUntilNextAnimal = 20000
    }

    if(EXP >= 152150 && currentAnimal === "Demonic Egg Eater"){
        ranks = 33
        currentAnimal = "Demonic Bat"
        nextAnimal = "Demonic Imp"
        xpUntilNextAnimal = 30000
    }

    if(EXP >= 182150 && currentAnimal === "Demonic Bat"){
        ranks = 34
        currentAnimal = "Demonic Imp"
        nextAnimal = "Dragon"
        xpUntilNextAnimal = 25000
    }

    if(EXP >= 207150 && currentAnimal === "Demonic Imp"){
        ranks = 35
        currentAnimal = "Dragon"
        nextAnimal = "Phoenix"
        xpUntilNextAnimal = 25000
    }

    if(EXP >= 232150 && currentAnimal === "Dragon"){
        ranks = 36
        currentAnimal = "Phoenix"
        nextAnimal = "Cosmic Insect"
        xpUntilNextAnimal = 40000
    }

    if(EXP >= 272150 && currentAnimal === "Phoenix"){
        ranks = 37
        currentAnimal = "Cosmic Insect"
        nextAnimal = "Cosmic Big Eye"
        xpUntilNextAnimal = 15000
    }

    if(EXP >= 287150 && currentAnimal === "Cosmic Insect"){
        ranks = 38
        currentAnimal = "Cosmic Big Eye"
        nextAnimal = "Cosmic Angry Eye"
        xpUntilNextAnimal = 12000
    }

    if(EXP >= 299150 && currentAnimal === "Cosmic Big Eye"){
        ranks = 39
        currentAnimal = "Cosmic Angry Eye"
        nextAnimal = "Cosmic Bat"
        xpUntilNextAnimal = 15000
    }

    if(EXP >= 314150 && currentAnimal === "Cosmic Angry Eye"){
        ranks = 40
        currentAnimal = "Cosmic Bat"
        nextAnimal = "Ghost"
        xpUntilNextAnimal = 35000
    }

    if(EXP >= 349150 && currentAnimal === "Cosmic Bat"){
        ranks = 41
        currentAnimal = "Ghost"
        nextAnimal = "Ghostly Reaper"
        xpUntilNextAnimal = 20000
    }

    if(EXP >= 369150 && currentAnimal === "Ghost"){
        ranks = 42
        currentAnimal = "Ghostly Reaper"
        nextAnimal = "Pumpkin"
        xpUntilNextAnimal = 12000
    }

    if(EXP >= 381150 && currentAnimal === "Ghostly Reaper"){
        ranks = 43
        currentAnimal = "Pumpkin"
        nextAnimal = "Pumpkin Ghost"
        xpUntilNextAnimal = 50000
    }

    if(EXP >= 431150 && currentAnimal === "Pumpkin"){
        ranks = 44
        currentAnimal = "Pumpkin Ghost"
        nextAnimal = "Grim Reaper"
        xpUntilNextAnimal = 20000
    }

    if(EXP >= 451150 && currentAnimal === "Pumpkin Ghost"){
        ranks = 45
        currentAnimal = "Grim Reaper"
        nextAnimal = "MAX"
        xpUntilNextAnimal = Infinity
    }
}


// Eat Script
foodButton.addEventListener("click", function(){
    EXP += Math.round(xpPerClick * levelBonusMultiplier)
    xpUntilNextLevel = xpUntilNextLevel - xpPerClick
    xpUntilNextAnimal = xpUntilNextAnimal - xpPerClick

    Manage()
})

butterflySpecial.addEventListener("click", function(){
    if(ranks >= 2){
        xpPerClick = 2
    }

    else{
        alert("You must be a Butterfly or higher to access this!")
    }
    Manage()
})

mosquitoSpecial.addEventListener("click", function(){
    if(ranks >= 3){
        xpPerClick = 3
    }

    else{
        alert("You must be a Mosquito or higher to access this!")
    }
    Manage()
})

waspSpecial.addEventListener("click", function(){
    if(ranks >= 4){
        xpPerClick = 4
    }

    else{
        alert("You must be a Wasp or higher to access this!")
    }
    Manage()
})

duckSpecial.addEventListener("click", function(){
    if(ranks >= 7){
        xpPerClick = 5
    }

    else{
        alert("You must be a Duck or higher to access this!")
    }
    Manage()
})

parrotSpecial.addEventListener("click", function(){
    if(ranks >= 10){
        xpPerClick = 6
    }

    else{
        alert("You must be a Parrot or higher to access this!")
    }
    Manage()
})

turkeySpecial.addEventListener("click", function(){
    if(ranks >= 14){
        xpPerClick = 8
    }

    else{
        alert("You must be a Turkey or higher to access this!")
    }
    Manage()
})

hornetSpecial.addEventListener("click", function(){
    if(ranks >= 18){
        xpPerClick = 12
    }

    else{
        alert("You must be a Hornet or higher to access this!")
    }
    Manage()
})

eagleSpecial.addEventListener("click", function(){
    if(ranks >= 23){
        xpPerClick = 20
    }

    else{
        alert("You must be an Eagle or higher to access this!")
    }
    Manage()
})

ravenSpecial.addEventListener("click", function(){
    if(ranks >= 26){
        xpPerClick = 30
    }

    else{
        alert("You must be a Raven or higher to access this!")
    }
    Manage()
})

pterodactylSpecial.addEventListener("click", function(){
    if(ranks >= 29){
        xpPerClick = 50
    }

    else{
        alert("You must be a Pterodactyl or higher to access this!")
    }
    Manage()
})

stoneeaterSpecial.addEventListener("click", function(){
    if(ranks >= 31){
        xpPerClick = 75
    }

    else{
        alert("You must be a Stone Eater or higher to access this!")
    }
    Manage()
})

dragonSpecial.addEventListener("click", function(){
    if(ranks >= 35){
        xpPerClick = 90
    }

    else{
        alert("You must be a Dragon or higher to access this!")
    }
    Manage()
})


cosmicinsectSpecial.addEventListener("click", function(){
    if(ranks >= 37){
        xpPerClick = 150
    }

    else{
        alert("You must be a Cosmic Insect or higher to access this!")
    }
    Manage()
})

ghostSpecial.addEventListener("click", function(){
    if(ranks >= 41){
        xpPerClick = 200
    }

    else{
        alert("You must be a Ghost or higher to access this!")
    }
    Manage()
})

// Reset Button Script
resetButton.addEventListener("click", function(){
    alert("Late April Fools! This does not do anything.. for now ;)")
})
