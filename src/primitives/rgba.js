export default class RGBA {
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r < 0 ? 0 : r > 255 ? 255 : r;
        this.g = g < 0 ? 0 : g > 255 ? 255 : g;
        this.b = b < 0 ? 0 : b > 255 ? 255 : b;
        this.a = (""+a).includes("%") ? parseInt(a)/100 : a;
    }

    toString(){
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${parseFloat(this.a).toFixed(2)})`;
    }
}