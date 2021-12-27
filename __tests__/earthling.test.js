import Earthling from './../src/js/earthling.js';

describe('Earthling', () => {
  let earthling;


  test("should correctly create a earthling object with the person's age, lifespan, and years remaining ", () => {
    const earthling = new Earthling(37,79,42);
    expect(earthling.age).toEqual(37);
    expect(earthling.lifespan).toEqual(79);
    expect(earthling.lifeLeft).toEqual(42);
  });

});