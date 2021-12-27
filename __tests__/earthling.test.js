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

});