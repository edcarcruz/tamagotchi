const petName = prompt("What is your pet's name?");
function startGame() {
  document.getElementById("pet-name").textContent = petName;
}

window.addEventListener("load", startGame);

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
    this.isDead = false;
  }

  feed() {
    if (this.hunger > 0) {

      this.hunger--
    }
  }

  sleep() {
    if (this.sleepiness > 0) {

      this.sleepiness--;
    }
    
  }

  play() {
    if (this.boredom > 0) {
      
      this.boredom--;
    }
    
  }
  evolvePet() {
    // Get the pet's age
    const petAge = document.getElementById("age").textContent;

    if (petAge === "5") {
      // Change the pet's image to the image of the evolved pet
      document.getElementById("pet-image").src = "./img/evolved-pet.png";
      alert("You have evolved your pet!");
    }
  }
  evolvePet2() {
    // Get the pet's age
    const petAge = document.getElementById("age").textContent;

    if (petAge === "10") {
      // Change the pet's image to the image of the evolved pet
      document.getElementById("pet-image").src = "./img/final_form.png";
      alert(`${this.name} has evolved to its final form!`);
    }
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
    if (!this.isDead) {
      this.isDead = true;
      alert(`${this.name} has died!`);
      $("body").fadeOut(1000, function () {
      $("body").html("<img src='./img/game-over.png'>").fadeIn(2000);
        });
      
    }
  }
}
const tamagotchi = new Tamagotchi(petName);

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
  tamagotchi.evolvePet();
  tamagotchi.evolvePet2();
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
