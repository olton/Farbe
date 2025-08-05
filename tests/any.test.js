import { describe, expect, it } from '@olton/latte'
import { Farbe } from '../src/farbe.js'

describe('Color Manipulation', () => {
    it('should lighten color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.lighten(20)
        return expect(farbe.hex).toBe('#ff6666')        
    })
    it('should darken color', () => {
        const farbe = new Farbe('#ff0000')
        farbe.darken(20)
        return expect(farbe.hex).toBe('#990000')        
    })
})