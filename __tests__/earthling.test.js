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

});