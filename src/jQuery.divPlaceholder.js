(function ($) {
	$(document).on('change keydown keypress input', 'div[data-placeholder]', function() {
    updatePlaceholder(this);
	});
})(jQuery);


function updatePlaceholder(divElement) {

    if (divElement.textContent) {
        divElement.setAttribute('data-div-placeholder-content', 'true');
    }
    
    else {
        divElement.removeAttribute('data-div-placeholder-content');
    }
}