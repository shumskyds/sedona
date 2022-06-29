let offerButtonExpand = document.querySelector('.offer-button-expand');
let offerForm = document.querySelector('.offer-form');

offerButtonExpand.addEventListener('click', function (evt) {
    offerForm.classList.toggle('offer-form-hidden');
    offerForm.classList.add('offer-form-expand');
});

