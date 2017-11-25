
function goBack() {
    window.history.back();
}



$(document).ready(function() {

    $("#myModal").click(function() {
        $(':input','#suggestTerm').val("");
    });

  var source   = $("#entry-template").html();
  console.log(source);
  var showAlternate = JSON.parse(localStorage.getItem("showAlternate"));
  console.log(showAlternate);
  var template = Handlebars.compile(source);
  var alternate = {'showAlternate': showAlternate};
  $("#termofDayDesign").html(template(alternate));

});



$("#termImg").click(function()
{
  gtag('event', 'click',
  {
      'event_category': 'engagement',
      'event_label':  'orignalTermofDay'
  });
  console.log("clicked Term of Day Image");
});

$("#termText").click(function()
{
  gtag('event', 'click',
  {
      'event_category': 'engagement',
      'event_label':  'orignalTermofDay'
  });
  console.log("clicked Term of Day Image");
});

$("#term").click(function()
{
  gtag('event', 'click',
  {
      'event_category': 'engagement',
      'event_label':  'redesignTermofDay'
  });
  console.log("clicked Term of Day Button");
});
