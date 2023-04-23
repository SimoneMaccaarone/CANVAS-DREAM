const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');



let newGeneration = Generation.generateRandom(500, myCanvas.width, myCanvas.height);
console.log(newGeneration);

// let newGeneration2 =  Generation.generateRandom(500, myCanvas.width, myCanvas.height);
// console.log(newGeneration2);


function step() {
    newGeneration.draw(ctx);
    ctx.fillStyle = 'rgba(0,0,0,0.03)'
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)

    // newGeneration2.draw(ctx);
    // ctx.fillStyle = 'rgba(0,0,0,0.03)'
    // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)

    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)'
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(500, myCanvas.width, myCanvas.height);
    }
    window.requestAnimationFrame(step);

    // ctx.fillStyle = 'rgba(0,0,0,1)'
    // ctx.beginPath();
    // ctx.arc(300, 300, 5, 0, 2 * Math.PI);
    // ctx.fill();

}


window.requestAnimationFrame(step);

function getRandomColorRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    return ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
}


