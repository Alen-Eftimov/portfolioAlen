const easeInOutExpo = (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 0.5 * (-Math.pow(2, -20 * t + 10) + 2);
};

export const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const t = Math.min(timeElapsed / duration, 1);
        const scrollY = startPosition + distance * easeInOutExpo(t);
        
        window.scrollTo(0, scrollY);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

export const handleClick = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'A') {
        const id = target.getAttribute('href')?.replace("#", '');
        const element = document.getElementById(id || '');

        if (element) {
            smoothScroll(element, 2000); 
        }
    }
};

export const handleScrollToTop = () => {
    smoothScroll(document.body, 2000);
};


export const chunkArray = (array, chunkSize) => {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
        array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
};