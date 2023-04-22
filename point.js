class Point {
    //     Creation Point/pixel
    constructor(x, y, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        // this.forceX = (Math.random() * 2) - 1;
        // this.forceY = (Math.random() * 2) - 1;

    }

    draw(ctx) {
        ctx.fillStyle = (this.color);
        ctx.fillRect(this.x, this.y, 2, 2);
    }

    static generateRandom(canvasWidth, canvasHeight) {
        //               X & Y
        const randomX = 300;
        const randomY = 300;

        // //           Speed X & Y
        const speedX = (Math.random() * 2) - 1;
        const speedY = (Math.random() * 2) - 1;

        //               Color
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgba(${red},${green},${blue}`;

        const newPoint = new Point(randomX, randomY, speedX, speedY, randomColor);

        return newPoint;
    }

    changePosition() {

        this.x += this.speedX;
        this.y += this.speedY;

        // if (Math.random() > 0.9) {
        //     this.forceX = (Math.random() * 0.2) - 0.1;
        // }

        // if (Math.random() > 0.9) {
        //     this.forceY = (Math.random() * 0.2) - 0.1;
        // }


        // this.speedX += this.forceX;
        // this.speedY += this.forceY;

        // if (this.speedX > 1) {
        //     this.speedX = 1;
        // }
        // if (this.speedX < -1) {
        //     this.speedX = -1;
        // }

        // if (this.speedY > 1) {
        //     this.speedY = 1;
        // }
        // if (this.speedY < -1) {
        //     this.speedY = -1;
        // }

        // this.x += this.speedX;
        // this.y += this.speedY;
        

    }

}