$(document).ready(function () {

  checkDomReady();
  $('.partner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    speed: 300,
  })

  var items = {
    "EggRolls": {
      "激厚黃金蛋捲": {
        "prod_id": "39351",
        "image": "campaign_1312/20200414095214_T6L8o/png"
      },
      "花生愛餡蛋捲": {
        "prod_id": "39337",
        "image": "campaign_1312/20200414095330_q6Y1x/png"
      },
      "黑巧克力蛋捲": {
        "prod_id": "39358",
        "image": "campaign_1312/20200414095314_9A4Q4/png"
      },
      "鐵觀音茶蛋捲": {
        "prod_id": "39332",
        "image": "campaign_1312/20200414095258_TAfwR/png"
      }
    },
    "ChiaTe": {
      "原味鳳梨酥": {
        "prod_id": "38910",
        "image": "campaign_1312/20200407063908_GWvbR/jpg"
      },
      "蔥軋餅禮盒": {
        "prod_id": "39272",
        "image": "campaign_1312/20200414101200_cmPfs/jpg"
      }
    },
    "Magi": {
      "焦糖咖滋": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417022919_vdVPB/jpg"
      },
      "特濃起司": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417022919_n1yZ2/jpg"
      },
      "特濃巧克力": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417022919_bWMgf/jpg"
      },
      "KiKi椒麻": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417023116_SRunA/jpg"
      },
      "川香麻辣": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417023116_kEIB6/jpg"
      },
      "玉米濃湯": {
        "prod_id": "34372",
        "image": "campaign_1312/20200417022919_1CfcV/jpg"
      },
      "焦糖鹹蛋黃": {
        "prod_id": "39377",
        "image": "campaign_1312/20200417022919_q4BPv/jpg"
      }
    },
    "Yujanshin": {
      "奶油酥餅": {
        "prod_id": "38949",
        "image": "campaign_1312/20200417023116_S7txq/png"
      },
      "綜合奶油小酥餅": {
        "prod_id": "38949",
        "image": "campaign_1312/20200417023116_pAJBX/png"
      }
    },
    "AhTsung": {
      "綜合小酥餅禮盒": {
        "prod_id": "39384",
        "image": "campaign_1312/20200414085645_w2fNn/png"
      },
      "芋頭小酥餅禮盒": {
        "prod_id": "39384",
        "image": "campaign_1312/20200414090949_eGH9c/png"
      },
      "芋頭牛軋糖": {
        "prod_id": "39364",
        "image": "campaign_1312/20200414091011_Rw80a/png"
      }
    },
    "Tseng": {
      "香蔥椒麻（寬麵）": {
        "prod_id": "39295",
        "image": "campaign_1312/20200414083620_PDns9/jpg"
      },
      "椒麻油香（全素/寬麵）": {
        "prod_id": "39295",
        "image": "campaign_1312/20200414083809_B3AZ7/jpg "
      }
    },
    "HiWalkFeatChiaTe": {
      "激厚黃金蛋捲": {
        "prod_id": "38946",
        "image": "campaign_1312/20200417022826_Su5xd/png"
      },
      "花生愛餡蛋捲": {
        "prod_id": "38946",
        "image": "campaign_1312/20200417063912_qWUip/png"
      },
      "黑巧克力蛋捲": {
        "prod_id": "39401",
        "image": "campaign_1312/20200417063938_Olz2M/png"
      },
      "鐵觀音茶蛋捲": {
        "prod_id": "39401",
        "image": "campaign_1312/20200417063950_c0U4s/png"
      }
    },
    "Glass": {
      "日本四季款": {
        "prod_id": "37669",
        "image": "campaign_1312/20200417023116_ICYd6/png"
      },
      "動物款": {
        "prod_id": "37696",
        "image": "campaign_1312/20200417023116_oYKTY/png"
      },
      "熱門款": {
        "prod_id": "37665",
        "image": "campaign_1312/20200417023116_d4ICl/png"
      },
      "特色款": {
        "prod_id": "37698",
        "image": "campaign_1312/20200417023116_4bYUr/png"
      }
    },
    "kiki":{
      "川味牛肉麵": {
        "prod_id": "37210",
        "image": "campaign_1312/20200417022826_mt6oi/png"
      },
      "蔥油拌麵": {
        "prod_id": "37210",
        "image": "campaign_1312/20200417022919_TU2gT/png"
      },
      "椒麻拌麵": {
        "prod_id": "37210",
        "image": "campaign_1312/20200417022919_FxvNQ/png"
      }
    },
   "SunnyHills": {
      "土鳳梨酥": {
        "prod_id": "38855",
        "image": "campaign_1237/20200420044045_3KqeQ/jpg"
      },
      "蜜豐糖脆蛋糕": {
        "prod_id": "38855",
        "image": "campaign_1237/20200420044623_KDIg5/jpg"
      }
    },	 
   "SunnyGoGo": {
      "台灣水果乾": {
        "prod_id": "21788",
        "image": "campaign_1237/20200420050416_10Qgg/jpg"
      },
      "台灣芒果乾": {
        "prod_id": "21788",
        "image": "campaign_1237/20200420051303_voxrB/jpg"
      },
      "台灣情人果乾": {
        "prod_id": "21788",
        "image": "campaign_1237/20200420051303_d7TVU/jpg"
      },
      "愛文芒果酥": {
        "prod_id": "21788",
        "image": "campaign_1237/20200420051303_GZhkG/jpg"
      },  
      "愛文芒果乾牛軋糖": {
        "prod_id": "21788",
        "image": "campaign_1237/20200420051303_zN4rZ/jpg"
      },   	   
    },	 
   "Holiji": {
      "黑糖老薑手工黑糖磚": {
        "prod_id": "21785",
        "image": "campaign_1237/20200420052835_QrkWq/jpg"
      },
      "紅棗桂圓手工黑糖磚": {
        "prod_id": "21785",
        "image": "campaign_1237/20200420053758_FNhxv/jpg"
      },  	   
    },		  
  };


  $('.items > li').on('click', function () {

    let item_ul = $(this).parent();
    let item_ul_cate = item_ul.attr('data-cate');
    var data = items[item_ul_cate];
    if (data === undefined) {
      return;
    }
    //clear active
    $(item_ul).find('li').each(function () {
      let item = $(this);
      item.removeClass('active');
    });

    //get current li
    let item = $(this);
    if (item.hasClass('active')) {
      item.removeClass('active');
    } else {
      item.addClass('active');
    }

    let sku__item = '';
    $('.sku__item').each(function () {
      let sku__cate = $(this).attr('data-cate');
      if (item_ul_cate === sku__cate) {
        sku__item = $(this);
      }
    });
    //change
    let prod_id = data[item.text()]['prod_id'];
    let imageUrl = data[item.text()]['image'];

    if (prod_id != undefined && imageUrl != undefined) {
      // console.log($(sku__item).find('div.item__img'));
      // console.log($(sku__item).find('a.sku__item__link'));

      $(sku__item).find('a.sku__item__link').attr('href', 'https://www.kkday.com/zh-tw/product/' + prod_id);
      $(sku__item).find('div.item__img').css('background-image', 'url(https://image.kkday.com/v2/image/get/w_480%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/' + imageUrl + ')');
      addCid();
    }
  });

  $('.logos__content').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    speed: 300,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false
      }
    }
    ]
  })
});

