$("#btnForQuote").click(function(){
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
			
		 $("#quote").html(result[0].content);
		 $("#author").html("- " + result[0].title);
		},
		contentType: "application/x-www-form-urlencoded;charset=utf-8"
	});
});

