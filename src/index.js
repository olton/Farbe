import * as Routines from "./routines.js";
import { Palette, MetroColorPalette, StandardColorPalette } from "./palette.js";
import { Farbe } from "./farbe.js";

const Primitives = {
    ...Routines.Primitives
}

const version = "__VERSION__"
const build_time = "__BUILD_TIME__"

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

