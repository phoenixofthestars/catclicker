$(document).ready(function(){
   firstText();
   click();
   itemClassUpdate();
   sleepBuy();
   sleepUpgradeBuy();
   sleepUpgradeHover();
   foodBuy();
   foodUpgradeBuy();
   foodUpgradeHover();
   waterBuy();
   idleClicking();
});
var catLorge = document.getElementById("cat lorge");
var hoverLog = true;
var numberofpets = 0;
var milkmultiplier = 0;
var sleepCost = 15;
var sleepAmount = 0;
var sleepUpgradeCost = 100;
var sleepUpgrade = false;
var sleepPPS = 0;
var bed = document.getElementById("bed");
var unknownBed = document.getElementById("unknown bed");
var foodCost = 25;
var foodAmount = 0;
var foodUpgradeCost = 200;
var foodUpgrade = false;
var foodPPS = 0;
var food = document.getElementById("food");
var unknownFood = document.getElementById("unknown food");
var waterCost = 50;
var waterAmount = 0;
var waterPPS = 0;
var water = document.getElementById("water");
var unknownWater = document.getElementById("unknown water");
function firstText(){
  $(".catholder").mouseenter(function(){
    // Changes .hello's text.
    if (hoverLog === true) {
      $(".hello").text("Click to pet the cat.");
      console.log("hover");  
    }
  });
};
function click(){     
  $(".catholder").click(function(){
    // Changes .hello's text after petting the cat.
    $(".hello").text("Thank you for petting the cat.");
      setTimeout(function(){
        // Removes.hello after 5 seconds.
        $(".hello").hide();
      }, 5000);
    // Changes hoverLog to false so that the console stops logging hover.
    hoverLog = false;
    // Changes .numberofpets's text and logs a click.
    numberofpets += 1;
    $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
    console.log("click");
    // Does a little animation when you click.
    catLorge.style.width = "95%";
    catLorge.style.height = "95%";
    setTimeout(function() {
      catLorge.style.width = "100%";
      catLorge.style.height = "100%";
    }, 100); 
  });
  $(".catholder").mouseenter(function(){
    catLorge.style.width = "105%";
    catLorge.style.height = "105%";
  });
  $(".catholder").mouseleave(function(){
    catLorge.style.width = "100%";
    catLorge.style.height = "100%";
  });
};
function itemClassUpdate(){
  // Updates the classes of each building depending on certain conditions.
  setInterval(function(){
    if (numberofpets < sleepCost && sleepAmount >= 1) {
      $(".sleep").removeClass("available");
      $(".sleep").addClass("unavailable");
      $(".sleepName").text(sleepAmount + " Beds");
      $(".sleepPrice").text("Price: " + (Math.floor (sleepCost)));
      unknownBed.style.display = "none";
    }
    else if (numberofpets < sleepCost) {
      $(".sleep").removeClass("available");
      $(".sleep").addClass("unavailable");
      $(".sleepName").text("???");
      $(".sleepPrice").text("???");
      $(".sleepUpgrade").hide();
      bed.style.display = "none";
    }
    else if (numberofpets >= sleepCost) {
      $(".sleep").removeClass("unavailable");
      $(".sleep").addClass("available");
      $(".sleepName").text(sleepAmount + " Beds");
      $(".sleepPrice").text("Price: " + (Math.floor (sleepCost)));
      unknownBed.style.display = "none";
      bed.style.display = "block";
    }
    if (numberofpets < sleepUpgradeCost && sleepAmount >= 1){
      $(".sleepUpgrade").removeClass("available");
      $(".sleepUpgrade").addClass("unavailable");
    }
    else if (numberofpets >= sleepUpgradeCost && sleepAmount >= 1){
      $(".sleepUpgrade").removeClass("unavailable");
      $(".sleepUpgrade").addClass("available");
    }
    if (numberofpets < foodCost && foodAmount >= 1) {
      $(".food").removeClass("available");
      $(".food").addClass("unavailable");
      $(".foodName").text(foodAmount + " Food Bags");
      $(".foodPrice").text("Price: " + (Math.floor (foodCost)));
      unknownFood.style.display = "none";
      food.style.display = "block";
    }  
    else if (numberofpets < foodCost && sleepAmount >= 1) {
      $(".food").removeClass("available");
      $(".food").addClass("unavailable");
      $(".foodName").text(foodAmount + " Food Bags");
      $(".foodPrice").text("Price: " + (Math.floor (foodCost)));
      $(".foodUpgrade").hide();
      unknownFood.style.display = "none";
      food.style.display = "block";
    }
    else if (numberofpets < foodCost) {
      $(".food").removeClass("available");
      $(".food").addClass("unavailable");
      $(".foodName").text("???");
      $(".foodPrice").text("???");
      $(".foodUpgrade").hide();
      food.style.display = "none";
    }
    else if (numberofpets >= foodCost && sleepAmount >= 1) {
      $(".food").removeClass("unavailable");
      $(".food").addClass("available");
      $(".foodName").text(foodAmount + " Food Bags");
      $(".foodPrice").text("Price: " + (Math.floor (foodCost)));
      unknownFood.style.display = "none";
      food.style.display = "block";
    }
    if (numberofpets < foodUpgradeCost && foodAmount >= 1){
      $(".foodUpgrade").removeClass("available");
      $(".foodUpgrade").addClass("unavailable");
    }
    else if (numberofpets >= foodUpgradeCost && foodAmount >= 1){
      $(".foodUpgrade").removeClass("unavailable");
      $(".foodUpgrade").addClass("available");
    }
    if (numberofpets < waterCost && waterAmount >= 1) {
      $(".water").removeClass("available");
      $(".water").addClass("unavailable");
      $(".waterName").text(waterAmount + " Water Bowls");
      $(".waterPrice").text("Price: " + (Math.floor (waterCost)));  
      unknownWater.style.display = "none";
      water.style.display = "block";
    }  
    else if (numberofpets < waterCost && foodAmount >= 1) {
      $(".water").removeClass("available");
      $(".water").addClass("unavailable");
      $(".waterName").text(waterAmount + " Water Bowls");
      $(".waterPrice").text("Price: " + (Math.floor (waterCost)));
      unknownWater.style.display = "none";
      water.style.display = "block";
    }
    else if (numberofpets < waterCost) {
      $(".water").removeClass("available");
      $(".water").addClass("unavailable");
      $(".waterName").text("???");
      $(".waterPrice").text("???");
      water.style.display = "none";
    }
    else if (numberofpets >= waterCost && foodAmount >= 1) {
      $(".water").removeClass("unavailable");
      $(".water").addClass("available");
      $(".waterName").text(waterAmount + " Water Bowls");
      $(".waterPrice").text("Price: " + (Math.floor (waterCost)));
      unknownWater.style.display = "none";
      water.style.display = "block";
    }
  }, 10);
};
function sleepBuy(){
  // Allows the player to buy their first building.
  $(".sleep").click(function(){
    if (numberofpets >= sleepCost) {
      numberofpets -= sleepCost;
      sleepAmount += 1;
      sleepCost *= 1.1;
      sleepPPS += 1;
      $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
      $(".sleepPrice").text("Price: " + (Math.floor (sleepCost)));
      console.log("sleep bought");
      $(".sleepUpgrade").show();
      $(".sleepUpgrade").addClass("unavailable");
      sleepUpgrade = true;
    }      
    if (sleepAmount === 1){
      $(".sleepName").text(sleepAmount + " Bed");
    }
    else {
      $(".sleepName").text(sleepAmount + " Beds");
    }
  });  
}
function sleepUpgradeBuy(){
  $(".sleepUpgrade").click(function(){
    if (numberofpets >= sleepUpgradeCost && sleepAmount >= 1){
      numberofpets -= sleepUpgradeCost;
      sleepUpgradeCost *= 5;
      sleepPPS *= 2;
      $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
      console.log("sleep upgrade bought");
    }
  });
};
function sleepUpgradeHover(){
  if (sleepUpgrade === false) {
    $(".sleepUpgradeHover").hide();
  }
  $(".sleepUpgrade").mouseenter(function(){
    if (sleepUpgrade === true) {
      $(".sleepUpgradeHover").show();
    }
  });
  $(".sleepUpgrade").mouseleave(function(){
    if (sleepUpgrade === true) {
      $(".sleepUpgradeHover").hide();
    }
  });
};
function foodBuy(){
  // Allows the player to buy their second building.
  $(".food").click(function(){
    if (numberofpets >= Math.floor (foodCost) && sleepAmount >= 1) {
      numberofpets -= foodCost;
      foodCost *= 1.1;
      foodAmount += 1;
      foodPPS += 1;
      $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
      $(".foodName").text(foodAmount + " Food Bags");
      $(".foodPrice").text("Price: " + (Math.floor (foodCost)));
      console.log("food bought");
      console.log(foodPPS + " foodPPS");
      $(".foodUpgrade").show();
      $(".foodUpgrade").addClass("unavailable");
      foodUpgrade = true;

    }     
    if (foodAmount === 1){
        $(".foodName").text(foodAmount + " Food Bag");
      }
      else {
        $(".foodName").text(foodAmount + " Food Bags");
      }
  });
};
function foodUpgradeBuy(){
  $(".foodUpgrade").click(function(){
    if (numberofpets >= foodUpgradeCost && foodAmount >= 1){
      numberofpets -= foodUpgradeCost;
      foodUpgradeCost *= 5;
      foodPPS *= 2;
      $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
      console.log("food upgrade bought");
    }
  });
};
function foodUpgradeHover(){
  if (foodUpgrade === false) {
    $(".foodUpgradeHover").hide();
  }
  $(".foodUpgrade").mouseenter(function(){
    if (foodUpgrade === true) {
      $(".foodUpgradeHover").show();
    }
  });
  $(".foodUpgrade").mouseleave(function(){
    if (foodUpgrade === true) {
      $(".foodUpgradeHover").hide();
    }
  });
};
function waterBuy(){
  //Allows the player to buy their third building.
  $(".water").click(function(){
    if (numberofpets >= Math.floor (waterCost) && foodAmount >= 1) {
      numberofpets -= waterCost;
      waterCost *= 1.1;
      waterAmount += 1;
      waterPPS += 3;
      $(".numberofpets").text("Number of pets: " + (Math.floor (numberofpets)));
      $(".waterName").text(waterAmount + " Water Bowls");
      $(".waterPrice").text("Price: " + (Math.floor (waterCost)));
      console.log("water bought");
    }
  });
};
function sleepClick() {
  // Checks if the player has at least one bed and, if so, adds to the number of pets and logs an idle click.
  if (sleepAmount >= 1) {
    numberofpets += (Math.floor(sleepPPS));
    $(".numberofpets").text("Number of pets: " + (Math.floor(numberofpets)));
    console.log("idle sleep click");
    console.log(sleepPPS + " sleepPPS");
  }
};
function foodClick() {
  // Checks if the player has at least one food bag and, if so, adds to the number of pets and logs an idle click.
  if (foodAmount >= 1) {
    numberofpets += (Math.floor(foodPPS));
    $(".numberofpets").text("Number of pets: " + (Math.floor(numberofpets)));
    console.log("idle food click");
    console.log(foodPPS + " foodPPS");
  }
};
function waterClick(){
  // Checks if the player has at least one water bowl and, if so, adds to the number of pets and logs an idle click.
  if (waterAmount >= 1){
    numberofpets += (Math.floor(waterPPS));
    $(".numberofpets").text("Number of pets: " + (Math.floor(numberofpets)));
    console.log("idle water click");
    console.log(waterPPS + " waterPPS");
  }
}
function idleClicking(){
  // Idle clicks.
    setInterval(function(){
      sleepClick();
    }, 10000);
    setInterval(function(){
      foodClick();
      waterClick();
    }, 1000);
};
