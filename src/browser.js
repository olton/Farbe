import {Farbe, Routines, Palette, StandardColorPalette, MetroColorPalette, Primitives, info} from "./index.js";

globalThis.Farbe = Farbe
globalThis.farbe = c => new Farbe(c)

globalThis.Farbe.Routines = Routines
globalThis.Farbe.Palette = Palette
globalThis.Farbe.StandardColors = StandardColorPalette
globalThis.Farbe.MetroColors = MetroColorPalette
globalThis.Farbe.Primitives = Primitives
globalThis.Farbe.info = info

info()