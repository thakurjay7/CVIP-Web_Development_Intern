function codeEditor(){

    var html = document.getElementById('html').value;
    var css = document.getElementById('css').value;
    var js = document.getElementById('js').value;
    var code = document.getElementById('code');

    output.contentDocument.body.innerHTML = html + '<style>' + css + '</style>';
    output.contentWindow.eval(js);

}

