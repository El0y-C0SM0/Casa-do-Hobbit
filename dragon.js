// GIF -- dragon -- start
(function (window) {
    "use strict"
  
    var dragon = function () {
      var shock = document.createElement('div')
      var img = new Image()
      img.src = data
      img.style.width = '350px'
      img.style.height = '350px'
      img.style.transition = '8s all linear'
      img.style.position = 'fixed'
      img.style.left = '-400px'
      img.style.bottom = '0px'
      img.style.zIndex = 999999
  
      document.body.appendChild(img)
  
      // window.setTimeout(function(){
      //   img.style.left = 'calc(50% - 200px)'
      // },50)
  
      window.setTimeout(function () {
        img.style.left = 'calc(100% + 500px)'
      }, 50)
  
      window.setTimeout(function () {
        img.parentNode.removeChild(img)
      }, 8100)
  
    }
  
    var init = function (data) {
      try {
        var qwop = document.getElementsByClassName('gif-dragon')[0];
        qwop.addEventListener('click', dragon)
      } catch (e) {
        // console.log("error : "+e);
      }
    };
  
    try {
      var data = document.getElementsByClassName('gif-dragon')[0].dataset.src
      init(data);
    } catch (e) {
      // console.log("error : "+e);
    }
  
  })(window);
  // GIF -- dragon -- end