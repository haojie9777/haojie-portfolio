// animate components on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');

        } else {
            entry.target.classList.remove('opacity-100');
        }

    })

});

const hiddenElements = document.querySelectorAll('.to-animate');
hiddenElements.forEach((el) => observer.observe(el));