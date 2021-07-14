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
				var accimagebannerheight = $(`#${el_id} .cmp-accolades__copy--primary`).height() + 469;
				$(`#${el_id} .cmp-accolades__copy--primary`).height()
				
				$(`#${el_id}`).css({height : accimagebannerheight,"padding-top": "20px","margin-bottom": "40px"});
			
			
				$(`#${el_id} .cmp-accolades__copy--primary`).css({ "font-size":"38px","padding": "203px 44px 146px 40px","line-height":"48px","letter-spacing":"0.38px","background":"url("+ bgimageval + ")"});
				if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#0C121C'){
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #0C121C !important')		
				
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
		if(window.innerWidth>=1280 && window.innerWidth<=1919){

			if(bgimageval === 'none'){
				$(`#${el_id} .cmp-accolades__copy--primary`).removeAttr('style');
				
			}
			else{
				$(`#${el_id} .cmp-accolades__copy--primary`).css({ "font-size":"38px","padding": "142px 60px 134px 60px","line-height":"48px","letter-spacing":"0.38px","background":"url("+ bgimageval + ")"});
				var accimagebannerheight = $(`#${el_id} .cmp-accolades__copy--primary`).height() + 436;
				$(`#${el_id}`).css({height : accimagebannerheight,"padding-top": "80px"});
				if($(`#${el_id} #bgimagetextcolorvalue`).val() === '#0C121C'){
					$(`#${el_id} .cmp-accolades__copy--primary p`).attr('style', 'color: #0C121C !important')
										
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
		if(window.innerWidth>=1 && window.innerWidth<=1219){
			$(`#${el_id} .cmp-accolades__copy--primary`).removeAttr('style');
			$(`#${el_id} .cmp-accolades__copy--primary p`).removeAttr('style');
			$(`#${el_id} `).removeAttr('style');

		}
	
	});


}
