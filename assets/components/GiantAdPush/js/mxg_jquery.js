$("#mgxScroolBtn").hide();
//rules
//1. content of page must longer than the window

//modx passed variables
var mxgBuffer = 1500;
	
function mxGiantAd(){
	var mxgElement = $("#mx--giant--ad");
	if(mxgElement.length > 0){
		//use outerHeight to make sure  we cover all content 
		mxgHeight = window.outerHeight;
		mxgElement.css("height", mxgHeight+"px");
		//set display on now so we dont get a content flash
		mxgElement.slideToggle("slow");
		//make a double fade effect
		$("#mgxScroolBtn").delay(500).fadeIn("slow");
	}	
}

$(document).ready( function(){
	//set buffer
	setTimeout(function(){ mxGiantAd(); }, mxgBuffer);
	
	$("#mgxScroolBtn").on("click", function(){
		var scrolllength = $("#mx--giant--ad").height();
		$("body").animate({scrollTop: scrolllength},'slow');
	});

});

//keep it full height
$(document).resize( function(){  mxGiantAd(); });

//kill it if you scroll past it
$(window).scroll( function(){
	var mxgElement = $("#mx--giant--ad");
	if(mxgElement.length > 0){
		if(window.pageYOffset > mxgElement.height()){
			mxgElement.remove();
		}
	}	
});