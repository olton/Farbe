# Farbe: A Comprehensive Color Manipulation Library for JavaScript

## Introduction

Farbe (German for "color") is a powerful and versatile JavaScript library designed for color manipulation and conversion. Whether you're building a design tool, creating data visualizations, or developing a theme system for your application, Farbe provides all the tools you need to work with colors effectively.

This library supports all major color formats (HEX, RGB, RGBA, HSL, HSLA, HSV, CMYK) and offers a wide range of color manipulation functions, making it an essential tool for front-end developers and designers.

## Key Features

- **Multiple Color Format Support**: Work with HEX, RGB, RGBA, HSL, HSLA, HSV, and CMYK color formats
- **Seamless Conversion**: Convert between any supported color formats with ease
- **Color Manipulation**: Lighten, darken, saturate, desaturate, and more
- **Color Schemes**: Generate harmonious color schemes (monochromatic, complementary, analogous, etc.)
- **Color Analysis**: Determine if a color is light or dark, compare colors
- **Channel Manipulation**: Modify individual color channels
- **Color Blending**: Mix, multiply, and blend colors together
- **Web-safe Colors**: Convert colors to web-safe equivalents

## Getting Started

### Installation

```bash
npm install @olton/farbe
```

### Basic Usage

```javascript
import { Farbe } from '@olton/farbe';

// Create a new color instance
const color = new Farbe('#ff0000');  // Red

// Convert to different formats
console.log(color.rgb);  // RGB object: {r: 255, g: 0, b: 0}
console.log(color.hex);  // "#ff0000"
console.log(color.hsl);  // HSL object: {h: 0, s: 1, l: 0.5}

// Manipulate the color
color.lighten(20);       // Lighten by 20%
console.log(color.hex);  // "#ff1414"

color.toHSL();           // Convert to HSL format
color.saturate(10);      // Increase saturation by 10%
```

## Color Conversion

Farbe makes it easy to convert between different color formats:

```javascript
const color = new Farbe('#3498db');

// Convert to different formats
color.toRGB();    // Convert to RGB
color.toRGBA(0.5); // Convert to RGBA with 0.5 alpha
color.toHEX();    // Convert to HEX
color.toHSV();    // Convert to HSV
color.toHSL();    // Convert to HSL
color.toHSLA(0.8); // Convert to HSLA with 0.8 alpha
color.toCMYK();   // Convert to CMYK

// Get color in different formats without changing the internal representation
console.log(color.rgb);   // Get as RGB
console.log(color.rgba);  // Get as RGBA
console.log(color.hex);   // Get as HEX
console.log(color.hsv);   // Get as HSV
console.log(color.hsl);   // Get as HSL
console.log(color.hsla);  // Get as HSLA
console.log(color.cmyk);  // Get as CMYK
```

## Color Manipulation

Farbe provides a rich set of methods to manipulate colors:

```javascript
const color = new Farbe('#3498db');

// Basic manipulations
color.darken(20);      // Darken by 20%
color.lighten(10);     // Lighten by 10%
color.saturate(15);    // Increase saturation by 15%
color.desaturate(10);  // Decrease saturation by 10%
color.grayscale();     // Convert to grayscale
color.brighten(20);    // Brighten by 20%

// Hue manipulation
color.hueShift(30);    // Shift hue by 30 degrees
color.spin(90);        // Rotate hue by 90 degrees

// Channel manipulation
color.channel('red', 128);       // Set red channel to 128
color.channel('saturation', 0.8); // Set saturation to 0.8
color.channel('hue', 180);       // Set hue to 180
```

## Color Schemes

Generate harmonious color schemes with Farbe:

```javascript
const color = new Farbe('#3498db');

// Generate different color schemes
const monoScheme = color.getScheme('mono', 'hex');
const complementaryScheme = color.getScheme('complement', 'rgb');
const triadicScheme = color.getScheme('triad', 'hsl');
const analogousScheme = color.getScheme('analog', 'hex');
const splitComplementaryScheme = color.getScheme('split', 'rgb');
const tetradicScheme = color.getScheme('tetra', 'hex');
const squareScheme = color.getScheme('square', 'hsl');

// Material design color palette
const materialPalette = color.getScheme('material', 'hex');
```

## Color Blending

Blend and mix colors together:

```javascript
const color = new Farbe('#ff0000');  // Red

// Mix with blue (50% mix)
color.mix('#0000ff', 50);  // Results in purple (#800080)

// Add colors
color.add('#00ff00');  // Add green

// Multiply colors
color.multiply('#0000ff');  // Multiply with blue
```

## Color Analysis

Analyze and compare colors:

```javascript
const color = new Farbe('#3498db');

// Check if color is dark or light
if (color.isDark()) {
  // Use light text on dark background
} else {
  // Use dark text on light background
}

// Compare colors
const isEqual = color.equal('#3498db');  // true
```

## Random Colors

Generate random colors:

```javascript
const color = new Farbe();

// Generate a random color
color.random();  // Random HEX color

// Generate a random color in a specific format
color.random('rgb');  // Random RGB color
color.random('hsv', 0.5);  // Random HSV color with 0.5 alpha
```

## Web-safe Colors

Convert colors to web-safe equivalents:

```javascript
const color = new Farbe('#123456');

// Convert to web-safe color
color.toWebsafe();  // Results in #003366
```

## Advanced Usage

### Custom Options

You can customize the behavior of Farbe by providing options:

```javascript
const color = new Farbe('#3498db', {
  alpha: 0.5,        // Default alpha value for RGBA/HSLA
  angle: 45,         // Default angle for hue shifting
  distance: 10,      // Distance for color schemes
  step: 0.2,         // Step size for color schemes
  tint1: 0.9,        // Tint factor 1 for monochromatic schemes
  tint2: 0.5,        // Tint factor 2 for monochromatic schemes
  shade1: 0.7,       // Shade factor 1 for monochromatic schemes
  shade2: 0.4,       // Shade factor 2 for monochromatic schemes
});
```

### Method Chaining

Farbe supports method chaining for a more concise and readable code:

```javascript
const result = new Farbe('#3498db')
  .toHSL()
  .saturate(20)
  .lighten(10)
  .hueShift(30)
  .toRGB()
  .toString();
```

## Conclusion

Farbe is a comprehensive color manipulation library that provides all the tools you need to work with colors in JavaScript. With its intuitive API and extensive feature set, it's an excellent choice for any project that involves color manipulation.

Whether you're building a design tool, creating data visualizations, or developing a theme system for your application, Farbe has you covered with its powerful color manipulation capabilities.

## License

Farbe is licensed under the MIT License. See the LICENSE file for details.