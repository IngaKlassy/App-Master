
function goBack() {
    window.history.back();
}

$(document).ready(function() {
    $("#myModal").click(function() {
        $(':input','#suggestTerm').val("");
    });
});
