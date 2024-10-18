export default class HSVA {
    constructor(h = 0, s = 0, v = 0, a = 1) {

        s = (""+s).includes("%") ? parseInt(s)/100 : s;
        v = (""+v).includes("%") ? parseInt(v)/100 : v;
        a = (""+a).includes("%") ? parseInt(a)/100 : a;

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }

    toString(){
        return "hsva(" + [
            Math.round(this.h),
            Math.round(this.s*100)+"%",
            Math.round(this.v*100)+"%",
            parseFloat(this.a).toFixed(2)
        ].join(", ") + ")";
    }
}