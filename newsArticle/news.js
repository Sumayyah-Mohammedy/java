var xhr = new XMLHttpRequest();
var url = './news.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h1');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var author = document.createElement('p');
    author.textContent = `Author: ${article.author}`;

    var date = document.createElement('p');
    date.textContent = `Date: ${article.date}`;

    var category = document.createElement('p');
    category.textContent = `Category: ${article.category}`;

 
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(author);
    articleDiv.appendChild(date);
    articleDiv.appendChild(category);
    articlesDiv.append(articleDiv);
});
}


xhr.send();

