var xhr = new XMLHttpRequest();
var url = './x.json';
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

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Acheive';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way){
        var listitem = document.createElement('li');
        listitem.textContent = way;
        waysList.appendChild(listitem);
    });
    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits';

    var benefitslist = document.createElement('ul');
    article.benefits.forEach(function(benefit){
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitslist.appendChild(listItem);
    });
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitslist)
    articlesDiv.append(articleDiv);

});
}

xhr.send();

