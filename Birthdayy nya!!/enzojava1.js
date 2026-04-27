function createGlow() {
    const glow = document.createElement("div");
    glow.classList.add("glow");

    glow.style.left = Math.random() * window.innerWidth + "px";
    glow.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 8000);
}

setInterval(createGlow, 400);

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 800);