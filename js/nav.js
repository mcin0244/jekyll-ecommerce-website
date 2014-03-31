// Toggle Nav

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault();	
		console.log('here')
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			 navTop.setAttribute('data-state', 'collapsed');
		
		}else{
			
			 navTop.setAttribute('data-state','expanded');
			 
		}
		
	});