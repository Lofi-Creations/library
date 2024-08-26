

function book(title,author,pages, read){
    this.title= title;
    this.author= author;
    this.pages=pages;
    this.read= read;
}
const hobbit= new book("hobbit","tolkien","500",false)
const mine= new book("saad","ammal","500",true)
const myLibrary= [hobbit,mine]
const container= document.querySelector(".main")

function addBook(){
    for ( const b of myLibrary){
        const card=document.createElement("div");
        card.classList.add("book");

        const title=document.createElement("h2");
        title.textContent=b.title;
        card.appendChild(title);
        
        const author=document.createElement("p");
        author.textContent="author: "+b.author;
        card.appendChild(author)

        const pages=document.createElement("p")
        pages.textContent="pages: "+b.pages
        card.appendChild(pages)

        const read=document.createElement("p")
        if (b.read=true){
            read.textContent="Read"
        }
        else{
            read.textContent="Unread"
        }
        card.appendChild(read)
        container.appendChild(card);
    }
}
addBook();
