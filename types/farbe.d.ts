// Type definitions for Farbe color library
// Project: https://github.com/olton/farbe

declare module 'farbe' {
  // Color Types
  export type RGB = [number, number, number];
  export type RGBA = [number, number, number, number] | { r: number, g: number, b: number, a: number };
  export type HSV = [number, number, number];
  export type HSL = [number, number, number];
  export type HSLA = [number, number, number, number];
  export type CMYK = [number, number, number, number];
  export type HEX = string;
  export type ColorValue = RGB | RGBA | HSV | HSL | HSLA | CMYK | HEX;

  // Color Type Constants
  export const colorTypes: {
    RGB: string;
    RGBA: string;
    HSV: string;
    HSL: string;
    HSLA: string;
    CMYK: string;
    HEX: string;
    UNKNOWN: string;
  };

  // Default Color Properties
  export interface ColorDefaultProps {
    shade1: number;
    shade2: number;
    tint1: number;
    tint2: number;
    distance: number;
    alpha: number;
    angle: number;
    step: number;
    algorithm: number;
  }

  export const colorDefaultProps: ColorDefaultProps;

  // Farbe Class
  export class Farbe {
    /**
     * Constructor
     * @param color - Set color value. Value must be one of: hex, RGB, RGBA, HSL, HSLA, HSV, CMYK.
     * @param options - Options for color manipulation
     */
    constructor(color?: ColorValue | string, options?: Partial<ColorDefaultProps>);

    // Properties
    /**
     * Get options
     * @returns Current options object
     */
    get options(): ColorDefaultProps;

    /**
     * Set options. Will override default options
     * @param options - New options to set
     */
    set options(options: Partial<ColorDefaultProps>);

    /**
     * Get current color value
     * @returns Current color value
     */
    get value(): ColorValue;

    /**
     * Set color value. Value must be one of: hex, RGB, RGBA, HSL, HSLA, HSV, CMYK.
     * @param color - New color value to set
     */
    set value(color: ColorValue | string);

    /**
     * Get color type
     * @returns Color type as string
     */
    get type(): string;

    // Color Format Conversions
    /**
     * Convert current color to RGB
     * @returns This instance for method chaining
     */
    toRGB(): this;

    /**
     * Get color in RGB format
     * @returns RGB representation of the color
     */
    get rgb(): RGB;

    /**
     * Convert current value to RGBA
     * @param alpha - Alpha channel value (0-1)
     * @returns This instance for method chaining
     */
    toRGBA(alpha?: number): this;

    /**
     * Get value in RGBA format
     * @returns RGBA representation of the color
     */
    get rgba(): RGBA;

    /**
     * Convert current value to HEX
     * @returns This instance for method chaining
     */
    toHEX(): this;

    /**
     * Get value as HEX
     * @returns HEX representation of the color
     */
    get hex(): HEX;

    /**
     * Convert current value to HSV
     * @returns This instance for method chaining
     */
    toHSV(): this;

    /**
     * Get value as HSV
     * @returns HSV representation of the color
     */
    get hsv(): HSV;

    /**
     * Convert current value to HSL
     * @returns This instance for method chaining
     */
    toHSL(): this;

    /**
     * Get value as HSL
     * @returns HSL representation of the color
     */
    get hsl(): HSL;

    /**
     * Convert current value to HSLA
     * @param alpha - Alpha channel value (0-1)
     * @returns This instance for method chaining
     */
    toHSLA(alpha?: number): this;

    /**
     * Get value as HSLA
     * @returns HSLA representation of the color
     */
    get hsla(): HSLA;

    /**
     * Convert current value to CMYK
     * @returns This instance for method chaining
     */
    toCMYK(): this;

    /**
     * Get value as CMYK
     * @returns CMYK representation of the color
     */
    get cmyk(): CMYK;

    /**
     * Convert color value to websafe value
     * @returns This instance for method chaining
     */
    toWebsafe(): this;

    /**
     * Get value as websafe
     * @returns Websafe representation of the color
     */
    get websafe(): ColorValue;

