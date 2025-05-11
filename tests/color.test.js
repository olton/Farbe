import { describe, it, expect } from '@olton/latte'
import { 
    toHEX, toRGB, toRGBA, toHSV, toHSL, toHSLA, toCMYK,
    isHEX, isRGB, isRGBA, isHSV, isHSL, isHSLA, isCMYK, isColor,
    isDark, isLight,
    grayscale, darken, lighten, hueShift,
    expandHexColor, colorType, equal, colorToString,
    createColorScheme, randomColor
} from '../src/routines.js'

describe('Color Type Detection', () => {
    it('should detect HEX color', () => {
        return expect(isHEX('#000000')).toBeTrue()
    })

    it('should detect RGB color', () => {
        return expect(isRGB('rgb(0, 0, 0)')).toBeTrue()
    })

    it('should detect RGBA color', () => {
        return expect(isRGBA('rgba(0, 0, 0, 0.5)')).toBeTrue()
    })

    it('should detect HSV color', () => {
        return expect(isHSV('hsv(0, 0, 0)')).toBeTrue()
    })

    it('should detect HSL color', () => {
        return expect(isHSL('hsl(0, 0, 0)')).toBeTrue()
    })

    it('should detect HSLA color', () => {
        return expect(isHSLA('hsla(0, 0, 0, 0.5)')).toBeTrue()
    })

    it('should detect CMYK color', () => {
        return expect(isCMYK('cmyk(0, 0, 0, 0)')).toBeTrue()
    })

    it('should detect any valid color', () => {
        return expect(isColor('#000000')).toBeTrue()
    })

    it('should not detect invalid color', () => {
        return expect(isColor('not-a-color')).toBeFalse()
    })
})

describe('Color Conversion', () => {
    it('should convert to HEX', () => {
        return expect(toHEX('rgb(0, 0, 0)')).toBe('#000000')
    })

    it('should convert to RGB', () => {
        const rgb = toRGB('#000000')
        return expect(rgb.toString()).toBe('rgb(0,0,0)')
    })

    it('should convert to RGBA', () => {
        const rgba = toRGBA('#000000', 0.5)
        return expect(rgba.toString()).toBe('rgba(0,0,0,0.5)')
    })

    it('should convert to HSV', () => {
        const hsv = toHSV('#ff0000')
        return expect(hsv.h).toBe(0)
    })

    it('should convert to HSL', () => {
        const hsl = toHSL('#ff0000')
        return expect(hsl.h).toBe(0)
    })

    it('should convert to HSLA', () => {
        const hsla = toHSLA('#ff0000', 0.5)
        return expect(hsla.a).toBe(0.5)
    })

    it('should convert to CMYK', () => {
        const cmyk = toCMYK('#ff0000')
        return expect(cmyk.m).toBe(100)
    })
})

describe('Color Properties', () => {
    it('should detect dark color', () => {
        return expect(isDark('#000000')).toBeTrue()
    })

    it('should detect light color', () => {
        return expect(isLight('#ffffff')).toBeTrue()
    })

    it('should expand short HEX color', () => {
        return expect(expandHexColor('#000')).toBe('#000000')
    })

    it('should return color type', () => {
        return expect(colorType('#000000')).toBe('hex')
    })

    it('should check if colors are equal', () => {
        return expect(equal('#000000', 'rgb(0, 0, 0)')).toBeTrue()
    })

    it('should convert color to string', () => {
        const rgb = toRGB('#000000')
        return expect(colorToString(rgb)).toBe('rgb(0,0,0)')
    })
})

describe('Color Manipulation', () => {
    it('should convert to grayscale', () => {
        const gray = grayscale('#ff0000')
        return expect(gray).toBe('#363636')
    })

    it('should darken color', () => {
        const darkened = darken('#ff0000', 20)
        return expect(darkened).toBe('#eb0000')
    })

    it('should lighten color', () => {
        const lightened = lighten('#ff0000', 20)
        return expect(lightened).toBe('#ff1414')
    })

    it('should shift hue', () => {
        const shifted = hueShift('#ff0000', 120)
        return expect(shifted).toBe('#00ff00')
    })
})

describe('Color Schemes', () => {
    it('should create monochromatic scheme', () => {
        const scheme = createColorScheme('#ff0000', 'mono')
        return expect(scheme.length).toBe(5)
    })

    it('should create complementary scheme', () => {
        const scheme = createColorScheme('#ff0000', 'complement')
        return expect(scheme.length).toBe(2)
    })
})

describe('Random Colors', () => {
    it('should generate random color', () => {
        const random = randomColor()
        return expect(isHEX(random)).toBeTrue()
    })

    it('should generate random RGB color', () => {
        const random = randomColor('rgb')
        return expect(isRGB(random)).toBeTrue()
    })
})
