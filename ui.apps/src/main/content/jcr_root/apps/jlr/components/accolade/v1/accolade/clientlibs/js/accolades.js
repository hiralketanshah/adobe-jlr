if($("div.carousel.grey > div.cmp-accolades-carousel")){
	$("div.carousel.grey > div.cmp-accolades-carousel").parent("div.carousel.grey").removeClass("grey").addClass("white");
}

const accoladesElements = document.querySelectorAll('.cmp-accolades');

if (accoladesElements.length) {

	$('.cmp-accolades').each(function () {			
		var el_id = $(this).attr("id");
		var bgimageval = $( `#${el_id} #bgimagevalue`).val();
		if(window.innerWidth>=1920){
			if(bgimageval === 'none'){
				$(`#${el_id} .cmp-accolades__copy--primary`).removeAttr('style');
					
			}
			else{
				
				$(`#${el_id} .bgimageheader`).css({"background":"url("+ bgimageval + ")","height":"calc(((100vw - 580px) / 16 )* 6.5)"});
				$(`#${el_id}`).css({"padding-top": "60px","padding-bottom": "60px","background-color": "#FFF"});
			
				$(`#${el_id} .cmp-accolades__copy--primary`).css({ "font-size":"38px","padding": "203px 44px 146px 40px","line-height":"48px","letter-spacing":"0.38px"});
				if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#0C121C'){
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #0C121C !important');	
				}
				else if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#FFFFFF')
				{
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #FFFFFF !important')
				}
				else
				{
					$(`#${el_id} .cmp-accolades__copy--primary p`).removeAttr('style');
				}
			}
          
		}
		if(window.innerWidth>=1280 && window.innerWidth<=1919.9){

			if(bgimageval === 'none'){
				$(`#${el_id} .cmp-accolades__copy--primary`).removeAttr('style');
				
			}
			else{
				$(`#${el_id} .bgimageheader`).css({"background":"url("+ bgimageval + ")","height":"calc(((100vw - 120px) / 16 )* 6.5)"});



				$(`#${el_id} .cmp-accolades__copy--primary`).css({ "font-size":"38px","padding": "142px 40px 134px 40px","line-height":"48px","letter-spacing":"0.38px"});
				$(`#${el_id}`).css({"padding-top": "80px","padding-bottom": "80px","background-color": "#FFF"});
				if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#0C121C'){
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #0C121C !important')
										
				}
				else if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#FFFFFF')
				{
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #FFFFFF !important');
				}
				else
				{
					$(`#${el_id} .cmp-accolades__copy--primary p`).removeAttr('style');
				}
			}
		}
		if(window.innerWidth>=1 && window.innerWidth<=1219){
			$(`#${el_id} .cmp-accolades__copy--primary`).removeAttr('style');
			$(`#${el_id} .cmp-accolades__copy--primary p`).removeAttr('style');
			$(`#${el_id} `).removeAttr('style');

		}
	
	});


}