    // Color Manipulation
    /**
     * Darken color by the specified percentage
     * @param amount - Value between 0 and 100 (default: 10)
     * @returns This instance for method chaining
     */
    darken(amount?: number): this;

    /**
     * Lighten color by the specified percentage
     * @param amount - Value between 0 and 100 (default: 10)
     * @returns This instance for method chaining
     */
    lighten(amount?: number): this;

    /**
     * Check if the current color is dark
     * @returns True if the color is dark, false otherwise
     */
    isDark(): boolean;

    /**
     * Check if the current color is light
     * @returns True if the color is light, false otherwise
     */
    isLight(): boolean;

    /**
     * Change color hue by shifting it on the color wheel
     * @param angle - Value between -360 and 360
     * @returns This instance for method chaining
     */
    hueShift(angle: number): this;

    /**
     * Convert color to grayscale
     * @returns This instance for method chaining
     */
    grayscale(): this;

    /**
     * Create a color scheme based on the current color
     * @param name - Scheme name
     * @param format - Format for returned values
     * @param options - Options for generated scheme, will override default options
     * @returns Array of colors in the specified scheme
     */
    getScheme(name: string, format?: string, options?: Partial<ColorDefaultProps>): ColorValue[];

    /**
     * Check if color is equal to comparison color
     * @param color - Color to compare with
     * @returns True if colors are equal, false otherwise
     */
    equal(color: ColorValue | string): boolean;

    /**
     * Set color to a random value
     * @param colorType - Type of color to generate
     * @param alpha - Alpha value for the random color
     */
    random(colorType?: string, alpha?: number): void;

    /**
     * Modify a specific channel of the color
     * @param ch - Channel name (red, green, blue, alpha, hue, saturation, value, lightness, cyan, magenta, yellow, black)
     * @param val - New value for the channel
     * @returns This instance for method chaining
     */
    channel(ch: string, val: number): this;

    /**
     * Add another color to the current color
     * @param color - Color to add
     */
    add(color: ColorValue | string): void;

    /**
     * Mix current color with another color
     * @param color - Color to mix with
     * @param amount - Mix amount (0-1)
     */
    mix(color: ColorValue | string, amount?: number): void;

    /**
     * Multiply current color with another color
     * @param color - Color to multiply with
     */
    multiply(color: ColorValue | string): void;

    /**
     * Shade the color by the specified amount
     * @param amount - Shade amount
     */
    shade(amount: number): void;

    /**
     * Increase color saturation
     * @param amount - Amount to increase saturation
     */
    saturate(amount: number): void;

    /**
     * Decrease color saturation
     * @param amount - Amount to decrease saturation
     */
    desaturate(amount: number): void;

    /**
     * Rotate the color's hue on the color wheel
     * @param amount - Angle to rotate
     */
    spin(amount: number): void;

    /**
     * Brighten the color
     * @param amount - Amount to brighten
     */
    brighten(amount: number): void;

    // Utility
    /**
     * Get string representation of the color
     * @returns String representation of the color (e.g., for RGB: "rgb(r, g, b)")
     */
    toString(): string;
  }

  // Palette Types
  export interface ColorPalette {
    [colorName: string]: string;
  }

  export const StandardColorPalette: ColorPalette;
  export const MetroColorPalette: ColorPalette;

  export const Palette: {
    /**
     * Get a color from a palette by name
     * @param name - Color name
     * @param palette - Color palette to use (defaults to StandardColorPalette)
     * @param undefined_color - Fallback color if the named color is not found
     * @returns Color value or undefined if not found and no fallback provided
     */
    color(name: string, palette?: ColorPalette, undefined_color?: string): string | undefined;

    /**
     * Get all color names from a palette
     * @param palette - Color palette to use (defaults to StandardColorPalette)
     * @returns Array of color names
     */
    palette(palette?: ColorPalette): string[];

    /**
     * Get all color values from a palette
     * @param palette - Color palette to use (defaults to StandardColorPalette)
     * @returns Array of color values
     */
    colors(palette?: ColorPalette): string[];
  };

