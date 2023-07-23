import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const button = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');
const inputElem = document.querySelector('#datetime-picker');

button.disabled = true;
let selectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] - new Date() < 0) {
            button.disabled = true;
            inputElem.disabled = true;
            Notiflix.Report.failure("Date should be in the future!");
        } else {
            selectedDate = selectedDates[0];
            button.disabled = false;
            inputElem.disabled = false;
            Notiflix.Report.success("Start!");
        }
    },
};
flatpickr(inputElem, options);
let nIntervId;
button.addEventListener('click', () => {

    nIntervId = setInterval(() => {
        button.disabled = true;
        inputElem.disabled = true;
        const currentDate = new Date();
        let timer = convertMs(selectedDate - currentDate)
        if (selectedDate < currentDate) {
            clearInterval(nIntervId);
            return;
        }
        daysElem.innerText = timer.days;
        hoursElem.innerText = timer.hours;
        minutesElem.innerText = timer.minutes;
        secondsElem.innerText = timer.seconds;
    }, 1000)
})
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    ;

    return { days, hours, minutes, seconds };
}