function getQueryVariable(variable) {
  var u = window.location.href, e = u.indexOf('?') + 1, query = '';
  for (i = e; i < u.length; i++) {
    if (/[#!@$%^*]/g.test(u.charAt(i))) break;
    else query += u.charAt(i);
  }
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}
var isDom = false;
function checkDomReady() {
  if (productReady) {
    if (isDom == false) {

      clearTimeout(timer);
      var cid = parseInt(getQueryVariable('cid') || getQueryVariable('CID') || 0);
      if (cid !== 0) {
        $('a').each(function () {
          var addr = $(this).attr('href');
          if (addr.indexOf('?cid') == -1) {
            $(this).attr('href', addr + "?cid=" + cid);
          }
        })
      }
      else {
      }

      isDom = true;
      return;
    }
    else {

    }
  }
  else {
    var timer = setTimeout(checkDomReady, 50);
  }
}

function addCid() {
  var cid = parseInt(getQueryVariable('cid') || getQueryVariable('CID') || 0);
  if (cid !== 0) {
    $('a').each(function () {
      var addr = $(this).attr('href');
      $(this).attr('href', addr + "?cid=" + cid);
    })
    $('.nice-select .list li').on('click', function () {
      // console.log($(this));
      if ($(this)[0].innerText !== "Change Destination") {

        var addr = $('option[value=' + $(this)[0].innerText + ']').data('url');
        window.open(addr + "?cid=" + cid);
      } else {

      }
    })
  }
  else {
    $('.nice-select .list li').on('click', function () {
      console.log($(this));
      if ($(this)[0].innerText !== "Change Destination") {

        var addr = $('option[value=' + $(this)[0].innerText + ']').data('url');
        window.open(addr);
      } else {

      }
    })
  }
}

