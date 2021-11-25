let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
btn.addEventListener("click", function(e){
   const events = e.currentTarget.classList;
  if (events.contains('btn-decrease')) {
      count--;
  }
  else if (events.contains('btn-increase'))
  {
      count++;
  }
  else 
  {
      count = 0;
  }
  if (count>0) {
    value.style.color = "green";
  }
  if (count<0) {
    value.style.color = "red";
  }
  if (count===0) {
    value.style.color = "black"; 
  }
  value.textContent = count;
});

} );