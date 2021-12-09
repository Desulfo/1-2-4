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
const isValid = (string, minLength) => {
  let isValid = true;
  if (string.length <= minLength) {
    isValid = false;
  }
  if (/\d/.test(string)) {
    alert("Autor oraz tytuł nie mogą zwierać cyfer");
    isValid = false;
  }
  return isValid;
};
const bookForm = document.getElementById("bookForm");
const addBook = (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value;
  const isAuthorValid = isValid(author, 3);
  const isTitleValid = isValid(title, 1);

  if (!isAuthorValid || !isTitleValid) {
    return;
  }

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
