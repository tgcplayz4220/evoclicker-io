// CODE MADE BY TGCPLAYZ4220. UPDATED WITH ARRAYS + LOOPS

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
let levelBonusMultiplier = 1
let xpUntilNextAnimal = 30
let xpUntilNextLevel = 1000
let currentAnimal = "Fly"
let nextAnimal = "Butterfly"
let ranks = 1
let nextLevel = 1
let levelDisplayInteger = 0

// Evolution Data
let evolutions = [
    { name: "Fly", xp: 0 },
    { name: "Butterfly", xp: 30 },
    { name: "Mosquito", xp: 80 },
    { name: "Wasp", xp: 150 },
    { name: "Dragonfly", xp: 390 },
    { name: "Pigeon", xp: 650 },
    { name: "Duck", xp: 950 },
    { name: "Blue Bird", xp: 1300 },
    { name: "Hen", xp: 1700 },
    { name: "Parrot", xp: 2150 },
    { name: "Stork", xp: 2600 },
    { name: "Red Bird", xp: 3100 },
    { name: "Pelican", xp: 3650 },
    { name: "Turkey", xp: 4500 },
    { name: "Bat", xp: 5250 },
    { name: "Seagull", xp: 6050 },
    { name: "Blackbird", xp: 8050 },
    { name: "Hornet", xp: 9050 },
    { name: "Vulture", xp: 10050 },
    { name: "Owl", xp: 10650 },
    { name: "Maroon Bird", xp: 12050 },
    { name: "Falcon", xp: 13750 },
    { name: "Eagle", xp: 15750 },
    { name: "Snowy Owl", xp: 18150 },
    { name: "Hawk", xp: 23150 },
    { name: "Raven", xp: 29150 },
    { name: "Mad Bat", xp: 37150 },
    { name: "Pterodactyl Child", xp: 47150 },
    { name: "Pterodactyl", xp: 57150 },
    { name: "Swamp Monster", xp: 82150 },
    { name: "Stone Eater", xp: 117150 },
    { name: "Demonic Egg Eater", xp: 132150 },
    { name: "Demonic Bat", xp: 152150 },
    { name: "Demonic Imp", xp: 182150 },
    { name: "Dragon", xp: 207150 },
    { name: "Phoenix", xp: 232150 },
    { name: "Cosmic Insect", xp: 272150 },
    { name: "Cosmic Big Eye", xp: 287150 },
    { name: "Cosmic Angry Eye", xp: 299150 },
    { name: "Cosmic Bat", xp: 314150 },
    { name: "Ghost", xp: 349150 },
    { name: "Ghostly Reaper", xp: 369150 },
    { name: "Pumpkin", xp: 381150 },
    { name: "Pumpkin Ghost", xp: 431150 },
    { name: "Grim Reaper", xp: 451150 }
]

// Level Data
let levels = [
    { level: 1, xp: 1000, bonus: 1.1 },
    { level: 2, xp: 10000, bonus: 1.2 },
    { level: 3, xp: 20000, bonus: 1.3 },
    { level: 4, xp: 40000, bonus: 1.4 },
    { level: 5, xp: 100000, bonus: 1.5 }
]

// Specials System
let specials = [
    { el: butterflySpecial, rank: 2, power: 2, name: "Butterfly" },
    { el: mosquitoSpecial, rank: 3, power: 3, name: "Mosquito" },
    { el: waspSpecial, rank: 4, power: 4, name: "Wasp" },
    { el: duckSpecial, rank: 7, power: 5, name: "Duck" },
    { el: parrotSpecial, rank: 10, power: 6, name: "Parrot" },
    { el: turkeySpecial, rank: 14, power: 8, name: "Turkey" },
    { el: hornetSpecial, rank: 18, power: 12, name: "Hornet" },
    { el: eagleSpecial, rank: 23, power: 20, name: "Eagle" },
    { el: ravenSpecial, rank: 26, power: 30, name: "Raven" },
    { el: pterodactylSpecial, rank: 29, power: 50, name: "Pterodactyl" },
    { el: stoneeaterSpecial, rank: 31, power: 75, name: "Stone Eater" },
    { el: dragonSpecial, rank: 35, power: 90, name: "Dragon" },
    { el: cosmicinsectSpecial, rank: 37, power: 150, name: "Cosmic Insect" },
    { el: ghostSpecial, rank: 41, power: 200, name: "Ghost" }
]

// Main Manager
function Manage(){
    evolutionManager()
    levelManager()
    uiManager()
}

// UI Manager
function uiManager(){
    xpDisplay.innerText = "📈 Current EXP: " + EXP
    xpPowerDisplay.innerText = "🎚️ EXP per click: " + xpPerClick
    levelDisplay.innerText = "⚙️ Level: " + level + " ("+ xpUntilNextLevel +" EXP until Level " + nextLevel + ")"
    lvlBonusDisplay.innerText = "📊 Level Bonus: " + levelDisplayInteger + "%"
    currentAnimalDisplay.innerText = "🐦 Current: " + currentAnimal + " (" + xpUntilNextAnimal + " EXP until " + nextAnimal + ")"
    nextAnimalDisplay.innerText = "⏭️ Next: " + nextAnimal
}

// Evolution Manager
function evolutionManager(){
    for(let i = 0; i < evolutions.length; i++){
        if(EXP >= evolutions[i].xp){
            currentAnimal = evolutions[i].name
            ranks = i + 1

            if(i + 1 < evolutions.length){
                nextAnimal = evolutions[i + 1].name
                xpUntilNextAnimal = evolutions[i + 1].xp - EXP
            } else {
                nextAnimal = "MAX"
                xpUntilNextAnimal = 0
            }
        }
    }
}

// Level Manager
function levelManager(){
    for(let i = 0; i < levels.length; i++){
        if(EXP >= levels[i].xp){
            level = levels[i].level
            levelBonusMultiplier = levels[i].bonus
            levelDisplayInteger = (levels[i].bonus - 1) * 100

            if(i + 1 < levels.length){
                nextLevel = levels[i + 1].level
                xpUntilNextLevel = levels[i + 1].xp - EXP
            } else {
                nextLevel = "MAX"
                xpUntilNextLevel = 0
            }
        }
    }
}

// Eat Script
foodButton.addEventListener("click", function(){
    let gainedXP = Math.round(xpPerClick * levelBonusMultiplier)
    EXP += gainedXP
    Manage()
})

// Specials Check
specials.forEach(s => {
    s.el.addEventListener("click", function(){
        if(ranks >= s.rank){
            xpPerClick = s.power
        } else {
            alert("You must be a " + s.name + " or higher!")
        }
        Manage()
    })
})

// Reset Button
resetButton.addEventListener("click", function(){
    alert("Late April Fools! This does not do anything.. for now ;)")
})
