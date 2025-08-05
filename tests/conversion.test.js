import { describe, expect, it } from '@olton/latte'
import { Farbe } from '../src/index.js'

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
