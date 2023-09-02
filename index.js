// index.js
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const getUserInput = require('./lib/userInput');

async function generateLogo() {
  const userInput = await getUserInput();

  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.shapeColor, userInput.textColor, userInput.text);
      break;
    case 'triangle':
      shape = new Triangle(userInput.shapeColor, userInput.textColor, userInput.text);
      break;
    case 'square':
      shape = new Square(userInput.shapeColor, userInput.textColor, userInput.text);
      break;
    default:
      console.error('Invalid shape choice.');
      return;
  }

  const svgContent = shape.render();

  fs.writeFile('examples/logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error writing to logo.svg:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

generateLogo();







