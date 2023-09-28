class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})

        //base do component: <h1>Lucas</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Minha notícia"

        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico)