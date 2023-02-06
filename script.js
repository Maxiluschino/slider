const slidesList = document.querySelectorAll('.slide');

function toggleActiveSlide(slide) {
    slide.classList.toggle('slide_active');
}
slidesList.forEach((slide) => {
    slide.addEventListener('click', () => toggleActiveSlide(slide))
    })
