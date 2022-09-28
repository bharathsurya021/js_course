const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')
const start = document.querySelector('.btn-start')
const setRotation = function (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
const setClock = function () {
    const dateNow = new Date()
    const secondArc = dateNow.getSeconds() / 60
    const minArc = (secondArc + dateNow.getMinutes()) / 60
    const hoursArc = (minArc + dateNow.getHours()) / 12
    setRotation(secHand, secondArc)
    setRotation(minHand, minArc)
    setRotation(hourHand, hoursArc)
}
setInterval(setClock, 1000)


