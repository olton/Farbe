import { describe, it, expect } from '@olton/latte'
import { StandardColorPalette, MetroColorPalette } from '../src/palette.js'

describe('Standard Color Palette', () => {
    it('should have black color', () => {
        return expect(StandardColorPalette.black).toBe('#000000')
    })

    it('should have white color', () => {
        return expect(StandardColorPalette.white).toBe('#ffffff')
    })

    it('should have red color', () => {
        return expect(StandardColorPalette.red).toBe('#ff0000')
    })

    it('should have green color', () => {
        return expect(StandardColorPalette.green).toBe('#008000')
    })

    it('should have blue color', () => {
        return expect(StandardColorPalette.blue).toBe('#0000ff')
    })
})

describe('Metro Color Palette', () => {
    it('should have lime color', () => {
        return expect(MetroColorPalette.lime).toBeDefined()
    })

    it('should have amber color', () => {
        return expect(MetroColorPalette.amber).toBeDefined()
    })

    it('should have cobalt color', () => {
        return expect(MetroColorPalette.cobalt).toBeDefined()
    })
})
