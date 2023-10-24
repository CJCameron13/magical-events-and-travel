const cruiseTab = document.querySelector('#cruise-tab')
const airTab = document.querySelector('#air-tab')
const hotelTab = document.querySelector('#hotel-tab')
const cruiseSearch = document.querySelector('.cruise-search')
const airSearch = document.querySelector('.air-search')
const hotelSearch = document.querySelector('.hotel-search')

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
})

oneWay.addEventListener('click', () => {
    roundTrip.classList.remove('active-type')
    multiCity.classList.remove('active-type')
    oneWay.classList.add('active-type')
    returnTrip.forEach((box) => {
        box.classList.add('inactive')
    })
})

multiCity.addEventListener('click', () => {
    roundTrip.classList.remove('active-type')
    oneWay.classList.remove('active-type')
    multiCity.classList.add('active-type')
})
