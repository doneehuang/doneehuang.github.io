
var productReady = false;
$.getJSON("products.json", function () { }).done(function (data) {
  console.log(data)
  var appendHtml = "";
  for (var i = 0; i < data.length; i++) {
    appendHtml += '<div class="row no-gutters col-lg-4 col-sm-12 col-12 products__item">' +
      '<div class="col-lg-12 col-sm-12 col-12">' +
      '<a href="' + data[i].link + '" target="_blank">' +
      '<img class="lazyload" data-src="' + data[i].image_url + '" width="100%" alt="' + data[i].category + '">' +
      '</a>'+
      '</div>' +
      '<div class=" col-lg-12 col-sm-12 col-12 products__item__box">' +
      '<h5>' + data[i].title + '</h5>' +
      '<h6>' + data[i].title + '</h6>' +
      '<hr />' +
      '<p >' + data[i].desc + '</p>' +
      '</div>' +
      '</div>';
  }
  //console.log(appendHtml);
  // $('.products__content__box').html(appendHtml);
  addC();
})
  .fail(function () {
    console.log("error");
  })
  .always(function () {
    console.log("complete");
    productReady = true;
    // setProductSlider()
  });

function setProductSlider() {
  $('.product__content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    variableWidth: false,
    speed: 300,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
    ]
  })
}
function addC() {

  var cid = parseInt(getQueryVariable('cid') || getQueryVariable('CID') || 0);
  if (cid !== 0) {
    $('a').each(function () {
      var addr = $(this).attr('href');
      if (addr.indexOf('?cid') == -1) {
        $(this).attr('href', addr + "?cid=" + cid);
        //console.log('addr');
      }
    })
    $('.nice-select .list li').on('click', function () {
      if ($(this)[0].innerText !== "Change Destination") {
        var addr = $('option[value=' + $(this)[0].innerText + ']').data('url');
        window.open(addr + "?cid=" + cid);
      } else {

      }
    })
  }
  else {
    $('.nice-select .list li').on('click', function () {
      if ($(this)[0].innerText !== "Change Destination") {
        var addr = $('option[value=' + $(this)[0].innerText + ']').data('url');
        window.open(addr);
      } else {

      }
    })
  }
  console.log(cid);
}

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
