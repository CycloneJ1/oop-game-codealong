class Player {
    constructor(){
        this.positionX = 40;
        this.positionY = 0;
        this.width = 5;
        this.height = 5;
        this.domElement = null;
        

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";

        console.log(`moving left... ${this.positionX} `);
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";

        console.log(`moving right... ${this.positionX} `);
    }
}


class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 1;
        this.height = 1;
        this.domElement = null;



        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveDown(){
        console.log("moving down.....")
        this.positionY -= 10;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}


const player = new Player();


const obstaclesArr = [];  //will store instances of the class Obstacle



// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
    console.log("we've created a new obstacle.... ", obstaclesArr.length)
}, 3000);


// move all obstacles
setInterval(() => {
    obstaclesArr.forEach( (obstacleInstance) => {
        obstacleInstance.moveDown();

        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            // Collision detected!
            console.log("game over buddy ");

        }
        

    });
}, 500);


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});
