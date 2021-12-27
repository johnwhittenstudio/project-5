import Earthling from './../src/js/earthling.js';

describe('Earthling', () => {
  let earthling;

  beforeEach(() => {
    earthling = new Earthling(37, 80);
  });

  test("should correctly create a earthling object with the person's age, lifespan, and years remaining ", () => {
    // const earthling = new Earthling(37,79,42);
    expect(earthling.age).toEqual(37);
    expect(earthling.lifespan).toEqual(80);
    expect(earthling.lifeLeft).toEqual(42);
  });

  test("should calculate the earthling age into age on Maercury ", () => {
    let ageOnMercury =  Math.round(earthling.age / .24)
  });

});