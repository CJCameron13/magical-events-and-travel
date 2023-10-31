const cruiseTab = document.querySelector('#cruise-tab')
const airTab = document.querySelector('#air-tab')
const hotelTab = document.querySelector('#hotel-tab')
const cruiseSearch = document.querySelector('.cruise-search')
const airSearch = document.querySelector('.air-search')
const hotelSearch = document.querySelector('.hotel-search')
const roundTrip = document.querySelector('#round-trip')
const oneWay = document.querySelector('#one-way')
const multiCity = document.querySelector('#multi-city')
const returnTrip = document.querySelectorAll('.return-trip')
const selectionGroupOne = document.querySelector('#selection-group-one')
const selectionGroupTwo = document.querySelector('#selection-group-two')

cruiseTab.addEventListener('click', () => {
    airSearch.classList.add('inactive')
    cruiseSearch.classList.remove('inactive')
    cruiseTab.classList.add('selected')
    airTab.classList.remove('selected')
})

airTab.addEventListener('click', () => {
    cruiseSearch.classList.add('inactive')
    airSearch.classList.remove('inactive')
    cruiseTab.classList.remove('selected')
    airTab.classList.add('selected')
})

/* Air search functions */

roundTrip.addEventListener('click', () => {
    roundTrip.classList.add('active-type')
    oneWay.classList.remove('active-type')
    multiCity.classList.remove('active-type')
    returnTrip.forEach((box) => {
        box.classList.remove('inactive')
    })
    selectionGroupOne.classList.remove('inactive')
    selectionGroupTwo.classList.remove('inactive')
})

oneWay.addEventListener('click', () => {
    roundTrip.classList.remove('active-type')
    multiCity.classList.remove('active-type')
    oneWay.classList.add('active-type')
    returnTrip.forEach((box) => {
        box.classList.add('inactive')
    })
    selectionGroupOne.classList.remove('inactive')
    selectionGroupTwo.classList.remove('inactive')
})

multiCity.addEventListener('click', () => {
    roundTrip.classList.remove('active-type')
    oneWay.classList.remove('active-type')
    multiCity.classList.add('active-type')
    selectionGroupOne.classList.add('inactive')
    selectionGroupTwo.classList.add('inactive')
})
