
var $ = jQuery;
$(function() {
$(".instagram").instastory({
  get: "#kkday",	
  limit: 6,
  imageSize: 240,	
  template: '<div class="post"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{accessibility_caption}}"><span class="meta"><p>{{caption}}</p><span class="stats"><span class="likes"><i class="fa fa-heart"></i>{{likes}}</span><span class="comments"><i class="fa fa-comment"></i>{{comments}}</span></span></a></div>',	
});
	
    $(".btn_new").click(function() {
        $('.btn_new').hide(1000);	
        $('.instagram').instastory({
          get: "#kkday",			
		  limit: 90,
		  imageSize: 240,	
		  template: '<div class="post"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{accessibility_caption}}"><span class="meta"><p>{{caption}}</p><span class="stats"><span class="likes"><i class="fa fa-heart"></i>{{likes}}</span><span class="comments"><i class="fa fa-comment"></i>{{comments}}</span></span></a></div>',			
});
    });
});