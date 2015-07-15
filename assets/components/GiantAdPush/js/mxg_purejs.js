//rules
//1. content of page must longer than the window

//modx passed variables
var mxgBuffer = 1500;
	
function mxGiantAd(){
	var mxgElement = document.getElementById("mx--giant--ad");
	if(mxgElement){
		//use outerHeight to make sure  we cover all content 
		mxgHeight = window.outerHeight;
		mxgElement.style.height = mxgHeight+"px";
		//set display on now so we dont get a content flash
		mxgElement.style.display = "block";
	}	
}

function mxgScrollDown(){
	document.body.scrollTop = document.getElementById("mx--giant--ad").offsetHeight;
}

//kill it if you scroll past it
window.onscroll = function(){  
	var mxgElement = document.getElementById("mx--giant--ad");
	if(mxgElement){
		if(window.pageYOffset > mxgElement.offsetHeight){
			mxgElement.remove();
		}
	}	
};

//set buffer
setTimeout(function(){ mxGiantAd(); }, mxgBuffer);

//keep it full height
window.onresize = function(){ mxGiantAd(); };