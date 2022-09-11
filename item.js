const child = document.querySelector(".child")

const cb = function (entries, observe) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("inview")
        } else {
            console.log("outview")
        }
    });
}

const io = new IntersectionObserver(cb)
io.observe(child)