import { describe, it, expect } from '@olton/latte'
import { Primitives } from '../src/routines.js'

describe('RGB Primitive', () => {
    it('should create RGB instance', () => {
        const rgb = new Primitives.RGB(255, 0, 0)
        expect(rgb).toBeDefined()
        expect(rgb).hasProperty('r')
        expect(rgb).hasProperty('g')
        expect(rgb).hasProperty('b')
    })

    it('should have correct properties', () => {
        const rgb = new Primitives.RGB(255, 0, 0)
        expect(rgb.r).toBe(255)
        expect(rgb.g).toBe(0)
        expect(rgb.b).toBe(0)
    })

    it('should convert to string', () => {
        const rgb = new Primitives.RGB(255, 0, 0)
        expect(rgb.toString()).toBe('rgb(255,0,0)')
    })
})

describe('RGBA Primitive', () => {
    it('should create RGBA instance', () => {
        const rgba = new Primitives.RGBA(255, 0, 0, 0.5)
        expect(rgba).toBeDefined()
        expect(rgba).hasProperty('r')
        expect(rgba).hasProperty('g')
        expect(rgba).hasProperty('b')
        expect(rgba).hasProperty('a')
    })

    it('should have correct properties', () => {
        const rgba = new Primitives.RGBA(255, 0, 0, 0.5)
        expect(rgba.r).toBe(255)
        expect(rgba.g).toBe(0)
        expect(rgba.b).toBe(0)
        expect(rgba.a).toBe(0.5)
    })

    it('should convert to string', () => {
        const rgba = new Primitives.RGBA(255, 0, 0, 0.5)
        expect(rgba.toString()).toBe('rgba(255,0,0,0.5)')
    })
})

describe('HSV Primitive', () => {
    it('should create HSV instance', () => {
        const hsv = new Primitives.HSV(0, 1, 1)
        expect(hsv).toBeDefined()
        expect(hsv).hasProperty('h')
        expect(hsv).hasProperty('s')
        expect(hsv).hasProperty('v')        
    })

    it('should have correct properties', () => {
        const hsv = new Primitives.HSV(0, 1, 1)
        expect(hsv.h).toBe(0)
        expect(hsv.s).toBe(1)
        expect(hsv.v).toBe(1)
    })

    it('should convert to string', () => {
        const hsv = new Primitives.HSV(0, 1, 1)
        expect(hsv.toString()).toBe('hsv(0,100%,100%)')
    })
})

describe('HSL Primitive', () => {
    it('should create HSL instance', () => {
        const hsl = new Primitives.HSL(0, 1, 0.5)
        expect(hsl).toBeDefined()
        expect(hsl).hasProperty('h')
        expect(hsl).hasProperty('s')
        expect(hsl).hasProperty('l')        
    })

    it('should have correct properties', () => {
        const hsl = new Primitives.HSL(0, 1, 0.5)
        expect(hsl.h).toBe(0)
        expect(hsl.s).toBe(1)
        expect(hsl.l).toBe(0.5)
    })

    it('should convert to string', () => {
        const hsl = new Primitives.HSL(0, 1, 0.5)
        expect(hsl.toString()).toBe('hsl(0,100%,50%)')
    })
})

describe('HSLA Primitive', () => {
    it('should create HSLA instance', () => {
        const hsla = new Primitives.HSLA(0, 1, 0.5, 0.5)
        expect(hsla).toBeDefined()
        expect(hsla).hasProperty('h')
        expect(hsla).hasProperty('s')
        expect(hsla).hasProperty('l')
        expect(hsla).hasProperty('a')
    })

    it('should have correct properties', () => {
        const hsla = new Primitives.HSLA(0, 1, 0.5, 0.5)
        expect(hsla.h).toBe(0)
        expect(hsla.s).toBe(1)
        expect(hsla.l).toBe(0.5)
        expect(hsla.a).toBe(0.5)
    })

    it('should convert to string', () => {
        const hsla = new Primitives.HSLA(0, 1, 0.5, 0.5)
        expect(hsla.toString()).toBe('hsla(0,100%,50%,0.50)')
    })
})

describe('CMYK Primitive', () => {
    it('should create CMYK instance', () => {
        const cmyk = new Primitives.CMYK(0, 100, 100, 0)
        expect(cmyk).toBeDefined()
        expect(cmyk).hasProperty('c')
        expect(cmyk).hasProperty('m')
        expect(cmyk).hasProperty('y')
        expect(cmyk).hasProperty('k')
    })

    it('should have correct properties', () => {
        const cmyk = new Primitives.CMYK(0, 100, 100, 0)
        expect(cmyk.c).toBe(0)
        expect(cmyk.m).toBe(100)
        expect(cmyk.y).toBe(100)
        expect(cmyk.k).toBe(0)
    })

    it('should convert to string', () => {
        const cmyk = new Primitives.CMYK(0, 100, 100, 0)
        expect(cmyk.toString()).toBe('cmyk(0,100,100,0)')
    })
})
