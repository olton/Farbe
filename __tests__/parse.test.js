import {describe, it, expect} from "@olton/easytest";
import {Routines} from "../src/index.js";

describe(`Color parse tests`, () => {
    it(`Parse #0ff`, () => {
        return expect(Routines.parseColor('#0ff').toString()).toBe('#00ffff')
    })
    it(`Parse #00ff00`, () => {
        return expect(Routines.parseColor('#00ff00')).toBeObject({r:0, g:255, b:0})
    })
    it(`Parse rgb(0,0,0)`, () => {
        return expect(Routines.parseColor('rgb(0,0,0)')).toBeObject({r:0, g:0, b:0})
    })
    it(`Parse rgba(0,0,0,.2)`, () => {
        return expect(Routines.parseColor('rgba(0,0,0, .2)')).toBeObject({r:0, g:0, b:0, a:.2})
    })
    it(`Parse cmyk(0,0,0,0)`, () => {
        return expect(Routines.parseColor('cmyk(0,0,0,0)')).toBeObject({c:0, m:0, y:0, k:0})
    })
    it(`Parse hsv(0,50%,50%)`, () => {
        return expect(Routines.parseColor('hsv(0,50%,50%)')).toBeObject({h:0, s:0.5, v:0.5})
    })
    it(`Parse hsva(0,50%,50%)`, () => {
        return expect(Routines.parseColor('hsva(0,50%,50%,.5)')).toBeObject({h:0, s:0.5, v:0.5, a:.5})
    })
    it(`Parse hsl(0,50%,50%)`, () => {
        return expect(Routines.parseColor('hsl(0,50%,50%)')).toBeObject({h:0, s:0.5, l:0.5})
    })
    it(`Parse hsla(0,50%,50%)`, () => {
        return expect(Routines.parseColor('hsla(0,50%,50%, 1)')).toBeObject({h:0, s:0.5, l:0.5, a:1})
    })
})