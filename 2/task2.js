const localStorageKey = "bookList";
const bookList = JSON.parse(localStorage.getItem(localStorageKey)) || [];

const displayBooks = () => {
  const resultsWrapper = document.getElementById("yourBooks");
  resultsWrapper.innerHTML = "";
  bookList.forEach((book) => {
    const listItem = document.createElement("li");
    const { title, author, priority, category } = book;
    const record = `tytuł: ${title}<br>  autor: ${author}<br>  priorytet: ${priority}<br>  kategoria: ${category}<br>  `;
    listItem.innerHTML = record;
    resultsWrapper.appendChild(listItem);
  });
};
if (bookList) {
  displayBooks();
}
const validateAuthor = () => {
  if (document.getElementById("author").value.length > 3) {
    return true;
  }
  window.alert("Autor nie musi składać się z więcje niż 3 znaków");
  return false;
};
const bookForm = document.getElementById("bookForm");
const addBook = (e) => {
  e.preventDefault();
  const isAuthorValid = validateAuthor();
  if (!isAuthorValid) {
    return;
  }
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value;

  const newRecord = {
    title: title,
    author: author,
    priority: priority,
    category: category,
  };

  bookList.push(newRecord);
  localStorage.setItem(localStorageKey, JSON.stringify(bookList));
  displayBooks();
  bookForm.reset();
};

bookForm.addEventListener("submit", addBook);
