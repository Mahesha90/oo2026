class LibraryItem{
    id: string;
    title: string;
    author: string;
    year: number;

    constructor(id: string, title:string, author:string, year:number){
    //Removes the whitespaces from both ends of the string
    //=== checking whether this is empty after removing spaces
        if(id.trim()==="") throw new Error("ID cannot be emprty");
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getId(): string{return this.id;}
    getTitle(): string{return this.title;}
    getAuthor(): string{return this.author;}
    getYear(): number{return this.year;}
    getSummary(): string{return `[Item] ${this.title}`;}

}

//-------------------------------Book------------------------------------
class Book extends LibraryItem{
    pages: number;
    ISBN: string;

    constructor(id:string, title:string, author:string, year:number, pages:number, ISBN:string
    ){
        super(id, title, author, year);
        if(pages <=0) throw new Error("Pages must be positive");
        this.pages=pages;
        this.ISBN=ISBN;
    }

    getSummary(): string {
        return `[Book] ${this.title} (${this.year})`;
    }
}

//----------------------------DVD---------------------------------------------
class DVD extends LibraryItem{
    duration: number;
    constructor (id: string, title:string, director:string, year:number, duration:number){
        super(id, title, director, year);
        if(duration <=0) throw new Error("Duration must be positive");
        this.duration=duration;
    }

    getSummary(): string {
        return `[DVD] ${this.title} (${this.year})`;
    }
}