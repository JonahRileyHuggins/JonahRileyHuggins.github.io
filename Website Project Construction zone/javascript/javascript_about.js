/*Left click-button java for blurb*/
function myFunction() {
  var scientist = document.getElementById("leftDiv");
  if (scientist.style.display === "none") {
    scientist.style.display = "block";
  } else {
    scientist.style.display = "none";
  }
}
// Move button 5px on click
var leftMove = document.getElementById("leftcontainer");
leftMove.addEventListener('click',function(){
    leftMove.className = leftMove.className + " move";
});

/*Center Click button java blurb*/
function myFunction2() {
  var fiance = document.getElementById("centerDiv");
  if (fiance.style.display === "none") {
    fiance.style.display = "block";
  } else {
    fiance.style.display = "none";
  }
}
// Move button 5px on click
var centerMove = document.getElementById("centercontainer");
centerMove.addEventListener('click',function(){
    centerMove.className = centerMove.className + " move";
});

/*Right Click Button java blurb*/
function myFunction3() {
  var builder = document.getElementById("rightDiv");
  if (builder.style.display === "none") {
    builder.style.display = "block";
  } else {
    builder.style.display = "none";
  }
}
// Move button 5px on click
var rightMove = document.getElementById("rightcontainer");
rightMove.addEventListener('click',function(){
    rightMove.className = rightMove.className + " move";
});