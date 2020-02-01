//query for NYTimes

//when we click cat button
$("#searchBtn").on("click", function() {
    var termSearched = $("#term").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + termSearched + "&api-key=GI7i7MF1p9GMpwGzvHQODXIGAt5EzkE2";
    
     //Ajax call to the API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //Getting the JSON in response
      .then(function(res) {
      //settting the var response into a variable
      var result = res.response;
      var articleCount =parseInt($("#count").val());
    
    for(var i=0; i < articleCount ; i++) {
        var cardDiv = $("<div>").attr("class","card");
        var cardHeader = $("<h5>").attr("class","card-header").text(result.docs[i].headline.print_headline);
        var cardBodyDiv =$("<div>").attr("class","card-body");
        var byLine = $("<h3>").text(result.docs[i].byline.original);
        var sectionText = $("<h3>").text("Section: " + result.docs[i].section_name);
        var pubDate = $("<h3>").text(result.docs[i].pub_date);
        var link = $("<p>")
        var linkEle =$("<a>").attr("href", result.docs[i].web_url).text(result.docs[i].web_url);
        link.append(linkEle);
        cardBodyDiv.append(byLine, sectionText, pubDate, link);
        //Adding the images into the document
        $("#topArticles").append(cardHeader, cardBodyDiv, cardDiv);
    }
            
    });
  });

  $("#clearBtn").on("click", function() {
    $("#topArticles").empty();
  });