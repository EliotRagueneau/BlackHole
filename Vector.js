class Vector {
    constructor(coords) {
        this.data = coords

    }

    getMag() {
        return Math.sqrt(this.data.reduce(function (a, b) {
            return a + b * b
        }, 0))
    }

    setMag(length) {
        let ratio = length / this.getMag();
        for (let s of this.data) {
            s = s / ratio;
        }
    }

    add(other_vector) {
        let output = new Vector([]);
        for (let i = 0; i < this.data.length; i++) {
            output.data.push(this.data[i] + other_vector.data[i]);
        }
        return output
    }

    subtract(other_vector) {
        let output = new Vector([]);
        for (let i = 0; i < this.data.length; i++) {
            output.data.push(this.data[i] - other_vector.data[i]);
        }
        return output
    }
}