const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


// //--- Creation Point/pixel
// const point = {
//     x: Math.random()*600,
//     y: Math.random()*600
// }

for (let i = 0; i < 100; i++) {

    const point = {
        x: Math.random() * 600,
        y: Math.random() * 600
    }
    
   point.color =  colorRandomRGB(); // colore del pennarello

// cordinate random che si somma a "const point"
//  ----- Cordinate random ----
    setInterval(() => {
        const randomX = (Math.random()*4)-2;
        const randomY = (Math.random()*4)-2;

        ctx.fillStyle= point.color
        ctx.fillRect(point.x, point.y,2,2)

        point.x+= randomX
        point.y+= randomY
    }, 1);
}

setInterval(() => {
    const newCanvas = document.getElementById('new-canvas');
    const newCtx = newCanvas.getContext('2d');

    newCtx.color = trasparentForWarm()
}, 1);

// setInterval(() => {

//     const randomX = (Math.random() * 4) - 2;
//     const randomY = (Math.random() * 4) - 2;


//     ctx.fillStyle = getRandomColorRGB();
//     ctx.fillRect(point.x, point.y, 2, 2);

//     point.x += randomX;
//     point.y += randomY;

// }, 1);



function colorRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return ctx.fillStyle = `rgb(${red},${green},${blue})`
}

function colorRandomRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    return ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
}

function trasparentForWarm() {
    const red = 0;
    const green = 0;
    const blue = 0;
    const alpha = 0.3;

    return ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
}