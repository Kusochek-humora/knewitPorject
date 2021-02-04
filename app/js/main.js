// function TotalLength() {
//     var path = document.querySelector('#path1')
//     var len = Math.round(path.getTotalLength())
//     alert(len)
// }
// let path = document.getElementById('path1');
// var animation = null;
// window.addEventListener('scroll', () => {
//     let d = document.body.offsetHeight / path.getTotalLength();
//     let offset = -Math.floor(window.pageYOffset / d) + 50;

//     $('#path1').animate({
//         strokeDashoffset: [offset],
//         duration: 0
//     });
// });
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // downscroll code\
    clearTimeout(timer);
    $('#dot').animate({
      offsetDistance: "100%"
    }, {
      duration: 8000,
      complete: function () {
        $('#f').animate({
          opacity: 1
        }, 2000)
      }
    })
    $('#path1').animate({

      offsetDistance: "100%"
    }, 20, function () {})
    timer = setTimeout(function () {
      $('#dot').stop(1)
      // $('#path1').stop(1)

    }, 100);

    if (pageYOffset == 2750 || pageYOffset > 2750) {
      clearTimeout(timer);

      $('#dot').animate({
        offsetDistance: "100%"
      }, 6000, function () {

      })
    }
  } else {
    timer = setTimeout(function () {
      $('#dot').stop(1)
      // $('#path1').stop(1)

    }, 100);
  }


});
var timer = null;


// var myline = document.getElementById("path1");
// var length = myline.getTotalLength();
// circle = document.getElementById("dot");
// // The start position of the drawing
// myline.style.strokeDasharray = length;

// // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
// myline.style.strokeDashoffset = length;

// // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
// window.addEventListener("scroll", myFunction);

// function myFunction() {
//   // What % down is it?
//   var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//   // Length to offset the dashes
//   var draw = length * scrollpercent;

//   // Reverse the drawing (when scrolling upwards)
//   myline.style.strokeDashoffset = length - draw;

//   //get point at length
//   endPoint = myline.getPointAtLength(draw);
//   circle.setAttribute("x", endPoint.x);
//   circle.setAttribute("y", endPoint.y);

// }