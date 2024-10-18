export default class HSL {
    constructor(h = 0, s = 0, l = 0) {
        this.h = h;
        this.s = (""+s).includes("%") ? parseInt(s)/100 : s;
        this.l = (""+l).includes("%") ? parseInt(l)/100 : l;
    }

    toString(){
        return "hsl(" + [
            Math.round(this.h),
            Math.round(this.s*100)+"%",
            Math.round(this.l*100)+"%"
        ].join(", ") + ")";
    }
}