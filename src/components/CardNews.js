class CardNews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        // div pai, ou no caso a div principal
        const componentRoot = document.createElement ("div");
        // atribuindo 
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement ("div");
        cardLeft.setAttribute("class", "card_left");

        const cardRight = document.createElement ("div");
        cardRight.setAttribute("class", "card_right");

        // prendendo os dois componentes cardLeft e cardRight no component pai, no caso: componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define('card-news', CardNews);