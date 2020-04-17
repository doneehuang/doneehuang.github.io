// JavaScript Document
var $ = jQuery;	
$(function() {		
	$(".stroy_btn1").click(function() {
        $('.story1').removeClass('active');
    });
	$(".stroy_btn2").click(function() {
        $('.story2').removeClass('active');
    });	
});		
		
const app = new Vue({
  el: '#app',
  data() {
    return {
      bgs: ['https://cdn.quickper.com/media/q1/product/3ab63175-fe7b-4979-a02b-1f77d89beab6/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/bf3e2592-cf06-44f0-bb20-be816f4b3b87/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/1ba87a5c-2bbb-472f-b9d8-70b417f3e250/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/feae7777-9373-4623-9372-61281bb873c7/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/b961b299-9b32-4314-ae43-0068c101482d/w800h1200t1.jpg'],
	  dates:['2天前','1天前','20小時前','1小時前','2分鐘前'],
	  names:['帽子','頭巾','髮夾','髮夾2','耳環'],
	  prices:['NT$ 990','NT$ 590','NT$ 150','NT$ 200','NT$ 390'],
	  links: ['https://cdn.quickper.com/media/q1/product/3ab63175-fe7b-4979-a02b-1f77d89beab6/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/bf3e2592-cf06-44f0-bb20-be816f4b3b87/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/1ba87a5c-2bbb-472f-b9d8-70b417f3e250/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/feae7777-9373-4623-9372-61281bb873c7/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/b961b299-9b32-4314-ae43-0068c101482d/w800h1200t1.jpg'],
      current: 0 };

  },
  mounted() {
    let timeline = anime.timeline({
      autoplay: true,
      duration: 10000,
      easing: 'linear',
      loop: true });

                      
    this.bgs.forEach((bgimg, index) => {
      timeline.add({
        targets: document.querySelectorAll('.nav1 > div')[index].children[0],
        width: '100%',
        changeBegin: a => {
          this.current = index;
        } });

    });  

    let hammertime = new Hammer(document.querySelector('#app'));

        hammertime.on("tap", function (e) {
            	$(".storyCloseButton").click(function() {
        $('.story1').addClass('active');
    });
        });	  
	  
	  
	  
	  
    hammertime.on('press', e => {
      timeline.pause();
    });

    hammertime.on('pressup', e => {
      timeline.play();
    });

    hammertime.on('tap', e => {
		
	 if (e.center.y < window.innerHeight - 100) {	
		
      if (e.center.x > window.innerWidth / 2) {
		  	 if (e.center.y > window.innerHeight/6) {
		  
        if (this.current < this.bgs.length - 1) {
          this.current += 1;
          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
		}	  
      } 
		else {
        if (this.current > 0) {
          this.current -= 1;
          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
      }
		 }
		 
    });
  } });
	
	
	
const app2 = new Vue({
  el: '#app2',
  data() {
    return {
      bgs2: ['https://cdn.quickper.com/media/q1/product/83db6fd6-0acb-4990-8cbe-7218be43b365/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/8654cf5b-b091-4bff-9cc4-1021340596cf/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/9f2bf683-11ed-4693-876a-a041c93a154d/w800h1200t1.jpg', 'https://cdn.quickper.com/media/q1/product/a0f0ef42-2b90-41a1-8d16-7588a4460024/w800h1200t1.jpg'],
	  dates2:['10天前','5天前','10小時前','1小時前'
		  
	  ],
      current: 0 };

  },
  mounted() {
    let timeline = anime.timeline({
      autoplay: true,
      duration: 10000,
      easing: 'linear',
      loop: true });


    this.bgs2.forEach((bgimg, index) => {
      timeline.add({
        targets: document.querySelectorAll('.nav2 > div')[index].children[0],
        width: '100%',
        changeBegin: a => {
          this.current = index;
        } });

    });  

    let hammertime = new Hammer(document.querySelector('#app2'));

        hammertime.on("tap", function (e) {
            	$(".storyCloseButton").click(function() {
        $('.story2').addClass('active');
    });
        });	  
	  
	  
	  
	  
    hammertime.on('press', e => {
      timeline.pause();
    });

    hammertime.on('pressup', e => {
      timeline.play();
    });

    hammertime.on('tap', e => {
      if (e.center.x > window.innerWidth / 2) {
		  if (e.center.y > window.innerHeight / 10) {
        if (this.current < this.bgs2.length - 1) {
          this.current += 1;
          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
			  }
      } 
		else {
        if (this.current > 0) {
          this.current -= 1;
          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
      }
    });
  } });		