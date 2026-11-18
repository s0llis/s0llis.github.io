const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

let current = 0;
let resizing = false;
let resizeTimer;

slider.addEventListener('scroll', () => {
    if (resizing) return;
    current = Math.round(slider.scrollLeft / slider.clientWidth);
}, { passive: true });

new ResizeObserver(() => {
    resizing = true;
    slider.scrollTo({ left: current * slider.clientWidth, behavior: 'instant' });
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => (resizing = false), 100);
}).observe(slider);

function scrollSliders(direction) {
    const count = slider.children.length;
    current = (current + direction + count) % count;
    slider.scrollTo({ left: current * slider.clientWidth, behavior: 'smooth' });
}

prev.addEventListener('click', () => scrollSliders(-1));
next.addEventListener('click', () => scrollSliders(1));