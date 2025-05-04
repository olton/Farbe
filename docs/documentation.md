# Farbe Library Documentation

Farbe is a powerful JavaScript library for working with colors. It provides extensive functionality for creating, converting, manipulating, and analyzing colors in various formats (HEX, RGB, RGBA, HSL, HSLA, HSV, CMYK).

## Main Farbe Class

### Constructor

```javascript
new Farbe(color, options)
```

Creates a new instance of Farbe.

- `color` - color in any supported format (HEX, RGB, RGBA, HSL, HSLA, HSV, CMYK). Default is `#000000`.
- `options` - configuration object for color manipulations.

### Properties

#### options

Get or set options for color manipulations.

```javascript
const color = new Farbe("#ff0000");
console.log(color.options); // Get options
color.options = { angle: 45 }; // Set options
```

#### value

Get or set the current color value.

```javascript
const color = new Farbe("#ff0000");
console.log(color.value); // Get current color value
color.value = "rgb(0, 255, 0)"; // Set new color value
```

#### type

Get the type of the current color (HEX, RGB, RGBA, HSL, HSLA, HSV, CMYK).

```javascript
const color = new Farbe("#ff0000");
console.log(color.type); // "hex"
```

#### rgb

Get the color in RGB format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.rgb); // RGB {r: 255, g: 0, b: 0}
```

#### rgba

Get the color in RGBA format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.rgba); // RGBA {r: 255, g: 0, b: 0, a: 1}
```

#### hex

Get the color in HEX format.

```javascript
const color = new Farbe("rgb(255, 0, 0)");
console.log(color.hex); // "#ff0000"
```

#### hsv

Get the color in HSV format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.hsv); // HSV {h: 0, s: 1, v: 1}
```

#### hsl

Get the color in HSL format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.hsl); // HSL {h: 0, s: 1, l: 0.5}
```

#### hsla

