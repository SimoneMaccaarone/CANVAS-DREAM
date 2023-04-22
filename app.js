const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

let newGeneration = Generation.generateRandom(100, myCanvas.width, myCanvas.height);
console.log(newGeneration);


function step() {

    newGeneration.draw(ctx);

    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)'
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(100, myCanvas.width, myCanvas.height);
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

function getRandomColorRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();
    
    return ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
}  

