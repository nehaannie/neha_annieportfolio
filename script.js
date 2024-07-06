
const contactButton = document.querySelector('button');
contactButton.addEventListener('click', () => {
    //
});

const boxes = document.querySelectorAll('.box');
        let currentBox = 0;

        function nextBox() {
            boxes[currentBox].classList.remove('active');
            currentBox = (currentBox + 1) % boxes.length;
            boxes[currentBox].classList.add('active');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextBox();
            }
        });

        boxes[currentBox].classList.add('active');