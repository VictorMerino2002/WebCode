class File {
    input
    output

    constructor(input,output) {
        this.input = document.getElementById(input)
        this.output = document.getElementById(output)

        this.input.addEventListener('input', () => this.updateOutput())
    }

    updateOutput() {
        this.output.textContent = this.input.value
        Prism.highlightElement(this.output)
    }
}