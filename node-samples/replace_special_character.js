var html = "<p>hello</p>"

console.log("html",html);

var strippedHtml = html.replace(/<[^>]+>/g, '');
console.log("html",strippedHtml);
