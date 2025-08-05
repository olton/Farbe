import { describe, expect, it } from '@olton/latte'
import { Farbe } from '../src/index.js'

describe('Color Manipulation', () => {
    it('should darken color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.darken(20)
        return expect(farbe.hex).toBe('#990000')
    })

    it('should lighten color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.lighten(20)
        return expect(farbe.hex).toBe('#ff6666')
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
