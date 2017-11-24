
function goBack() {
    window.history.back();
}


if ("ga" in window) {
 tracker = ga.getAll()[0];
 if (tracker)
 tracker.send('event', 'button', 'click');
}

$(document).ready(function() {
    $("#myModal").click(function() {
        $(':input','#suggestTerm').val("");
    });
});



$("#termImg").click(function()
{
  console.log("clicked Term of Day Image");
  tracker.send('event', 'jsIndex', 'click');
});

$("#termButton").click(function()
{
  console.log("clicked Term of Day Button");
  tracker.send('event', 'jsIndex2', 'click');
});
