//Esmelealem Mihretu

window.onload = pageLoad;

function pageLoad() {
//   let clicked = false;
  let button = document.getElementById('start');
  let numbers = parseInt(document.getElementById("circles").value);
  
  button.addEventListener('click', function () {
    clicked = true;
 
    let radius = parseInt(document.getElementById('width').value);
    let growthAmount = parseInt(document.getElementById('growth').value);
    let interval = parseInt(document.getElementById('interval').value);
  
    setInterval(function () {
      document.getElementById('circle').style.width = radius + 'px';
      document.getElementById('circle').style.height = radius + 'px';
      document.getElementById('circle').style.borderRadius = radius + 'px';
      radius += growthAmount;
    }, interval);
    setInterval(function () {
      for (let i = 0; i < numbers.length; i++) {
        document.getElementById('circle').style.width = radius + 'px';
        document.getElementById('circle').style.height = radius + 'px';
        document.getElementById('circle').style.borderRadius = radius + 'px';
        radius += growthAmount; 
      }  
    }, interval);

    let circle = document.getElementById('circle');
    circle.addEventListener('click', () => {
      circle.remove();
    });
  });

}
