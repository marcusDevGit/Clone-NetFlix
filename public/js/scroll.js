const setupScrool = () => {
    const container = [...document.querySelectorAll(".movie-container")]

    const nextBtn = [...document.querySelectorAll(".next-btn")]
    const prevBtn = [...document.querySelectorAll(".pre-btn")]

    container.forEach((item, i) => {
        let containerDimencion = item.getBoundingClientRect()
        let containerWidth = containerDimencion.width

        nextBtn[i].addEventListener("click", () => {
            item.scrollLeft += containerWidth
        })

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        })
    })
}