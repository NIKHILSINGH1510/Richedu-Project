function animateProgressBar(el, width){
    el.animate(
        {width: width}, 
        {
            duration: 7000,
            step: function(now, fx) {
                if(fx.prop == 'width') {
                    el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
                }
            }
        }        
    );    
}


$('.progress').each(function(){
   animateProgressBar($(this).find("div"), $(this).data("width")) 
});
window.onload = function onLoad() {
    var progressBar = 
      new ProgressBar.Circle('#progress', {
        color: 'red',
        strokeWidth: 10,
        duration: 2000, // milliseconds
        easing: 'easeInOut'
      });
  
    progressBar.animate(0.63); // percent
  };