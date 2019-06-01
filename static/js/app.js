window.onload = ()=> {
    const sections = document.getElementsByTagName('section');
    const btnRunRandomNumber = document.querySelector('input[run-app="random-number"]');
    const btnRunHeadsOrTails = document.querySelector('input[run-app="heads-or-tails"]');

    const sectionRandomNumber = document.getElementsByClassName('random-number')[0];
    const sectionRandomNumberAnswer = document.querySelector('.random-number span.answer');
    const sectionRandomNumber1 = document.querySelectorAll('.random-number input[type="number"]')[0];
    const sectionRandomNumber2 = document.querySelectorAll('.random-number input[type="number"]')[1];
    const sectionRandomNumberBtnGen = document.querySelector('.random-number .btn');

    const sectionHeadsOrTails = document.getElementsByClassName('heads-or-tails')[0];

    btnRunRandomNumber.onmouseup = ()=> {
        if (!isDisplayed(sectionRandomNumber)) {
            hideAll();
            show(sectionRandomNumber);
        }

        runApp('random-number');
    }
    btnRunHeadsOrTails.onmouseup = ()=> {
        if (!isDisplayed(sectionHeadsOrTails)) {
            hideAll();
            show(sectionHeadsOrTails);
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
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
}