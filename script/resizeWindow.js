const resizable = document.querySelector('.resizable')
const resizer = document.querySelector('.resizer')

resizer.addEventListener('mousedown', (e) => {
    e.preventDefault()

    const startX = e.clientX
    const startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10)
    const minWidth = 350
    const maxWidth = window.innerWidth * 0.87

    const mouseMoveHandler = (e) => {
        let newWidth = startWidth + e.clientX - startX
        if (newWidth < minWidth) {
            newWidth = minWidth
        } else if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }
        resizable.style.width = newWidth + 'px'
    }

    const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
})
