const number = document.querySelector(".number");
const stroke = document.querySelector("circle");
let counter = 0;
let circleFiller = 472;
setInterval(function () {
    if (counter === 65) {
        clearInterval();
    } else {
        counter++;
        circleFiller -= 4.72;
        stroke.style.strokeDashoffset = circleFiller;
        number.innerText = counter + "%";
    }
}, 20);
