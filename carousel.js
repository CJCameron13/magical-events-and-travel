const albania = document.querySelector('#albania')
const algeria = document.querySelector('#algeria')
const bosniaAndHerzegovina = document.querySelector('#bosnia-herzegovina')
const antiguaAndBarbuda = document.querySelector('#antigua-barbuda')
const argentina = document.querySelector('#argentina')
const aruba = document.querySelector('#aruba')
const arrow = document.querySelectorAll('.arrow-icon')

const destinations = [albania, algeria, antiguaAndBarbuda, argentina, aruba, bosniaAndHerzegovina]

arrow.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('heard')
        destinations.forEach((destination) => {
            destination.classList.add('inactive')
        })
        destinations[Math.floor(Math.random()*destinations.length)].classList.remove('inactive')
    })
})