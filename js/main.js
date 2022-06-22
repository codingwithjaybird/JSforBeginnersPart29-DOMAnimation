// DOM Animation 

let animateBtn = document.getElementById('animate-btn');

animateBtn.onclick = function () {
  let position = 0;
  let penguin = document.getElementById('animate-penguin');
  let interval = setInterval(animation, 5);

  // Inner function will animate the penguin
  function animation () {
    // If the penguin has reached the end (475-75)
    if (position == 400){
      clearInterval(interval);
    } else {
      // Increment position++;
      position++;
      penguin.style.left = position + "px";
      penguin.style.top = position + "px";

    }
  }

}