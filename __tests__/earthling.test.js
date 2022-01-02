import Earthling from './../src/js/earthling.js';

describe('Earthling', () => {
  let earthling;

  beforeEach(() => {
    earthling = new Earthling(37, 80);
  });

  test("should correctly create a earthling object with the person's age, lifespan, and years remaining ", () => {
    expect(earthling.age).toEqual(37);
    expect(earthling.lifespan).toEqual(80);
    expect(earthling.lifeLeft).toEqual(43);
  });

  test("should calculate the earthling age into age on Mercury ", () => {
    expect(earthling.ageOnMercury()).toEqual(154);
  });

  test("should calculate the earthling age into age on Venus ", () => {
    expect(earthling.ageOnVenus()).toEqual(60);
  });

  test("should calculate the earthling age into age on Mars ", () => {
    expect(earthling.ageOnMars()).toEqual(20);
  });

  test("should calculate the earthling age into age on Jupiter ", () => {
    expect(earthling.ageOnJupiter()).toEqual(3);
  });

  test("should calculate the earthling lifespan into Mercury lifespan", () => {
    expect(earthling.lifespanOnMercury()).toEqual(333);
  });

  test("should calculate the earthling lifespan into Venus lifespan", () => {
    expect(earthling.lifespanOnVenus()).toEqual(129);
  });

  test("should calculate the earthling lifespan into Mars lifespan", () => {
    expect(earthling.lifespanOnMars()).toEqual(43);
  });

  test("should calculate the earthling lifespan into Jupiter lifespan", () => {
    expect(earthling.lifespanOnJupiter()).toEqual(7);
  });

  test("should calculate the earthling life left into Mercury life left", () => {
    expect(earthling.lifeLeftOnMercury()).toEqual(179);
  });

  test("should calculate the earthling life left into Venus life left", () => {
    expect(earthling.lifeLeftOnVenus()).toEqual(69);
  });

  test("should calculate the earthling life left into Mars life left", () => {
    expect(earthling.lifeLeftOnMars()).toEqual(23);
  });

  test("should calculate the earthling life left into Jupiter life left", () => {
    expect(earthling.lifeLeftOnJupiter()).toEqual(4);
  });
});

//--------------- Calculate Lifespan Surpassed -------------------//

describe('Earthling', () => {
  let earthlingOld;

  beforeEach(() => {
    earthlingOld = new Earthling(120, 80);
  });

  test("should correctly create a earthling object with the person's age, lifespan, and years remaining ", () => {
    expect(earthlingOld.age).toEqual(120);
    expect(earthlingOld.lifespan).toEqual(80);
    expect(earthlingOld.lifeLeft).toEqual(-40);
  });

  test("should calculate the earthling age into age on Mercury ", () => {
    expect(earthlingOld.ageOnMercury()).toEqual(500);
  });

  test("should calculate the earthling age into age on Venus ", () => {
    expect(earthlingOld.ageOnVenus()).toEqual(194);
  });


});