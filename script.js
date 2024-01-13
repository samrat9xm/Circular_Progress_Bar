const number = document.querySelector(".number");
let counter = 0;

setInterval(function () {
    if (counter == 65) {
        clearInterval();

    } else {
        counter++;
        number.innerText = counter + "%";
    }

}, 30)
