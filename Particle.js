const G = 6.674 * Math.pow(10, -11);

class Particle {
    constructor() {
        let x = (Math.random() - 0.5) * canvas.width;
        let y = (Math.random() - 0.5) * canvas.height;
        this.pos = new Vector([x, y]);
        this.vel = new Vector([5, 0]);
        this.acc = new Vector([0, 0]);
        this.mass = 2 * Math.pow(10, 33);
    }

    update() {
        this.acc = this.pos.subtract(new Vector([0, 0]));
        let r = this.acc.getMag();
        this.acc.setMag(G * (BlackHole.mass * this.mass) / (r * r));

        this.vel = this.vel.add(this.acc);
        this.pos = this.pos.add(this.vel);


    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.pos.data[0] / 1000 + canvas.width / 2, this.pos.data[1] / 1000 + canvas.height / 2, 2, 0, 2 * Math.PI);
        ctx.fill()
    }
}