const giph = function () {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=dz6S5sQxmLoXIEzauD6gS5lk0Ip1PjOt&q=${$(this).text()}&limit=25&offset=0&rating=g&lang=en`,
    {})
    .then((result) => result.json())
    .then((netice) => {
        $(".giphs img").remove();
      for (let i = 0; i <= 10; i++) {  
        var giphy = netice.data[i].images.original.url;
        var images = netice.data[i].images["480w_still"].url;
        var width = netice.data[i].images["480w_still"].width;
        var height = netice.data[i].images["480w_still"].height;
        var newDiv = $("<div class='divGiph'>");
        var newImg = $("<img>");
        newImg.attr("src", images);
        newImg.css({ width: width, height: height });
        newDiv.append(newImg);
        $(".giphs").append(newDiv);
        let working = true;
        
        newImg.on("click", function () {
            
          if (working) {
            $(this).attr("src", giphy);
            working = false;
          } else {
            $(this).attr("src", images);
            working = true;
          }
        });
      }
    });
};



$(document).on("click", ".buttons button", giph);
$(".search").on("click", function () {
  var img = $(".searchInput input");
  var btn = $('<button class="btn bg-danger">');
  btn.html(img.val());
  $(".buttons").append(btn);
  img.val("");
});


let temp = true;
newImg.on("click", function () {
  if (temp) {
    $(this).attr("src", images);
    temp = false;
  } else {
    $(this).attr("src", mp);
    temp = true;
  }
});