Get the color in HSLA format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.hsla); // HSLA {h: 0, s: 1, l: 0.5, a: 1}
```

#### cmyk

Get the color in CMYK format.

```javascript
const color = new Farbe("#ff0000");
console.log(color.cmyk); // CMYK {c: 0, m: 100, y: 100, k: 0}
```

#### websafe

Get the color in websafe format.

```javascript
const color = new Farbe("#ff0012");
console.log(color.websafe); // "#ff0000"
```

### Conversion Methods

#### toRGB()

Converts the current color to RGB format.

```javascript
const color = new Farbe("#ff0000");
color.toRGB();
console.log(color.type); // "rgb"
```

#### toRGBA(alpha)

Converts the current color to RGBA format with the specified or current alpha value.

```javascript
const color = new Farbe("#ff0000");
color.toRGBA(0.5);
console.log(color.type); // "rgba"
console.log(color.value.a); // 0.5
```

#### toHEX()

Converts the current color to HEX format.

```javascript
const color = new Farbe("rgb(255, 0, 0)");
color.toHEX();
console.log(color.type); // "hex"
```

#### toHSV()

Converts the current color to HSV format.

```javascript
const color = new Farbe("#ff0000");
color.toHSV();
console.log(color.type); // "hsv"
```

#### toHSL()

Converts the current color to HSL format.

```javascript
const color = new Farbe("#ff0000");
color.toHSL();
console.log(color.type); // "hsl"
```

#### toHSLA(alpha)

Converts the current color to HSLA format with the specified or current alpha value.

```javascript
const color = new Farbe("#ff0000");
color.toHSLA(0.5);
console.log(color.type); // "hsla"
console.log(color.value.a); // 0.5
```

#### toCMYK()

Converts the current color to CMYK format.

```javascript
const color = new Farbe("#ff0000");
color.toCMYK();
console.log(color.type); // "cmyk"
```

#### toWebsafe()

Converts the current color to the closest websafe color.

```javascript
const color = new Farbe("#ff0012");
color.toWebsafe();
console.log(color.value); // "#ff0000"
```

### Manipulation Methods

#### darken(amount)

Darkens the color by the specified percentage.

```javascript
const color = new Farbe("#ff0000");
color.darken(20);
console.log(color.hex); // "#cc0000"
```

#### lighten(amount)

Lightens the color by the specified percentage.

```javascript
const color = new Farbe("#ff0000");
color.lighten(20);
console.log(color.hex); // "#ff3333"
```

#### hueShift(angle)

Shifts the color on the color wheel by the specified angle.

```javascript
const color = new Farbe("#ff0000");
color.hueShift(120);
console.log(color.hex); // "#00ff00"
```

#### grayscale()

Converts the color to a grayscale shade.

```javascript
const color = new Farbe("#ff0000");
color.grayscale();
console.log(color.hex); // "#4d4d4d"
```

#### add(color)

Adds another color to the current one (blends colors).

```javascript
const color = new Farbe("#ff0000");
color.add("#0000ff");
console.log(color.hex); // "#7f007f"
```

#### mix(color, amount)

Mixes the current color with another one in the specified proportion.

```javascript
const color = new Farbe("#ff0000");
color.mix("#0000ff", 50);
console.log(color.hex); // "#7f007f"
```

#### multiply(color)

Multiplies the colors (like the "Multiply" blend mode in Photoshop).

```javascript
const color = new Farbe("#ff0000");
color.multiply("#00ff00");
console.log(color.hex); // "#000000"
```

#### shade(amount)

Adds black or white to the color depending on the value.

```javascript
const color = new Farbe("#ff0000");
color.shade(20);
console.log(color.hex); // "#ff3333"
```

#### saturate(amount)

Increases the color saturation.

```javascript
const color = new Farbe("hsl(0, 50%, 50%)");
color.saturate(20);
console.log(color.hsl); // HSL {h: 0, s: 0.7, l: 0.5}
```

#### desaturate(amount)

Decreases the color saturation.

```javascript
const color = new Farbe("hsl(0, 100%, 50%)");
color.desaturate(20);
console.log(color.hsl); // HSL {h: 0, s: 0.8, l: 0.5}
```

#### spin(amount)

Rotates the hue of the color by the specified number of degrees.

```javascript
const color = new Farbe("#ff0000");
color.spin(120);
console.log(color.hex); // "#00ff00"
```

#### brighten(amount)

Makes the color brighter.

```javascript
const color = new Farbe("#880000");
color.brighten(20);
console.log(color.hex); // "#aa0000"
```

#### channel(ch, val)

Changes the value of a specific color channel.

```javascript
const color = new Farbe("#ff0000");
color.channel("red", 128);
console.log(color.rgb); // RGB {r: 128, g: 0, b: 0}
```

### Checking and Analysis Methods

#### isDark()

Checks if the color is dark.

```javascript
const color = new Farbe("#000000");
console.log(color.isDark()); // true
```

#### isLight()

Checks if the color is light.

```javascript
const color = new Farbe("#ffffff");
console.log(color.isLight()); // true
```

#### equal(color)

Checks if the current color equals the specified one.

```javascript
const color = new Farbe("#ff0000");
console.log(color.equal("#ff0000")); // true
console.log(color.equal("rgb(255, 0, 0)")); // true
console.log(color.equal("#00ff00")); // false
```

#### toString()

Returns a string representation of the color.

```javascript
const color = new Farbe("rgb(255, 0, 0)");
console.log(color.toString()); // "rgb(255,0,0)"
```

### Other Methods

#### getScheme(name, format, options)

Creates a color scheme based on the current color.

```javascript
const color = new Farbe("#ff0000");
const scheme = color.getScheme("complementary", "hex");
console.log(scheme); // ["#ff0000", "#00ffff"]
```

Supported schemes:
- monochromatic (mono)
- complementary (complement, comp)
- double-complementary (double-complement, double)
- analogous (analog)
- triadic (triad)
- tetradic (tetra)
- square
- split-complementary (split-complement, split)
- material

#### random(colorType, alpha)

Sets a random color of the specified type.

```javascript
const color = new Farbe();
color.random("rgb");
console.log(color.rgb); // RGB with random values
```

## Helper Classes and Objects

### Primitives

Primitive classes for representing colors in different formats.

- `HSV`
- `HSL`
- `HSLA`
- `RGB`
- `RGBA`
- `CMYK`

### Palette

Object for working with color palettes.

#### Available Palettes

- `StandardColorPalette` - standard color palette
- `MetroColorPalette` - Metro UI color palette

#### Palette Methods

```javascript
Palette.color("red"); // Get color by name
Palette.palette(); // Get all color names in the palette
Palette.colors(); // Get all colors in the palette
```

### info() Function

Outputs information about the current library version to the console.

```javascript
info(); // Displays Farbe version information
```

## Usage Examples

```javascript
// Creating a new color
const color = new Farbe("#ff0000");

// Converting the color
color.toHSL();
console.log(color.value); // HSL {h: 0, s: 1, l: 0.5}

// Manipulating the color
color.lighten(20);
console.log(color.value); // HSL {h: 0, s: 1, l: 0.7}

// Getting the color in different formats
console.log(color.hex); // "#ff6666"
console.log(color.rgb); // RGB {r: 255, g: 102, b: 102}

// Creating a color scheme
const scheme = color.getScheme("complementary", "hex");
console.log(scheme); // ["#ff6666", "#66ffff"]
```

This library provides all the necessary tools for professional color work in JavaScript projects.
