let BlackHole = {
    mass: Math.pow(10, 34),
    pos: new Vector([0, 0])
};
let canvas = document.getElementById("can");
console.table(canvas);
let ctx = canvas.getContext("2d");

let test = new Vector([3, 4]);


/*Creation of particles*/
let particles = [];

for (let i = 0; i < 15; i++) {
    particles.push(new Particle())
}


/*Timer*/
let timing = setTimeout(timer, 17);

function timer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        particle.update();
        particle.draw()

    }


    timing = setTimeout(timer, 100);
}
