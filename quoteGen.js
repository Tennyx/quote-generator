$(document).ready(function() {
  $("#btn-quote").on("click", function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
      $(".quote-text").html(json["quoteText"]);
        var author = json["quoteAuthor"];
        if (author){
          $(".quote-author").html("- " + json["quoteAuthor"] + " -");
          $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + json["quoteText"] + "%20" + "-" + json["quoteAuthor"]);
        }
        else{
          $(".quote-author").html("- Unknown -");
          $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + json["quoteText"] + "&20" + "-" + "Unknown");
        }
    });
  });
});