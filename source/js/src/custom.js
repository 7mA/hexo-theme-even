let posts = document.getElementsByClassName('post-content');

for(let post of posts) {
  post.innerHTML = markdownRubyExtension(post.innerHTML);
}

function markdownRubyExtension(str) {
    return str.replace(/\{([^{}()]+)\}\(([^{}()]+)\)/g, function(match, $1, $2) {
        return '<ruby>' + $1 + '<rt>' + $2 + '</rt></ruby>'
    });
}
