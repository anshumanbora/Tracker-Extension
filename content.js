chrome.runtime.sendMessage({todo:"showPageAction"});

//------------------------------------My stuff---------------------------------------

//------detect click---------
$('a:not(.star-off)').click(function(event){
	
	var link = $(this).attr('href');
	
	var result="";
   	var d = new Date();
   	result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();
   
    $.post('https://adaptive-web-bora.herokuapp.com/api/clicks',
        {
            currentUrl : window.location.href,
			redirectUrl : link,
			timeStamp : encodeURIComponent(result)

        },
        function(data,status){
            //here data is data received from API
        });
		
});


//------Record question on bookmark event------

$('a.star-off').click(function(event){
		
	var favoriteQuestion = $('h1').text();
	var favoriteUrl = window.location.href;
	
	var result="";
   	var d = new Date();
   	result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();
   
	
	$.post('https://adaptive-web-bora.herokuapp.com/api/favorite',
        {
            favoriteUrl : window.location.href,
			favoriteQuestion : $('h1').text(),
			timeStamp : encodeURIComponent(result)

        },
        function(data,status){
             
            //here data is data received from API
        });


});


//-----Scroll----
$(window).scroll(function (event) {
 	
   if(typeof __t == 'undefined')
        __t = 0;
		clearTimeout(__t);
		         
   			__t=setTimeout(function() {
     
    		total_height = document.body.scrollHeight;
			height_covered = document.body.scrollTop;
			window_height = document.documentElement.clientHeight;
			percent_covered  = Math.floor(100*(height_covered/((total_height-window_height))));

						
			var result="";
		   	var d = new Date();
		   	result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
		             " "+ d.getHours()+":"+d.getMinutes()+":"+
		             d.getSeconds()+" "+d.getMilliseconds();
		   
		    if (percent_covered>40){ 
		    	console.log('scroll')
		            
				$.post('https://adaptive-web-bora.herokuapp.com/api/scroll',
			        {
			            scrollUrl : window.location.href,
						timeStamp : encodeURIComponent(result),
						scrollPercentage :percent_covered

			        },
			        function(data,status){
			             
			            //here data is data received from API
			        });

			}

	}, 1000);

});


//-----Detect search----
$( document ).ready(function() {
   
    url=window.location.href;
    
    var result="";
   	var d = new Date();
   	result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();
   
    if (url.includes('search?q=') 
    	|| url.includes('tagged')){
    	

	    $.post('https://adaptive-web-bora.herokuapp.com/api/search',
	        {
	            searchUrl : window.location.href,
				timeStamp : encodeURIComponent(result)
				

	        },
	        function(data,status){
	             
	            //here data is data received from API
	        });

    }



});
	




//----Detect text copy-------

$(".post-text").bind({
	copy : function(){
		var result="";
   		var d = new Date();
   		result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() + 
             " "+ d.getHours()+":"+d.getMinutes()+":"+
             d.getSeconds()+" "+d.getMilliseconds();
   

		$.post('https://adaptive-web-bora.herokuapp.com/api/copy',
        {
            copyUrl : window.location.href,
			timeStamp : encodeURIComponent(result)

        },
        function(data,status){
             
            //here data is data received from API
        });
	}
});

