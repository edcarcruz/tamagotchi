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