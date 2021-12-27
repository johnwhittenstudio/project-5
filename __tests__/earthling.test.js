import Earthling from './../src/js/earthling.js';

describe('Earthling', () => {
  let earthling;


  test("should correctly create a earthling object with the person's age, lifespan, and years remaining ", () => {
    expect(earthling.age).toEqual(37);
    expect(earthling.lifespan).toEqual(79);
    expect(earthling.lifeLeft).toEqual(42);
  });

});