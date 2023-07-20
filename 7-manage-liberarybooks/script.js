function manageBooks(books, command){
    const {type, book} = command;


    if(type ==='add'){
        return[...books, book];
    }else if(type ==='remove'){
        return books.filter(existingBook =>existingBook.title !==book.title);
    }else if(type==='filter'){
        if(typeof book ==='string'){
            return books.filter(existingBook=> existingBook.genre ===book);
        }else{
            return "Invalid command"
        }
    }else return 'Invalid command'
}







let books = [];


const command1 = {
    type: 'add',
    book:{
        title:' Math book',
        author:'Ali',
        yearPublish:2000,
        genre: 'Drama'
    }
};
 
const updatedBooks1 = manageBooks(books, command1);
console.log(updatedBooks1);

const command2 = {
    type: 'remove',
    book:{
        title:' English book',
        author:'Hamza',
        yearPublish:2001,
        genre: 'Novel'
    }
};
 
const updatedBooks2 = manageBooks(books, command2);
console.log(updatedBooks2);

const command3 = {
    type: 'add',
    book:{
        title:' Urdu book',
        author:'Sadia',
        yearPublish:2002,
        genre: 'course'
    }
};
 
const filteredBooks = manageBooks(books, command3);
console.log(filteredBooks);