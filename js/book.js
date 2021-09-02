const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(searchText)

    //  clear search
    searchField.value = '';

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data));
};


const displayBooks = data => {
    
    const books = data.docs;
    const bookShow = document.getElementById('books')
    books.forEach(book => {
        console.log(book.cover_i)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    
    <div class="card">
            
        <img src="https:covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Book Name :${book.title}</h2>
          <h4 class="card-text">Author : ${book.author_name}</h4>
          <h5>Publisher : ${book.publisher}</h5>
          <p>Publish year : ${book.first_publish_year}</p>
        </div>
      </div> 
      `
        bookShow.appendChild(div);

        console.log(book)
    });

};

