window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 50);
});

const projectButtons = document.querySelectorAll('.project-btn');
const modals = document.querySelectorAll('.modal-overlay');
const closeButtons = document.querySelectorAll('.modal-close');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.modal;
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.classList.add('active');
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-overlay');
        modal?.classList.remove('active');
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});