  // Routines - Color Manipulation Functions
  export namespace Routines {
    // Type Checking
    /**
     * Check if specified color is HSV color
     * @param color - Color to check
     * @returns True if color is HSV, false otherwise
     */
    export function isHSV(color: ColorValue): boolean;

    /**
     * Check if specified color is HSL color
     * @param color - Color to check
     * @returns True if color is HSL, false otherwise
     */
    export function isHSL(color: ColorValue): boolean;

    /**
     * Check if specified color is HSLA color
     * @param color - Color to check
     * @returns True if color is HSLA, false otherwise
     */
    export function isHSLA(color: ColorValue): boolean;

    /**
     * Check if specified color is RGB color
     * @param color - Color to check
     * @returns True if color is RGB, false otherwise
     */
    export function isRGB(color: ColorValue): boolean;

    /**
     * Check if specified color is RGBA color
     * @param color - Color to check
     * @returns True if color is RGBA, false otherwise
     */
    export function isRGBA(color: ColorValue): boolean;

    /**
     * Check if specified color is CMYK color
     * @param color - Color to check
     * @returns True if color is CMYK, false otherwise
     */
    export function isCMYK(color: ColorValue): boolean;

    /**
     * Check if specified color is HEX color
     * @param color - Color to check
     * @returns True if color is HEX, false otherwise
     */
    export function isHEX(color: ColorValue | string): boolean;

    /**
     * Check if specified value is a valid color
     * @param color - Value to check
     * @returns True if value is a valid color, false otherwise
     */
    export function isColor(color: any): boolean;

    /**
     * Check if specified color is dark
     * @param color - Color to check
     * @returns True if color is dark, false otherwise
     */
    export function isDark(color: ColorValue): boolean;

    /**
     * Check if specified color is light
     * @param color - Color to check
     * @returns True if color is light, false otherwise
     */
    export function isLight(color: ColorValue): boolean;

    /**
     * Get the type of the specified color
     * @param color - Color to check
     * @returns Color type as string
     */
    export function colorType(color: ColorValue): string;

    /**
     * Check if two colors are equal
     * @param color1 - First color
     * @param color2 - Second color
     * @returns True if colors are equal, false otherwise
     */
    export function equal(color1: ColorValue, color2: ColorValue | string): boolean;

    // Color Conversion
    /**
     * Convert HEX color to RGB
     * @param hex - HEX color string
     * @returns RGB color
     */
    export function hex2rgb(hex: string): RGB;

    /**
     * Convert RGB color to HEX
     * @param rgb - RGB color
     * @returns HEX color string
     */
    export function rgb2hex(rgb: RGB): string;

    /**
     * Convert RGB color to HSV
     * @param rgb - RGB color
     * @returns HSV color
     */
    export function rgb2hsv(rgb: RGB): HSV;

    /**
     * Convert HSV color to RGB
     * @param hsv - HSV color
     * @returns RGB color
     */
    export function hsv2rgb(hsv: HSV): RGB;

    /**
     * Convert HSV color to HEX
     * @param hsv - HSV color
     * @returns HEX color string
     */
    export function hsv2hex(hsv: HSV): string;

    /**
     * Convert HEX color to HSV
     * @param hex - HEX color string
     * @returns HSV color
     */
    export function hex2hsv(hex: string): HSV;

    /**
     * Convert RGB color to CMYK
     * @param rgb - RGB color
     * @returns CMYK color
     */
    export function rgb2cmyk(rgb: RGB): CMYK;

    /**
     * Convert CMYK color to RGB
     * @param cmyk - CMYK color
     * @returns RGB color
     */
    export function cmyk2rgb(cmyk: CMYK): RGB;

    /**
     * Convert HSV color to HSL
     * @param hsv - HSV color
     * @returns HSL color
     */
    export function hsv2hsl(hsv: HSV): HSL;

    /**
     * Convert HSL color to HSV
     * @param hsl - HSL color
     * @returns HSV color
     */
    export function hsl2hsv(hsl: HSL): HSV;

