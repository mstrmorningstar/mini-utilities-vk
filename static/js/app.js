window.onload = ()=> {
    const sections = document.getElementsByTagName('section');
    const headerTitle = document.querySelector('header h3');
    const sectionCardGroup = document.getElementsByClassName('card-group')[0];
    const btnBack = document.getElementById('btn-back');
    const btnRunRandomNumber = document.querySelector('input[run-app="random-number"]');
    const btnRunHeadsOrTails = document.querySelector('input[run-app="heads-or-tails"]');

    const sectionRandomNumber = document.getElementsByClassName('random-number')[0];
    const sectionRandomNumberAnswer = document.querySelector('.random-number span.answer');
    const sectionRandomNumber1 = document.querySelectorAll('.random-number input[type="number"]')[0];
    const sectionRandomNumber2 = document.querySelectorAll('.random-number input[type="number"]')[1];
    const sectionRandomNumberBtnGen = document.querySelector('.random-number .btn');

    const sectionHeadsOrTails = document.getElementsByClassName('heads-or-tails')[0];
    const sectionHeadsOrTailsAnswer = document.querySelector('.heads-or-tails span.answer');
    const sectionHeadsOrTailsBtn = document.querySelector('.heads-or-tails .btn');

    btnBack.onmouseup = ()=> {
        hideAll();
        show(sectionCardGroup);
        hide(btnBack);
    }

    btnRunRandomNumber.onmouseup = ()=> {
        if (!isDisplayed(sectionRandomNumber)) {
            hideAll();
            show(sectionRandomNumber);
            show(btnBack);
            headerTitle.innerHTML = 'Генератор случайных чисел';
        }
        runApp('random-number');
    }
    btnRunHeadsOrTails.onmouseup = ()=> {
        if (!isDisplayed(sectionHeadsOrTails)) {
            hideAll();
            show(sectionHeadsOrTails);
            show(btnBack);
            headerTitle.innerHTML = 'Орел или Решка';
        }
        runApp('heads-or-tails');
    }

    function show(element) {
        element.style.display = 'block';
    }

    function hide(element) {
        element.style.display = 'none';
    }

    function hideAll() {
        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            hide(element);
        }
        headerTitle.innerHTML = 'Мини утилиты';
    }

    function isDisplayed(element) {
        if (element.style.display == 'block') {
            return true;
        }
        if (element.style.display == 'none') {
            return false;
        }
    }

    function runApp(runAppName) {
        if (runAppName.toLowerCase() == 'random-number') {
            sectionRandomNumberBtnGen.onmouseup = ()=> {
                let min = sectionRandomNumber1.value;
                let max = sectionRandomNumber2.value;

                let answer = randomInteger(min, max);
                sectionRandomNumberAnswer.innerHTML = answer;
            }
        }

        if (runAppName.toLowerCase() == 'heads-or-tails') {
            sectionHeadsOrTailsBtn.onmouseup = ()=> {
                let answer = Math.floor(Math.random() * 2);
                if (answer) {
                    sectionHeadsOrTailsAnswer.innerHTML = 'Орел';
                    console.log('Орел');
                } else {
                    sectionHeadsOrTailsAnswer.innerHTML = 'Решка';
                    console.log('Решка');
                }
            }
        }
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
}