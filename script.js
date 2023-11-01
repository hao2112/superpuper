function generate(){
    var q = {
         "- Альберт Эйнштейн" : '"Стремитесь не к успеху, а к ценностям, которые он дает"',
         "- Амелия Эрхарт" : '"Сложнее всего начать действовать, все остальное зависит только от упорства"',
         "- Федор Достоевский" : '"Надо любить жизнь больше, чем смысл жизни."'
    }

    var authors = Object.keys(q);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = q[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}