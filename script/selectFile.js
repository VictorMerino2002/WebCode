const htmlSection = document.getElementById('html')
const cssSection = document.getElementById('css')
const javascriptSection = document.getElementById('javascript')

const htmlFileBtn = document.getElementById('html-file-btn')
const cssFileBtn = document.getElementById('css-file-btn')
const javascriptFileBtn = document.getElementById('javascript-file-btn')

let selectedFile = {
    btn : htmlFileBtn,
    section : htmlSection
}

htmlFileBtn.addEventListener('click',() => changeSelectedFile(htmlFileBtn,htmlSection))
cssFileBtn.addEventListener('click',() => changeSelectedFile(cssFileBtn,cssSection))
javascriptFileBtn.addEventListener('click',() => changeSelectedFile(javascriptFileBtn,javascriptSection))


const changeSelectedFile = (btn,section,caret) => {
    selectedFile.btn.classList.remove('selected-file')
    selectedFile.section.classList.remove('selected-file')

    selectedFile.btn = btn
    selectedFile.section = section

    selectedFile.btn.classList.add('selected-file')
    selectedFile.section.classList.add('selected-file')

    const code = section.children[1]
    code.focus()
}