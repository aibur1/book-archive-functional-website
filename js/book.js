

const spinner = document.getElementById('spinner');

const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(searchText)

    //  clear search
    searchField.value = '';
    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    spinner.classList.remove("d-none");
    fetch(url)
        .then(res => res.json())
        .then(data =>displayBooks(data.docs))
        .finally(() => {
            spinner.classList.add('d-none');
        })
};

//showing books on html
const displayBooks = books => {
    const bookShow = document.getElementById('books')
    bookShow.textContent = '';
    // error handling
    if(books.length === 0){
        const errorDiv = document.getElementById('error-handling');
        const p = document.createElement('p');
        p.innerText = 'No Results Found';
        errorDiv.appendChild(p)
    };

    books.forEach(book => {
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
    });

};

