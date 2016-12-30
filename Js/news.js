$(document).ready(function(){
   
   $(".newsOpt").hide();  // hide the drop down div element
	
   //News Sources Apis
   var Goolge_Api="https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var Huffington_Api="https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var ESPN_Api="https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var Hindu_Api="https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var Washington_Api="https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var Verge_Api="https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=800a5dbcf0f04dfcbc5d6f810187c226";
   var execute=false;
   var t_interval=0;
   
   // Create a static list of news sources 	
   var news=['Google News','Huffington News','Washington Post','The Hindu','ESPN','Verge'];
   var images=['./Images/g_news.png','./Images/h_post.png','./Images/w_post.jpg','./Images/hindu.jpg','./Images/Espn.jpg','./Images/Verge.png'];
   for(var i=0;i<news.length;i++)
			{
				$(".newsOpt").append('<div class="div_container" id="div_container_'+i+'"> <img class="image" src="'+images[i]+'"></img> <p class="news_name">'+news[i]+'</p> </div> <hr></hr>');
			}
	
	//This is the main function which shows News based on the Api_Key passed to it
	var Start=function(Api_Key)
	{
	
		$.getJSON(Api_Key,function(data) // get data from url in a json response
		{
		
        var string_json=JSON.stringify(data);//convert data to string
        var news_obj=JSON.parse(string_json);//convert string data to json object
		var i=0;
			
        $(".arrow").click(function() // Event Handler to slide down div element
		{
			
			$(".arrow").css('transform','rotate(180deg)');
		    $(".newsOpt").slideDown("slow").show();
			
	    });
			
			//based on the div element gets selected event handler gets executed
			$("#div_container_0").click(function(){
			
				clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(Goolge_Api);
				
			});
			$("#div_container_1").click(function(){
			//alert($(this).text());
				clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(Huffington_Api);
				
			});
			$("#div_container_2").click(function(){
			//alert($(this).text());
				clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(Washington_Api);
			});
			$("#div_container_3").click(function(){
			//alert($(this).text());
				clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(Hindu_Api);
			});
			$("#div_container_4").click(function(){
			//alert($(this).text());
				clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(ESPN_Api);
			});
			$("#div_container_5").click(function(){
			//alert($(this).text());
			    clearInterval(t_interval);
				$(".arrow").css('transform','rotate(0deg)');
		        $(".newsOpt").slideUp("slow");
				Start(Verge_Api);
			});
		
		//display all data from json object
		
		      $(".image_container").css('background-image','url('+news_obj.articles[i].urlToImage+')');
			  $(".news_container").html(news_obj.articles[i].title);
              $(".desc").html(news_obj.articles[i].description);
              $(".link").attr("href",news_obj.articles[i].url);
		function Display_News()
		{
			
			if(i>=news_obj.articles.length)
			{
				i=-1;
			}
		    else{
			    i++;
			  $(".image_container").css('background-image','url('+news_obj.articles[i].urlToImage+')').hide().fadeIn();
			  $(".news_container").html(news_obj.articles[i].title).hide().fadeIn();
              $(".desc").html(news_obj.articles[i].description).hide().fadeIn();
              $(".link").attr("href",news_obj.articles[i].url);
			 }
		
			
			
		}
		
		
		t_interval=setInterval(Display_News,13000);//for every 13 seconds Display_News() will get executed

	}).fail(function(){alert("failed to load json data");});
		
	
		
}
	if(execute===false)
		{
			Start(Goolge_Api);
			execute=true;
		}

        
}); 
