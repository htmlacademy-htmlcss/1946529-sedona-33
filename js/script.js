        let plusButton = document.querySelector('.plus');
        let plusButtonRight = document.querySelector('.plus-right');
        
        let minusButton = document.querySelector('.minus');
        let minusButtonRight = document.querySelector('.minus-right');

        let closeButton = document.querySelector('.close-modal-window');

        let grownupsValue = document.getElementById('grownups');
        let childrenValue = document.getElementById('children');

        let openPopUp = document.querySelector('.choose-date-button');
        let modalWindow = document.querySelector('.modal-window');

        let miniPopUp = document.querySelector('.pop-up-window');
        let infoIcon = document.querySelector('.information-icon');

        // Вызов всплывающего окна

        openPopUp.addEventListener('click', ()=> {
          modalWindow.classList.remove('visually-hidden');
        })

        // Закрываем всплывающее окно

        closeButton.addEventListener('click', ()=> {
          modalWindow.classList.add('visually-hidden');
        })

        // Мини всплывающее окно

        infoIcon.addEventListener('mouseover', ()=> {
            miniPopUp.classList.remove('visually-hidden');
        })

        // Закрываем мини всплывающее окно

        infoIcon.addEventListener('mouseleave', ()=> {
          miniPopUp.classList.add('visually-hidden');
        })

        plusButton.addEventListener('click', ()=> {
          let numberGrownups = Number(grownupsValue.value);
          grownupsValue.value = numberGrownups + 1;
        })

        minusButton.addEventListener('click', ()=> {
          if (grownupsValue.value < 1) {
            grownupsValue.value = 0;
          } else {
            let numberGrownups = Number(grownupsValue.value);
            grownupsValue.value = numberGrownups - 1;
          }
        })

        plusButtonRight.addEventListener('click', ()=> {
          let numberChildren = Number(childrenValue.value);
          childrenValue.value = numberChildren + 1;
        })

        minusButtonRight.addEventListener('click', ()=> {
          if (childrenValue.value < 1) {
            childrenValue.value = 0;
          } else {
            let numberChildren = Number(childrenValue.value);
            childrenValue.value = numberChildren - 1;
          }
        })


        // Рэндж


        let leftRange = document.querySelector('.range-left');
        let rightRange = document.querySelector('.range-right');
        let rangeTrack = document.querySelector('.range-track');
        let rangeTrackActive = document.querySelector('.range-track-active');

        let priceFrom = document.querySelector('.price-from');
        let priceTo = document.querySelector('.price-to');

        priceFrom.value = leftRange.value;
        priceTo.value = rightRange.value;
        rangeTrackActive.style.left = (priceFrom.value / leftRange.max) * 100 + '%';
        rangeTrackActive.style.right = 100 - (priceTo.value / rightRange.max) * 100 + '%';

        let priceDifference = 1000;

        rightRange.addEventListener('click', () => {
          if (priceTo.value - priceFrom.value <= priceDifference) {
            let numberPriceFromValue = parseInt(priceFrom.value);
            rangeTrackActive.style.right = 100 - ((numberPriceFromValue + priceDifference) / rightRange.max) * 100 + '%';
            console.log('change');
          }
        });

        priceFrom.onchange = function() {
          if (priceTo.value-priceFrom.value <= priceDifference) {
            let numberPriceToValue = parseInt(priceTo.value);
            priceFrom.value = numberPriceToValue - priceDifference;
          }
          leftRange.value = priceFrom.value;
          rangeTrackActive.style.left = (priceFrom.value / leftRange.max) * 100 + '%';
        }

        priceTo.onchange = function() {
          if (priceTo.value-priceFrom.value <= priceDifference) {
            let numberPriceFromValue = parseInt(priceFrom.value);
            priceTo.value = numberPriceFromValue + priceDifference;
          }
          rightRange.value = priceTo.value;
          rangeTrackActive.style.right = 100 - (priceTo.value / rightRange.max) * 100 + '%';
        }

        leftRange.addEventListener('input', () => {
          if (rightRange.value - leftRange.value < priceDifference) {
            priceFrom.value = priceTo.value - priceDifference;
            leftRange.value = rightRange.value - priceDifference;
          } else {
            priceFrom.value = leftRange.value; 
            rangeTrackActive.style.left = (priceFrom.value / leftRange.max) * 100 + '%';
          }
        });

        rightRange.addEventListener('input', () => {
          let numberPriceFromValue = parseInt(priceFrom.value);
          let numberLeftRangeValue = parseInt(leftRange.value);
          if (rightRange.value - leftRange.value < priceDifference) {
            priceTo.value = numberPriceFromValue + priceDifference;
            rightRange.value = numberLeftRangeValue + priceDifference;
          } else {
            priceTo.value = rightRange.value; 
            rangeTrackActive.style.right = 100 - (priceTo.value / rightRange.max) * 100 + '%';
          }
        });