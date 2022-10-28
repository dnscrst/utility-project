const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('after');
                animatedScrollObserver.unobserve(entry.target)

            }
        })
    }
)
export default {
    bind(el) {
        el.classList.add('before');
        animatedScrollObserver.observe(el)

    }
}