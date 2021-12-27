export default class Earthling {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
    this.lifeLeft = lifespan - age;
  }

  ageOnMercury() {
    let ageOnMercury = Math.round(this.age / .24);
    return ageOnMercury;
  }
}