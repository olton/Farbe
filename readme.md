# Farbe

**Farbe** - is a small javascript library for manipulating with a color.

Farbe provides `class` and `routines` for operations with color. 

**Farbe** provides simple API that may be used to create colors (`HEX`, `RGB`, `RGBA`, `HSV`, `HSL`, `HSLA`, `CMYK`), 
and perform various color related operations (conversions and such) and create 
any color schemes (complementary, triple, ...)

## Install
```shell
npm i @olton/farbe
```

## Using
```javascript
import Farbe from "@olton/farbe"

const color = new Farbe("#fff")

console.log(color.toRGB()); // RGB {r: 255, g: 255, b: 255}
console.log(color.toRGB().toString()); // rgb(255,255,255)
```

## License
This software is free to use under the MIT license. See the [LICENSE](LICENSE) file for license text and copyright information.