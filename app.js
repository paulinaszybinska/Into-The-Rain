const myImage = new Image();
myImage.src = "data:image/jpeg;base64,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";


myImage.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 601;
    canvas.height = 401;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height); 
    
    let particlesArray = [];
    const numberOfParticles = 1000;
    
    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 2;
            this.size = Math.random() * 0.5 + 0.7;
        }
        update(){
            this.y += this.velocity;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = "lightblue";
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height); 
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});