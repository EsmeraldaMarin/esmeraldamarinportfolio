let c = document.getElementById("canvas");
let colors = ["#ff80629c", "#f1b1709c", "#5bcef29c"];


function animation(c, colors) {
    let ctx = c.getContext("2d");

    function resize() {
        let box = c.getBoundingClientRect();
        c.width = box.width;
        c.height = box.height;
    }


    function Box() {
        this.half_size = Math.floor((Math.random() * 30) + 1);
        this.x = Math.floor((Math.random() * c.width) + 1);
        this.y = Math.floor((Math.random() * c.height) + 1);
        this.r = Math.random() * Math.PI;
        this.shadow_length = 2000;
        this.color = colors[Math.floor((Math.random() * colors.length))];

        this.getDots = function () {

            let full = (Math.PI * 2) / 4;


            let p1 = {
                x: this.x + this.half_size * Math.sin(this.r),
                y: this.y + this.half_size * Math.cos(this.r)
            };
            let p2 = {
                x: this.x + this.half_size * Math.sin(this.r + full),
                y: this.y + this.half_size * Math.cos(this.r + full)
            };
            let p3 = {
                x: this.x + this.half_size * Math.sin(this.r + full * 2),
                y: this.y + this.half_size * Math.cos(this.r + full * 2)
            };
            let p4 = {
                x: this.x + this.half_size * Math.sin(this.r + full * 3),
                y: this.y + this.half_size * Math.cos(this.r + full * 3)
            };

            return {
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4
            };
        }
        this.rotate = function () {
            let speed = (60 - this.half_size) / 20;
            this.r += speed * 0.002;
            this.x += speed;
            this.y += speed;
        }
        this.draw = function () {
            let dots = this.getDots();
            ctx.beginPath();
            ctx.moveTo(dots.p1.x, dots.p1.y);
            ctx.lineTo(dots.p2.x, dots.p2.y);
            ctx.lineTo(dots.p3.x, dots.p3.y);
            ctx.lineTo(dots.p4.x, dots.p4.y);
            ctx.fillStyle = this.color;
            ctx.fill();


            if (this.y - this.half_size > c.height) {
                this.y -= c.height + 200;
            }
            if (this.x - this.half_size > c.width) {
                this.x -= c.width + 200;
            }
        }

    }

    let boxes = [];

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].rotate();
        };
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].draw();
        };
        requestAnimationFrame(draw);
    }

    resize();
    draw();

    while (boxes.length < 60) {
        boxes.push(new Box());
    }

    window.onresize = resize;
}
animation(c, colors)
let parentSkill = document.querySelector('.clipDiv');
let clon = c.cloneNode(true)
parentSkill.insertBefore(clon, parentSkill.children[0])
let newColors = ["#ff8062", "#f1b170", "#0c0c41"];
animation(clon, newColors)

