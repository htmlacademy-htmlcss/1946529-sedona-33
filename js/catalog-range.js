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
                  // console.log(priceTo.value-priceFrom.value);
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