// lib/shapes.js
class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    // Implementa la lógica de renderizado para la forma base.
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  }
}

class Circle extends Shape {
  render() {
    // Implementa la lógica de renderizado para un círculo.
    return `${super.render()}<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
      <text x="150" y="120" font-size="20" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    // Implementa la lógica de renderizado para un triángulo.
    return `${super.render()}<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
      <text x="150" y="120" font-size="20" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      </svg>`;
  }
}

class Square extends Shape {
  render() {
    // Implementa la lógica de renderizado para un cuadrado.
    return `${super.render()}<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
      <text x="150" y="120" font-size="20" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };

