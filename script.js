var wrapper = document.querySelector(".wrap")
function dragonBattle(){
  wrapper.innerHTML="";
  document.body.querySelector(".finish").innerHTML="";
var list = [
  {
    name:"Fire Attack",
    damage:3,
    type:"fire"
  }, 
  {
    name:"Ice Attack",
    damage:1,
    type:"ice"
  },
  {
    name:"Poison Attack",
    damage:4,
    type:"poison"
  }
  
  ];
  var dragonHealth = 10;
  var dragonEle = document.createElement("div");
  dragonEle.innerHTML = dragonHealth;

  function createDragon(CR) {
    var buttonClick = document.createElement("button");
    buttonClick.innerHTML = CR.name;
    buttonClick.addEventListener("click", function() {
      attackDragon(CR.damage, CR.type, CR, buttonClick );
    });
    wrapper.appendChild(buttonClick);
  }

  function attackDragon(dmg, type, hp, ele) {
    console.log(hp);
    if (type === "fire") {
      dragonHealth = dragonHealth - (dmg - 1);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (dmg + 1);
    } else if (type === "poison") {
      dragonHealth = dragonHealth - 4;
    } else {
      dragonHealth = dragonHealth - dmg;
    }
    
    

    dragonEle.innerHTML ="The dragon's health is " + dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".finish").innerHTML="You have defeated the dragon! Play again?";
      document.body.querySelector(".finish").addEventListener("click", function(){
        dragonBattle();
      })
    }
  }

 for (var i = 0; i < list.length; i++) {
    createDragon(list[i],false);
 
 }
  wrapper.appendChild(dragonEle);
}

dragonBattle();