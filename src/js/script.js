$(document).ready(function() {
    var actualFocusValue;
    $('input[type="text"]').add($('input[type="email"]')).on('focus', function() {
        actualFocusValue = $(this).attr('value');
        $(this).attr('value', '');
    });
    $('input[type="text"]').add($('input[type="email"]')).on('blur', function() {
        $(this).attr('value', actualFocusValue);
    });
    $('textarea').on('focus', function () {
        actualFocusValue = $(this).html();
        $(this).html('');
    });
    $('textarea').on('blur', function () {
        $(this).html(actualFocusValue);
    });
});
