// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code



    
    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if

// $(".slider-items-owl").owlCarousel({
//   items:6,
// })


    
}); 
// jquery end

$
  $('.slider-items-owl').owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:10, //Отступ от картино если выводите больше 1
      nav:false, //Отключил навигацию
      autoplay:true, //Автозапуск слайдера
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:2000, //Время смены слайда
      responsive:{ //Адаптация в зависимости от разрешения экрана
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
  });
