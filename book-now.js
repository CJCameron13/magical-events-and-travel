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