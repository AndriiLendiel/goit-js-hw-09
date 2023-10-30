function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




body = document.querySelector('body');
startBtn = document.querySelector('[data-start]');
stopBtn = document.querySelector('[data-stop]');
let timerID = null;



stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', ()=>{
startBtn.setAttribute('disabled', true);
stopBtn.removeAttribute('disabled')

    timerID = setInterval(()=>{
        const bgdColor = getRandomHexColor();
        body.style.backgroundColor = bgdColor;
        console.log(bgdColor);
    }, 1000)

});

stopBtn.addEventListener('click', ()=>{
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
    clearInterval(timerID)
})
