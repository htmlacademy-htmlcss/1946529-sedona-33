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