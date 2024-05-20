class Preview {

    html

    css

    javascript

    preview

    constructor() {
        this.html = new File('html-code-in','html-code-out')
        this.css = new File('css-code-in','css-code-out')
        this.javascript = new File('js-code-in','js-code-out')
        this.preview = document.getElementById('preview')

        this.html.input.addEventListener('input',() => this.updatePreview())
        this.css.input.addEventListener('input',() => this.updatePreview())
        this.javascript.input.addEventListener('input',() => this.updatePreview())
    }

    updatePreview() {
        this.preview.innerHTML = '';

        const htmlContent = document.createElement('div')
        htmlContent.innerHTML = this.html.input.value;
        this.preview.appendChild(htmlContent)

        const styleElement = document.createElement('style')
        styleElement.textContent = this.addScopeToCSS(this.css.input.value, '#preview')
        this.preview.appendChild(styleElement)

        const scriptElement = document.createElement('script')
        scriptElement.textContent = `
            (() => {
                ${this.javascript.input.value}
            })()
        `
        this.preview.appendChild(scriptElement)
    }

    addScopeToCSS(css, scope) {
        return css.split('}')
                  .map(rule => rule.trim() ? `${scope} ${rule}}` : '')
                  .join(' ')
    }
}

new Preview()