var $=jQuery; 

$(function(){	
  //滑動   
   $('a.more').on('click',function(event){
     event.preventDefault();var dest=0;
     if($(this.hash).offset().top>$(document).height()-$(window).height()){
       dest=$(document).height()-$(window).height();
       }else{
         dest=$(this.hash).offset().top;
         }
   $('html,body').animate({scrollTop:dest},300,'swing');})		 
   //Owl 輪播 - 4個商品一組
   $('.owl-four').owlCarousel({
   margin: 15,
   nav: true,
   dots: false,
   loop: false,
   smartSpeed: 200,
   responsiveRefreshRate : 0,
   slideBy: 'page',
   navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],           
   responsive: {
   0: {
     margin: 5,
     items: 1,
     nav: false,
   },            
   768: {
     items: 2, 
     margin: 5,
   },
   991: { 
     items: 3, 
     margin: 15,          
   },
   1200: {
    margin: 15, 
    items: 4,        
   }
   }   
   }) 	 
 }) ;
//優化owl
$(document).ready(function() {
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target 
  e.relatedTarget 
  $(".owl-carousel").trigger('refresh.owl.carousel');
});
});
// navbar
$('body').scrollspy({
  target: '.navbar-collapse',
  })
$(window).on("scroll", function () {
  var $window = $(window).scrollTop();
  var bannerOffset = $(".banner").outerHeight(true)-40;
  if ($window > bannerOffset) {
    $(".navbar-collapse").addClass("active"),1000;	
  } else {		
    $(".navbar-collapse").removeClass("active"),1000;		
  }
});
// lazy bg
document.addEventListener('lazybeforeunveil', function(e){
var bg = e.target.getAttribute('data-bg');
if(bg){
e.target.style.backgroundImage = 'url(' + bg + ')';
}
});




