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
        //transformando todo conteúdo css do card em component
        const style = document.createElement("style")
        style.textContent = `
            .card {
                width: 80%;
                -webkit-box-shadow: 7px 4px 22px 3px rgba(0,0,0,0.6);
                -moz-box-shadow: 7px 4px 22px 3px rgba(0,0,0,0.6);
                box-shadow: 7px 4px 22px 3px rgba(0,0,0,0.6);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card_left > p {
                color: rgb(49, 49, 49);
            }
        `

        return style;
    }
}

customElements.define('card-news', CardNews);