    // Websafe Colors
    /**
     * Convert RGB color to websafe RGB
     * @param rgb - RGB color
     * @returns Websafe RGB color
     */
    export function rgb2websafe(rgb: RGB): RGB;

    /**
     * Convert RGBA color to websafe RGBA
     * @param rgba - RGBA color
     * @returns Websafe RGBA color
     */
    export function rgba2websafe(rgba: RGBA): RGBA;

    /**
     * Convert HEX color to websafe HEX
     * @param hex - HEX color string
     * @returns Websafe HEX color string
     */
    export function hex2websafe(hex: string): string;

    /**
     * Convert HSV color to websafe HSV
     * @param hsv - HSV color
     * @returns Websafe HSV color
     */
    export function hsv2websafe(hsv: HSV): HSV;

    /**
     * Convert HSL color to websafe HSL
     * @param hsl - HSL color
     * @returns Websafe HSL color
     */
    export function hsl2websafe(hsl: HSL): HSL;

    /**
     * Convert CMYK color to websafe CMYK
     * @param cmyk - CMYK color
     * @returns Websafe CMYK color
     */
    export function cmyk2websafe(cmyk: CMYK): CMYK;

    /**
     * Convert any color to its websafe equivalent
     * @param color - Any color value
     * @returns Websafe color in the same format as input
     */
    export function websafe(color: ColorValue): ColorValue;

    // Color Format Conversion
    /**
     * Convert color to specified format
     * @param color - Color to convert
     * @param mode - Target color format
     * @param alpha - Alpha value for formats that support it
     * @returns Converted color
     */
    export function toColor(color: ColorValue | string, mode?: string, alpha?: number): ColorValue;

    /**
     * Convert color to HEX format
     * @param color - Color to convert
     * @returns HEX color string
     */
    export function toHEX(color: ColorValue | string): string;

    /**
     * Convert color to RGB format
     * @param color - Color to convert
     * @returns RGB color
     */
    export function toRGB(color: ColorValue | string): RGB;

    /**
     * Convert color to RGBA format
     * @param color - Color to convert
     * @param alpha - Alpha value (0-1)
     * @returns RGBA color
     */
    export function toRGBA(color: ColorValue | string, alpha?: number): RGBA;

    /**
     * Convert color to HSV format
     * @param color - Color to convert
     * @returns HSV color
     */
    export function toHSV(color: ColorValue | string): HSV;

    /**
     * Convert color to HSL format
     * @param color - Color to convert
     * @returns HSL color
     */
    export function toHSL(color: ColorValue | string): HSL;

    /**
     * Convert color to HSLA format
     * @param color - Color to convert
     * @param alpha - Alpha value (0-1)
     * @returns HSLA color
     */
    export function toHSLA(color: ColorValue | string, alpha?: number): HSLA;

    /**
     * Convert color to CMYK format
     * @param color - Color to convert
     * @returns CMYK color
     */
    export function toCMYK(color: ColorValue | string): CMYK;

    // Color Manipulation
    /**
     * Convert color to grayscale
     * @param color - Color to convert
     * @returns Grayscale version of the color
     */
    export function grayscale(color: ColorValue): ColorValue;

    /**
     * Darken color by the specified percentage
     * @param color - Color to darken
     * @param amount - Value between 0 and 100 (default: 10)
     * @returns Darkened color
     */
    export function darken(color: ColorValue, amount?: number): ColorValue;

    /**
     * Lighten color by the specified percentage
     * @param color - Color to lighten
     * @param amount - Value between 0 and 100 (default: 10)
     * @returns Lightened color
     */
    export function lighten(color: ColorValue, amount?: number): ColorValue;

    /**
     * Change color hue by shifting it on the color wheel
     * @param color - Color to shift
     * @param angle - Value between -360 and 360
     * @param alpha - Alpha value for the resulting color
     * @returns Color with shifted hue
     */
    export function hueShift(color: ColorValue, angle: number, alpha?: number): ColorValue;

    /**
     * Mix two colors together
     * @param color1 - First color
     * @param color2 - Second color
     * @param amount - Mix amount (0-1, default: 0.5)
     * @returns Mixed color
     */
    export function mix(color1: ColorValue | string, color2: ColorValue | string, amount?: number): ColorValue;

