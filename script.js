const ang = new rive.Rive({
    src: "ang.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
        ang.resizeDrawingSurfaceToCanvas();
    },
});

const smorai = new rive.Rive({
    src: "smorai.riv",
    canvas: document.getElementById("canvas1"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
        smorai.resizeDrawingSurfaceToCanvas();
    },
});