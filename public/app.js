/* global $ */
'use strict';

const STORE = {
  view: 'home', //home, search, search-results, add, read
};

function generateHomePageHTML(){
  return `
  <header>   
    <h1>Welcome to Song Cellar!</h1>
    <h2>Refresh your memory while filing your glass!</h2>
  </header>

  <form>
    <button class='to-search, js-to-search' id='to-search'>To the Search!</button> 
    <button class='to-add, js-add' id='to-add'>Add Lyrics Here!</button>
  </form>
  `
}

function renderHomePage(){
  $('main').html(generateHomePageHTML());
}

function generateAddPageHTML() {
  return `
  <form id="add" class="view">
    <fieldset>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title">
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" name="author">
      </div> 
      <div>
        <label for="lyrics">Lyrics</label>
        <textarea type="text" rows="10" cols="50" name="lyrics"></textarea>
      </div>
      <div>
        <label for="notes">Notes</label>
        <input type="text" name="notes">
      </div>
    </fieldset>
    <button id="submit-add">Submit</button>
  </form>`;
}

function generateReadPageHTML() {
  return `
  <div id="read" class="view">
    <h3>Replace with title</h3>
    <p>Replace with author</p>
    <p>Replace with lyrics</p>
    <p>Replace with notes</p>
  </div>`;
}

function renderAddPage() {
  return generateAddPageHTML;
}

function renderReadPage() {
  return generateReadPageHTML;
}

function renderSearchForm(){
  console.log('renderSearchForm ran');
  $('main').html(generateSearchFormHTML());
}

function generateSearchFormHTML(){
    return `
      <form name='search-form' class='search-form, js-search-form' id='search-form'>
        <h2 for='search-form'>
        Search the Database!
      </h2>
      <lable for='title-input' class='search-lable'>Search by Title</lable>
      <input type='text' class='title-input, js-title-input' id='title-input' form='search-form' placeholder='title to search'>
      <lable for='title-search' class='search-lable'>Search By User</lable>
      <select name='title-search' class='title-search, js-title-search' id='title-search' form='search-form'>
        <option>song 1</option>
        <option>song 2</option>
        <option>song 3</option>
      </select>
      <button class='search-button, js-search-button'>
        Search Now!
      </button>
      </form>
    `
}

function generateResultsHTML(){
  console.log('generateSearchResultsHTML ran');

  return `
    <header>
      <h1>Pick A Song!</h1>
    </header>

    <section class='show-results, js-show-results'>
      <ul class='results-list, js-results-list'>
        <li class='search-result'><a href=''>Song 1</a></li>
        <li class='search-result'><a href=''>Song 2</a></li>
        <li class='search-result'><a href=''>Song 3</a></li>
      </ul>
    </section>
  `
}

function renderSearchResults(){
  console.log('renderSearchResults ran');
 $('main').html(generateResultsHTML());
}


// renderSearchForm();
renderSearchResults();







function renderPage() {
  switch (STORE.view) {
  case 'home': $('.page').html.renderHomePage();
    break;
  case 'search': $('.page').html.renderSearchPage();
    break;
  case 'search-results': $('.page').html.renderSearchResultsPage();
    break;
  case 'add': $('.page').html.renderAddPage();
    break;
  case 'read': $('.page').html.renderReadPage();
    break;
  }
}








$(() => {
  renderPage();

  $('.nav-bar').on('click', '#nav-home', () => {
    STORE.view = 'home';
    renderPage();
  });

  $('.nav-bar').on('click', '#nav-search', () => {
    STORE.view = 'search';
    renderPage();
  });
  
  $('.nav-bar').on('click', '#nav-add', () => {
    STORE.view = 'add';
    renderPage();
  });

  $('.page').on('submit', '#home-submit-search', event => {
    event.preventDefault();
    STORE.view = 'search';

  });

  $('.page').on('submit', '#home-submit-add', event => {
    event.preventDefault();
    STORE.view = 'add';

  });

  $('.page').on('submit', '#search-submit', event => {
    event.preventDefault();
    STORE.view = 'search-results';

  });

  $('.page').on('submit', '#add-submit', event => {
    event.preventDefault();
    STORE.view = 'read';

  });

});
