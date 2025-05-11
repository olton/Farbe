import { describe, it, expect } from '@olton/latte'
import { Farbe } from '../src/farbe.js'

describe('Constructor', () => {
    it('should create a Farbe instance with default color', () => {
        const farbe = new Farbe()
        return expect(farbe.hex).toBe('#000000')
    })

    it('should create a Farbe instance with specified color', () => {
        const farbe = new Farbe('#ff0000')
        return expect(farbe.hex).toBe('#ff0000')
    })

    it('should create a Farbe instance with options', () => {
        const farbe = new Farbe('#ff0000', { alpha: 0.5 })
        return expect(farbe.options.alpha).toBe(0.5)
    })
})

describe('Color Conversion Methods', () => {
    it('should convert to RGB', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toRGB()
        return expect(farbe.toString()).toBe('rgb(255,0,0)')
    })

    it('should convert to RGBA', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toRGBA(0.5)
        return expect(farbe.toString()).toBe('rgba(255,0,0,0.5)')
    })

    it('should convert to HEX', () => {
        const farbe = new Farbe('rgb(255, 0, 0)')
        farbe.toHEX()
        return expect(farbe.toString()).toBe('#ff0000')
    })

    it('should convert to HSV', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toHSV()
        return expect(farbe.value.h).toBe(0)
    })

    it('should convert to HSL', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toHSL()
        return expect(farbe.value.h).toBe(0)
    })

    it('should convert to HSLA', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toHSLA(0.5)
        return expect(farbe.value.a).toBe(0.5)
    })

    it('should convert to CMYK', () => {
        const farbe = new Farbe('#ff0000')
        farbe.toCMYK()
        return expect(farbe.value.m).toBe(100)
    })

    it('should convert to websafe', () => {
        const farbe = new Farbe('#123456')
        farbe.toWebsafe()
        return expect(farbe.hex).toBe('#003366')
    })
})

describe('Color Properties', () => {
    it('should detect dark color', () => {
        const farbe = new Farbe('#000000')
        return expect(farbe.isDark()).toBeTrue()
    })

    it('should detect light color', () => {
        const farbe = new Farbe('#ffffff')
        return expect(farbe.isLight()).toBeTrue()
    })

    it('should return color type', () => {
        const farbe = new Farbe('#ff0000')
        return expect(farbe.type).toBe('hex')
    })

    it('should check if colors are equal', () => {
        const farbe = new Farbe('#ff0000')
        return expect(farbe.equal('rgb(255, 0, 0)')).toBeTrue()
    })
})

describe('Color Manipulation', () => {
    it('should darken color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.darken(20)
        return expect(farbe.hex).toBe('#eb0000')
    })

    it('should lighten color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.lighten(20)
        return expect(farbe.hex).toBe('#ff1414')
    })

    it('should shift hue', () => {
        const farbe = new Farbe('#ff0000')
        farbe.hueShift(120)
        return expect(farbe.hex).toBe('#00ff00')
    })

    it('should convert to grayscale', () => {
        const farbe = new Farbe('#ff0000')
        farbe.grayscale()
        return expect(farbe.hex).toBe('#363636')
    })

    it('should generate color scheme', () => {
        const farbe = new Farbe('#ff0000')
        const scheme = farbe.getScheme('mono', 'hex')
        return expect(scheme.length).toBe(5)
    })

    it('should set random color', () => {
        const farbe = new Farbe()
        farbe.random()
        return expect(farbe.value).toBeDefined()
    })

    it('should modify color channel', () => {
        const farbe = new Farbe('#ff0000')
        farbe.channel('red', 128)
        return expect(farbe.rgb.r).toBe(128)
    })

    it('should mix colors', () => {
        const farbe = new Farbe('#ff0000')
        farbe.mix('#0000ff', 50)
        return expect(farbe.hex).toBe('#800080')
    })

    it('should saturate color', () => {
        const farbe = new Farbe('hsl(0, 0.5, 0.5)')
        farbe.saturate(20)
        return expect(farbe.hsl.s).toBeGreaterThan(0.5)
    })

    it('should desaturate color', () => {
        const farbe = new Farbe('hsl(0, 0.5, 0.5)')
        farbe.desaturate(20)
        return expect(farbe.hsl.s).toBeLessThan(0.5)
    })

    it('should spin color hue', () => {
        const farbe = new Farbe('hsl(0, 1, 0.5)')
        farbe.spin(90)
        return expect(farbe.hsl.h).toBe(90)
    })

    it('should brighten color', () => {
        const farbe = new Farbe('#800000')
        farbe.brighten(20)
        return expect(farbe.rgb.r).toBeGreaterThan(128)
    })
})
