$(document).ready(function() {
    $("#right-side-description").css("height", $("#left-side-description").css("height"));
});

$( window ).resize(function() {
    $("#right-side-description").css("height", $("#left-side-description").css("height"));
});