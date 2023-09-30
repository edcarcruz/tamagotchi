function startGame() {
    // Get the user's input
    const petName = prompt("What is your pet's name?");
  
    // Create a new Tamagotchi object with the user's input
    const tamagotchi = new Tamagotchi(petName);
  
  }

  window.addEventListener("load", startGame);
  
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
  }

  feed() {
    this.hunger--;
  }

  sleep() {
    this.sleepiness--;
  }

  play() {
    this.boredom--;
  }

  update() {
    this.age++;
    this.hunger++;
    this.sleepiness++;
    this.boredom++;

    // Check if the Tamagotchi is dead
    if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
      this.die();
    }
  }

  die() {
    alert(`${this.name} has died!`);
  }
}
const tamagotchi = new Tamagotchi("My Tamagotchi");

function updateMetrics() {
    // Update the values of the metrics
    document.getElementById("hunger").innerHTML = tamagotchi.hunger;
    document.getElementById("sleepiness").innerHTML = tamagotchi.sleepiness;
    document.getElementById("boredom").innerHTML = tamagotchi.boredom;
    document.getElementById("age").innerHTML = tamagotchi.age;
  }
  
  setInterval(updateMetrics, 100);
  
  setInterval(function () {
    tamagotchi.update();
  }, 10000);
  
  // Add event listeners to the buttons
  document.getElementById("feed-button").addEventListener("click", () => {
    tamagotchi.feed();
  });
  
  document.getElementById("sleep-button").addEventListener("click", () => {
    tamagotchi.sleep();
  });
  
  document.getElementById("play-button").addEventListener("click", () => {
    tamagotchi.play();
  });