    /**
     * Multiply two colors together
     * @param color1 - First color
     * @param color2 - Second color
     * @returns Multiplied color
     */
    export function multiply(color1: ColorValue | string, color2: ColorValue | string): ColorValue;

    /**
     * Shade the color by the specified amount
     * @param color - Color to shade
     * @param amount - Shade amount
     * @returns Shaded color
     */
    export function shade(color: ColorValue | string, amount: number): ColorValue;

    /**
     * Increase color saturation
     * @param color - Color to saturate
     * @param amount - Amount to increase saturation
     * @returns Saturated color
     */
    export function saturate(color: ColorValue | string, amount: number): ColorValue;

    /**
     * Decrease color saturation
     * @param color - Color to desaturate
     * @param amount - Amount to decrease saturation
     * @returns Desaturated color
     */
    export function desaturate(color: ColorValue | string, amount: number): ColorValue;

    /**
     * Rotate the color's hue on the color wheel
     * @param color - Color to spin
     * @param amount - Angle to rotate
     * @returns Color with rotated hue
     */
    export function spin(color: ColorValue | string, amount: number): ColorValue;

    /**
     * Brighten the color
     * @param color - Color to brighten
     * @param amount - Amount to brighten
     * @returns Brightened color
     */
    export function brighten(color: ColorValue | string, amount: number): ColorValue;

    /**
     * Add two colors together
     * @param val1 - First color
     * @param val2 - Second color
     * @param returnAs - Format to return the result in
     * @returns Combined color
     */
    export function add(val1: ColorValue | string, val2: ColorValue | string, returnAs?: string): ColorValue;

    // Color Schemes
    /**
     * Create a color scheme based on the input color
     * @param color - Base color for the scheme
     * @param name - Scheme name (e.g., 'complementary', 'triadic', 'tetradic', etc.)
     * @param format - Format for returned colors
     * @param options - Options for generated scheme, will override default options
     * @returns Array of colors in the specified scheme
     */
    export function createColorScheme(
      color: ColorValue | string, 
      name: string, 
      format?: string, 
      options?: Partial<ColorDefaultProps>
    ): ColorValue[];

    // Parsing and Creation
    /**
     * Parse a color string into a color object
     * @param color - Color string to parse
     * @returns Parsed color object
     */
    export function parseColor(color: string): ColorValue;

    /**
     * Alias for parseColor
     * @param color - Color string to parse
     * @returns Parsed color object
     */
    export function parse(color: string): ColorValue;

    /**
     * Generate a random color
     * @param colorType - Type of color to generate
     * @param alpha - Alpha value for the random color
     * @returns Random color
     */
    export function randomColor(colorType?: string, alpha?: number): ColorValue;

    /**
     * Alias for randomColor
     * @param colorType - Type of color to generate
     * @param alpha - Alpha value for the random color
     * @returns Random color
     */
    export function random(colorType?: string, alpha?: number): ColorValue;

    /**
     * Create a color in the specified format
     * @param colorType - Type of color to create
     * @param from - Base color to convert from
     * @returns Created color
     */
    export function createColor(colorType?: string, from?: ColorValue | string): ColorValue;

    /**
     * Alias for createColor
     * @param colorType - Type of color to create
     * @param from - Base color to convert from
     * @returns Created color
     */
    export function create(colorType?: string, from?: ColorValue | string): ColorValue;

    /**
     * Expand shorthand HEX color (e.g., "#03F") to full form (e.g., "#0033FF")
     * @param hex - HEX color string
     * @returns Expanded HEX color string
     */
    export function expandHexColor(hex: string): string;

    /**
     * Alias for expandHexColor
     * @param hex - HEX color string
     * @returns Expanded HEX color string
     */
    export function expand(hex: string): string;

    // Primitives
    export const Primitives: {
      [key: string]: Function;
    };
  }

  // Info Function
  /**
   * Display library information in the console
   * Shows version and build time information
   */
  export function info(): void;
}
