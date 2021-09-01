const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(searchText)
    //  clear search
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs))



    // fetch('https://openlibrary.org/search.json?q=javascript')
    // .then(res => res.json())
    // .then(data => console.log(data.docs[0].title))
}


const displayBooks = books => {

const bookShow = document.getElementById('books')
  books.forEach(book => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
    
    <div class="card">
        <img src="${book.cover_i}" class="card-img-top" alt="...">
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
  })


//   for(const book of books){
//       console.log(book)
//   }
 
}

