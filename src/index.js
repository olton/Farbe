import * as Routines from "./routines.js";
import { Palette, MetroColorPalette, StandardColorPalette } from "./palette.js";
import { Farbe } from "./farbe.js";

const Primitives = {
    ...Routines.Primitives
}

const version = "1.0.4"
const build_time = "11.08.2024, 23:47:03"

const info = () => {
    console.info(`%c Farbe %c v${version} %c ${build_time} `, "color: #ffffff; font-weight: bold; background: #ff00ff", "color: white; background: darkgreen", "color: white; background: #0080fe;")
}

export {
    Routines,
    Palette,
    MetroColorPalette,
    StandardColorPalette,
    Primitives,
    Farbe,
    info
}

