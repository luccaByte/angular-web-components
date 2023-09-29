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

        // transformando o resto do conteúdo do card_left em component 
        const autor = document.createElement("span");
        const linkTittle = document.createElement("a");
        const newsContent = document.createElement("p");

        // pendurando os components criados do card_left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTittle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement ("div");
        cardRight.setAttribute("class", "card_right");

        // transformando o conteúdo do card_right em component 
        const newsImage = document.createElement("img");

        // pendurando os components criados do card_right
        cardRight.appendChild(newsImage);

        // prendendo os dois componentes cardLeft e cardRight no component pai, no caso: componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define('card-news', CardNews);