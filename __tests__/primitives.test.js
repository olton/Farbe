import {describe, it, expect} from "@olton/easytest";
import {Primitives} from "../src/index.js";

describe(`Primitives tests`, () => {
    it(`CMYK`, () => {
        expect(new Primitives.CMYK(0,0,0,0).toString()).toBe('cmyk(0%, 0%, 0%, 0%)')
    })
    it(`HSL`, () => {
        expect(new Primitives.HSL(0,0,0).toString()).toBe('hsl(0, 0%, 0%)')
    })
    it(`HSLA`, () => {
        expect(new Primitives.HSLA(0,0,0, .5).toString()).toBe('hsla(0, 0%, 0%, 0.50)')
    })
    it(`HSV`, () => {
        expect(new Primitives.HSV(0,0,0).toString()).toBe('hsv(0, 0%, 0%)')
    })
    it(`RGB`, () => {
        expect(new Primitives.RGB(0,0,0).toString()).toBe('rgb(0, 0, 0)')
    })
    it(`RGBA`, () => {
        expect(new Primitives.RGBA(0,0,0, .5).toString()).toBe('rgba(0, 0, 0, 0.50)')
    })
})