var $links = $(".itemsLinks");

$links.click(function(e) {
    console.log("jkbkj");
    $links.removeClass("actice");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX(" + position * 25 + "%)";
    $("#wrapper").css({
        transform: translateValue
    })

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");