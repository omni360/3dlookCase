$(document).ready(function() {


    $('pre code')
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });


    $("#getNav").load("../../index.html .navGrid");



    





});
