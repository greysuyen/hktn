let text1 = document.getElementById("mottoLink");
let home = document.getElementById("intro");
let home1 = document.getElementById("intro-1");
let par = document.getElementById("par1");
let about = document.getElementById("about-us");

about.onclick = function () {
    home.classList.add("fade-out");
    home1.classList.add("fade-out");
    par.classList.add("fade-out");

    setTimeout(function () {
        // Clear all previous text
        home.textContent = "";
        home1.textContent = "";
        par.textContent = "";

        par.textContent = `We are dedicated and hardworking students who consistently strive to learn, improve, and achieve our goals.`;
        
        // Apply styles to the new text
        par.style.color = "goldenrod";
        par.style.lineHeight = "1";
        par.style.fontSize = "45px";
        par.style.fontWeight = "10";
        par.style.textAlign = "center";
        par.style.textShadow = "1px 5px 5px gray";

        // Transition background
        document.querySelector(".home").style.transition = "background 1s ease-in-out, background-position 1s ease-in-out";
        document.querySelector(".home").style.background = "transparent";

        setTimeout(function () {
            document.querySelector(".home").style.background = 'url("bgg12_enhanced.png") no-repeat';
            document.querySelector(".home").style.backgroundPosition = "85% center";
            document.querySelector(".home").style.backgroundSize = "50% 95%";

            setTimeout(function () {
                document.querySelector(".home").style.backgroundPosition = "right center";
            }, 50);
        }, 150);

        // Restore fade-in classes
        home.classList.remove("fade-out");
        home1.classList.remove("fade-out");
        par.classList.remove("fade-out");

        home.classList.add("fade-in");
        home1.classList.add("fade-in");
        par.classList.add("fade-in");
    }, 500);
};

text1.onclick = function () {
    home.classList.add("fade-out");
    home1.classList.add("fade-out");
    par.classList.add("fade-out");

    setTimeout(function () {
        home.textContent = "";
        home1.textContent = "Building the future, one innovative solution at a time, shaping a better tomorrow through technology.";
        par.textContent = ""; // Ensure this is cleared first
        
        home1.style.fontSize = "45px";
        home1.style.color = "goldenrod";
        home1.style.fontWeight = "10";
        home1.style.textAlign = "center";
        home1.style.textShadow = "1px 5px 5px gray";

        document.querySelector(".home").style.transition = "background 1s ease-in-out, background-position 1s ease-in-out";
        document.querySelector(".home").style.background = "transparent";

        setTimeout(function () {
            document.querySelector(".home").style.background = 'url("3bbg3.png") no-repeat';
            document.querySelector(".home").style.backgroundPosition = "85% center";
            document.querySelector(".home").style.backgroundSize = "50% 95%";

            setTimeout(function () {
                document.querySelector(".home").style.backgroundPosition = "right left";
            }, 50);
        }, 150);

        home.classList.remove("fade-out");
        home1.classList.remove("fade-out");
        par.classList.remove("fade-out");

        home.classList.add("fade-in");
        home1.classList.add("fade-in");
        par.classList.add("fade-in");
    }, 500);
};

document.getElementById("mottoLink").addEventListener("click", function (event) {
    event.preventDefault();
});

document.getElementById("others").addEventListener("click", function () {
    const menu = document.querySelector(".other-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".other-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".other-menu").style.display = "none";
    });
});

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
const pupils = [
    document.getElementById('pupil1'),
    document.getElementById('pupil2')
  ];

  document.addEventListener('mousemove', (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;

    pupils.forEach(pupil => {
      const eyeRect = pupil.parentElement.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
      const distance = Math.min(eyeRect.width / 4, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY));

      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
  });