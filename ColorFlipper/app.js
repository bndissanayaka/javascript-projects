const colors = ["#de362a", "#21a661", "#40228a", "red", "#ecf70c"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    var randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
//get random number between 0 and 4
function getRandomNumber() {
    var random = Math.floor(Math.random() * colors.length);
    return random;

}
