let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");
let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date");
let mode = document.querySelector(".mode");
let circle = document.querySelector(".circle");

mode.addEventListener("click", () => {
    mode.classList.toggle("m-active");
    circle.classList.toggle("c-active");
    document.querySelector("#container").classList.toggle("dark");
});

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const setTime = function () {
    let now = new Date();
    let hour = now.getHours();
    let newHour = now.getHours() % 12;
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let [day, month, date, year] = `${now}`.split(" ");
    let ampm = hour < 12 ? "AM" : "PM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(newHour, 0, 11, 0,360) + scale(minute, 0, 59, 0, 30)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeEl.textContent = `${newHour === 0 ? "12" : newHour}:${minute < 10 ? "0"+minute : minute} ${ampm}`;
    dateEl.textContent = `${day}... ${month} ${date}, ${year}`;
};

setInterval(setTime, 1000);