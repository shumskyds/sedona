const mapButtons = document.querySelectorAll('.map__button');

let activeMapButton = null;

function toggleActive() {
    if (activeMapButton) {
        activeMapButton.classList.remove('map__button_current');
    }
    this.classList.add('map__button_current');
    activeButton = this;
}

mapButtons.forEach(filter => filter.addEventListener('click', toggleActive));
