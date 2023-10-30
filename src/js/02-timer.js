import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import { Notify } from "notiflix";

startBtn = document.querySelector('[data-start]')
datePicker = document.querySelector("#datetime-picker");
dateDays = document.querySelector("[data-days]");
dateHours = document.querySelector("[data-hours]");
dateMinutes = document.querySelector("[data-minutes]");
dateSeconds = document.querySelector("[data-seconds]");


startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {


        
        if (selectedDates[0] < Date.now()) {
            Notify.failure('Please choose a date in the future')
        } else {

            startBtn.disabled = false;
            Notify.success('Your date is correct');
        }
        startBtn.addEventListener('click', ()=>{
            const timerID = setInterval(()=>{
                const ms = selectedDates[0].getTime() - Date.now();

                  dateDays.textContent = `${convertMs(ms).days}`;
                  dateHours.textContent = `${convertMs(ms).hours}`;
                  dateMinutes.textContent = `${convertMs(ms).minutes}`;
                 dateSeconds.textContent = `${convertMs(ms).seconds}`;
                
            

            },1000)
        })

    },
  };

  flatpickr(datePicker, options);




function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero( Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
 
function addLeadingZero(value) {
return String(value).padStart(2, 0);

}

