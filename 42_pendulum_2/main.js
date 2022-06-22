const _clear = () => {
    delete main
}

const Main = {
    canvas: document.getElementById('arm_canvas'),
    canvas_2: document.getElementById('draw_canvas'),
    context: null,
    context_2: null,
    width: 0,
    height: 0,
    arm: null,
    arm_2: null,
    arm_3: null,
    angle: 0,
    launch: false,

    init: function(Arm) {
        this.context = this.canvas.getContext('2d')
        this.context_2 = this.canvas_2.getContext('2d')
        this.width = this.canvas.width = this.canvas_2.width = window.innerWidth
        this.height = this.canvas.height = this.canvas_2.height = window.innerHeight
        this.arm = Arm.create(this.width / 2, this.height / 2, 100, 0)
        this.arm_2 = Arm.create(this.arm.getEndX(), this.arm.getEndY(), 100, 0)
        this.arm_3 = Arm.create(this.arm_2.getEndX(), this.arm_2.getEndY(), 100, 0)
        this.arm_2.parent = this.arm
        this.arm_3.parent = this.arm_2
    },

    create: function(Arm) {
        let obj = Object.create(this)
        obj.init(Arm)
        return obj
    },

    update: function(func) {
        func(this.context, this.context_2, this.width, this.height, this.launch, this.angle, this.arm, this.arm_2, this.arm_3)
        this.angle += .05
    },

    clear: function() {
        console.log("je suis la méthode clear")
        this.context_2.clearRect(0, 0, this.width, this.height)
    }
}

const main = Main.create(Arm)

window.onload = function() {
    main.update(draw_it)
    requestAnimationFrame(window.onload)
}