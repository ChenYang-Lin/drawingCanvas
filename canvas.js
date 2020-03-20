window.addEventListener("load", () => {
    const cvs = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables
    let painting = false;

    function startPosition() {
        painting = true;
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        // ctx.strokeStyle = "red";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});