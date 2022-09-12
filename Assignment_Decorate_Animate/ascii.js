(function () {
  "use strict" 
  window.onload = function () {
    let keyframes;
    let index = 0;
    let speed = 250;
    let timer;
    let started = false;

    function setSpeed() {
      speed = document.getElementById("turbo").checked ? 50 : 250;
    }
    document.getElementById("animation").onchange = function () {
      document.getElementById("text-area").value =
        ANIMATIONS[document.getElementById("animation").value];
    };
    document.getElementById("fontsize").onchange = function () {
      document.getElementById("text-area").style.fontSize =
        document.getElementById("fontsize").value;
    };
    document.getElementById("turbo").onchange = function () {
      if (!started) return;
      clearInterval(timer);
      setSpeed();
      startAnimation();
    };
    document.getElementById("start").onclick = function () {
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
      document.getElementById("animation").disabled = true;
      setSpeed();
      keyframes = document.getElementById("text-area").value.split("=====\n");
      startAnimation();
      started = true;
    };

    function startAnimation() {
      timer = setInterval(function () {
        document.getElementById("text-area").value =
          keyframes[index++ % keyframes.length];
      }, speed);
    }

    document.getElementById("stop").onclick = function () {
      clearInterval(timer);
      document.getElementById("animation").disabled = false;
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
      document.getElementById("text-area").value = keyframes.join("=====\n");
      index = 0;
      started = false;
    };
  };
})();
