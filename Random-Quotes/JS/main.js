$("#btnForQuote").click(function(e){
//	$.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', function(result){
//		 $("#quote").text(result[0].content);
//		 $("#author").text("- " + result[0].title);
////		alert(result[0].content);
//
//	});
	$.ajax({
		url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
		cache: false,
		success: function(result){
			
//		 $("#quote").html(result[0].content);
//			$("#quote").attr('data-text', result[0].content);
		 $("#quote").data("text", result[0].content);
		e.stopPropagation();
  
         var text = $('#quote').data('text');
         	typeWriter(text, 0);
			$("#author").html("- " + result[0].title);
		},
		contentType: "application/x-www-form-urlencoded;charset=utf-8"
	});
	

	
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