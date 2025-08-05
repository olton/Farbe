import { describe, expect, it } from '@olton/latte'
import { Farbe } from '../src/index.js'

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
