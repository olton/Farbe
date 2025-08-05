import { describe, expect, it } from '@olton/latte'
import { Farbe } from '../src/index.js'

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
