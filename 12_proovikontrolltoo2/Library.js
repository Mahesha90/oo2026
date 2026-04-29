var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryItem = /** @class */ (function () {
    function LibraryItem(id, title, author, year) {
        //Removes the whitespaces from both ends of the string
        //=== checking whether this is empty after removing spaces
        if (id.trim() === "")
            throw new Error("ID cannot be emprty");
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    LibraryItem.prototype.getId = function () { return this.id; };
    LibraryItem.prototype.getTitle = function () { return this.title; };
    LibraryItem.prototype.getAuthor = function () { return this.author; };
    LibraryItem.prototype.getYear = function () { return this.year; };
    LibraryItem.prototype.getSummary = function () { return "[Item] ".concat(this.title); };
    return LibraryItem;
}());
//-------------------------------Book------------------------------------
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, author, year, pages, ISBN) {
        var _this = _super.call(this, id, title, author, year) || this;
        if (pages <= 0)
            throw new Error("Pages must be positive");
        _this.pages = pages;
        _this.ISBN = ISBN;
        return _this;
    }
    Book.prototype.getSummary = function () {
        return "[Book] ".concat(this.title, " (").concat(this.year, ")");
    };
    //This method convert the Book object into a text line (for saving)
    //Here each property is seperated by | so we can read it easily later
    Book.prototype.toFillLine = function () {
        return "[Book]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|(").concat(this.year, ")|").concat(this.pages, "|").concat(this.ISBN);
    };
    return Book;
}(LibraryItem));
//----------------------------DVD---------------------------------------------
var DVD = /** @class */ (function (_super) {
    __extends(DVD, _super);
    function DVD(id, title, director, year, duration) {
        var _this = _super.call(this, id, title, director, year) || this;
        if (duration <= 0)
            throw new Error("Duration must be positive");
        _this.duration = duration;
        return _this;
    }
    DVD.prototype.getSummary = function () {
        return "[DVD] ".concat(this.title, " (").concat(this.year, ")");
    };
    DVD.prototype.toFillLine = function () {
        return "[DVD]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|(").concat(this.year, ")|").concat(this.duration);
    };
    return DVD;
}(LibraryItem));
//---------------------------------Library-------------------
//Manage all the items
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    } //starts with a empty list
    //add a new item to the library
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Library.prototype.getAll = function () {
        return this.items;
    };
    Library.prototype.toText = function () {
        //map is an array method, it takes each item and transform it
        //i: each item in the array
        //i.toFillLine converts object-string
        return this.items.map(function (i) { return i.toFillLine(); }).join("\n");
        //\n mean new line
        // join("\n") : mean join everything with line breaks
    };
    return Library;
}());
var item1 = new LibraryItem("1", "Generic item", "unknown", 2020);
console.log(item1);
var book1 = new Book("2B", "Harry Potter", "J.K rowling", 1990, 300, "334445");
var book2 = new Book("3B", "The hobbit", "J.R.R Tolkien", 1937, 300, "554445");
console.log(book1);
console.log(item1.getSummary());
console.log(book1.getSummary());
console.log(book1.toFillLine());
var lib = new Library();
lib.addItem(book1);
lib.addItem(book2);
console.log(lib.toText());
