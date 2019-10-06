function addFavouriteBook(bookname)
{
  if(!bookname.includes("Great"))
    {
      favouriteBooks.push(bookname);
    }
}
function printFavouriteBook()
  {
    console.log(`Favourite Books : ${favouriteBooks.length}`);
    for(let bookname of favouriteBooks)
      {
        console.log(bookname);
      }
  }
  var favouriteBooks = [ ];
  addFavouriteBook("A Song of Ice and Fire");
  addFavouriteBook("The Great Gatsby");
  addFavouriteBook("Crime & Punishment");
  addFavouriteBook("Great Expectations");
  addFavouriteBook("You Don't Know JS");
  printFavouriteBook();
 