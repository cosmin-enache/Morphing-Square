window.onload = function () {
    var assignment = {
        propertyName: "left",
        "property": "value"
    };
    $('#submit').click(function () {
        let input = $('textarea').val();
        input = input.split('\n');
        $('.editable-element').attr("style", input.join(''));
    });
}
