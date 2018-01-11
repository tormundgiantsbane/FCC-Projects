$("#btnForQuote").click(function(e){
	$.ajax({
		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
		cache: false,
		success: function(result){
		 $("#quote").data("text", result[0].content);
		e.stopPropagation();
  
         var text = $('#quote').data('text');
         	typeWriter(text, 0);
			$("#author").html("- " + result[0].title);
		},
		contentType: "application/x-www-form-urlencoded;charset=utf-8"
	});
});

$("#tweet").click(function(){
	window.open("https://twitter.com/intent/tweet?hashtags=quote-machina&text=" + $("#quote").text() + $("#author").text());
});

function typeWriter(text, n) {
  if (n < (text.length)) {
    $('#quote').html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n)
    }, 50);
  }

}