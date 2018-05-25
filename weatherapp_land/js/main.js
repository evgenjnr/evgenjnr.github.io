window.addEventListener('DOMContentLoaded', init);

let menuBtn     = document.querySelector('.bar_menu'),
	mainHeader  = document.querySelector('.main_header'),
	sectionElmn = document.querySelectorAll('section'),
	btnShow     = document.querySelectorAll('button'),
	navItem     = document.querySelectorAll('.nav_item');
function init () {
//global set topPadding for each section element eq height of header element
	let setPadding = function paddTop() {
		let paddTop = getComputedStyle(mainHeader).height;
		for (let item of sectionElmn) {
		item.style.paddingTop = paddTop;
	}
	// */end set topPadding for each section element eq height of header element
	}
	let setColor = function(){
		for (let showElm of sectionElmn) {
				if(showElm.getBoundingClientRect().top >= 0 
					&& showElm.getBoundingClientRect().top < 600){
					let sectionInView = showElm.getAttribute('data-name');
				  for(let target of navItem){				  	
				  	if(target.getAttribute('data-name') == sectionInView){
				  		
				  		target.firstChild.classList.add('active--item');				  	
				  		}else{
				  			target.firstChild.classList.remove('active--item');
				  		}
				  	}
				  
				}
			}
		}

	window.addEventListener('load', setPadding);
	window.addEventListener('resize', setPadding);
	window.addEventListener('scroll', setColor);
	
	// hide/show navMenu in header for mobile	
	menuBtn.addEventListener('click', function () {
		let menuList = document.querySelector('.nav_list');
		if(menuList.classList.contains('nav_list--show')){
		   menuList.classList.remove('nav_list--show');
		}else{
		   menuList.classList.add('nav_list--show');
		}
		
	});
	// */end hide/show navMenu in header for mobile	


	viewSection(navItem);
	viewSectionOnBttn(btnShow);
	
}
// */end init

//add event 'click' for each element of navItem in header and footer,
// also button in top_section 
// and scroll section element with data-name eq data-name navItem inTo view
function viewSectionOnBttn(par1){
		for(let target of par1){
			target.addEventListener('click', function(ev){
							// ev.preventDefault();
				let targetAttr = this.getAttribute('data-name');
				for (let showElm of sectionElmn) {
					if(showElm.getAttribute('data-name') == targetAttr){
					showElm.scrollIntoView({behavior: 'smooth'});
					}
				}
				
			});
		}
	}

	function viewSection(par1){
		for(let target of par1){
			target.addEventListener('click', function(ev){
							ev.preventDefault();
				let siblings = this.parentNode.children;
				console.log(target);
				for(let item of siblings){
					if(item.firstChild.classList.contains('active--item')){
						item.firstChild.classList.remove('active--item');
					}
						this.firstChild.classList.add('active--item');
				}
				
				let targetAttr = this.getAttribute('data-name');
				for (let showElm of sectionElmn) {
					if(showElm.getAttribute('data-name') == targetAttr){
					showElm.scrollIntoView({behavior:'smooth'});
					}
				}
				if(window.matchMedia('screen and (max-width: 620px) and (orientation: portrait)').matches){
					this.parentNode.classList.remove('nav_list--show');
					
				}
				
			});
		}
	}
	
// end*/ add event 'click' for each element of navItem in header and footer 
// and scroll section element with data-name eq data-name navItem inTo view