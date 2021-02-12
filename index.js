const pi = Math.PI

class Circle {
    constructor(radius) {
    this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diam) {
        this.radius = diam / 2
    }

    get circumference() {
        return (this.radius * 2) * pi
    }

    set circumference(circum) {
        this.radius = circum / ( pi * 2 )
    }

    get area() {
        return pi * (this.radius * this.radius)
    }

    set area(ar) {
        this.radius = Math.sqrt( ar / pi )
    }


}