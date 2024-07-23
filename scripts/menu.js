/* 
This JavaScript Document
will enable the slide n hide 
vector menu. 

- it will detect if the user clicks on the button class="btn-menu"
- each click will toggle ON and OFF the class="show", between these two states:
   <nav class="show">
    OR
   <nav>
- css style will take care of what to do with class="show"

More on JavaScript in a future lesson
*/


(function(d){
	
	const $dropdown = d.querySelector('.dropdown-content');
	const $btn = d.querySelector('.dropdown');	
	$btn.addEventListener('click', function(){		
		$dropdown.classList.toggle('show');		
	});	
	
})(document);

function formatPhoneNumber(input) {
	// Remove non-numeric characters
	let phoneNumber = input.value.replace(/\D/g, '');

	// Check if the input is not empty
	if (phoneNumber.length > 0) {
		// Format the phone number
		phoneNumber = '(' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6,10);
	}

	// Update the input value with the formatted phone number
	input.value = phoneNumber;
}