// recopilar controles
const track = document.getElementById("track");
const slides = document.querySelectorAll(".slider__card");
const prev = document.querySelector(".slider__btn--prev");
const next = document.querySelector(".slider__btn--next");
const dots = document.querySelectorAll(".slider__dot");

// asignar click a dots existentes
dots.forEach((dot, i) => {
    dot.onclick = () => {
        track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    };
});

// boton siguiente
next.onclick = () =>
    track.scrollBy({ left: track.clientWidth, behavior: "smooth" });

// boton atrás
prev.onclick = () =>
    track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });

// sincronizar dots con scroll real
track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);

    dots.forEach((d) => d.classList.remove("slider__dot--active"));
    dots[i]?.classList.add("slider__dot--active");
});
