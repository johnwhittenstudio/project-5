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

  ageOnVenus() {
    let ageOnVenus = Math.round(this.age / .62);
    return ageOnVenus;
  }

  ageOnMars() {
    let ageOnMars = Math.round(this.age / 1.88);
    return ageOnMars;
  }

  ageOnJupiter() {
    let ageOnJupiter = Math.round(this.age / 11.86);
    return ageOnJupiter;
  }

  lifespanOnMercury() {
    let lifespanOnMercury = Math.round(this.lifespan / .24);
    return lifespanOnMercury;
  }

  lifespanOnVenus() {
    let lifespanOnVenus = Math.round(this.lifespan / .62);
    return lifespanOnVenus;
  }

  lifespanOnMars() {
    let lifespanOnMars = Math.round(this.lifespan / 1.88);
    return lifespanOnMars;
  }

  lifespanOnJupiter() {
    let lifespanOnJupiter = Math.round(this.lifespan / 11.86);
    return lifespanOnJupiter;
  }

  lifeLeftOnMercury() {
    let lifeLeftOnMercury = Math.round(this.lifespan / .24) - Math.round(this.age / .24);
    return lifeLeftOnMercury;
  }

  lifeLeftOnVenus() {
    let lifeLeftOnVenus = Math.round(this.lifespan / .62) - Math.round(this.age / .62);
    return lifeLeftOnVenus;
  }

  lifeLeftOnMars() {
    let lifeLeftOnMars = Math.round(this.lifespan / 1.88) - Math.round(this.age / 1.88);
    return lifeLeftOnMars;
  }

  lifeLeftOnJupiter() {
    let lifeLeftOnJupiter = Math.round(this.lifespan / 11.86) - Math.round(this.age / 11.86);
    return lifeLeftOnJupiter;
  }

}