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
        //Adicionando "By" automaticamente na área de span ou "By anonymous" caso o autor não adicione seu nome
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        // pendurando os components criados do card_left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement ("div");
        cardRight.setAttribute("class", "card_right");

        // transformando o conteúdo do card_right em component 
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/fotoDefault.jpg";
        newsImage.alt = "Foto da notícia: Darh Vader";

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