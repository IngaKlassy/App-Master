
function goBack() {
    window.history.back();
}

$(document).ready(function() {
    $("#myModal").click(function() {
        $(':input','#suggestTerm').val("");
    });
});



$("#termImg").click(function()
{
  console.log("clicked Term of Day Image");
  tracker.send('event', 'image', 'click');
});

$("#termButton").click(function()
{
  console.log("clicked Term of Day Button");
  tracker.send('event', 'image', 'click');
});
