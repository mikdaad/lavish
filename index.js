var numberOfDrumButtons = document.querySelectorAll(".card").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".card")[i].addEventListener("click", function() {

    makeSound();


  });

};
var tom1 = new Audio("Don Toliver - No Idea [Official Music Video].mp3");
tom1.play();

document.querySelectorAll(".card")[0].addEventListener("click", function() {

  var tom1 = new Audio("sounds/Don Toliver - No Idea [Official Music Video].mp3");
  tom1.play();
}
)
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});



