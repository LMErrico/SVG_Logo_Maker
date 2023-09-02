const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
  it('Circle should render SVG', () => {
    const circle = new Circle('circle', 'red', 'ABC', 'white');
    const svg = circle.render();

    // Add assertions for the generated SVG
  });

  it('Triangle should render SVG', () => {
    const triangle = new Triangle('triangle', 'blue', 'XYZ', 'yellow');
    const svg = triangle.render();

    // Add assertions for the generated SVG
  });

  it('Square should render SVG', () => {
    const square = new Square('square', 'green', '123', 'black');
    const svg = square.render();

    // Add assertions for the generated SVG
  });
});
