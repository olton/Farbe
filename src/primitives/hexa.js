export default class HEXA {
    constructor(r = "FF", g = "FF", b = "FF", a = "FF") {
        this.r = parseInt(r, 16);
        this.g = parseInt(g, 16);
        this.b = parseInt(b, 16);
        this.a = parseInt(a, 16);
    }

    toString(){
        return "#" + [
            this.r.toString(16),
            this.g.toString(16),
            this.b.toString(16),
            this.a.toString(16)
        ]
            .map(v => v.length === 1 ? "0"+v : v)
            .join("");
    }
}