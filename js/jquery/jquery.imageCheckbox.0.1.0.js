/**
 * Image Checkbox Plugin
 * 
 * When applied to a container element which contains a checkbox, this will hide the checkbox
 * and use its state to decided whether to apply the on or off class to the container.
 * 
 * Once this has been done the container becomes the checkbox control.
 */
(function( $ ) {
	/**
	 * @param classOff 	The off class for the label
	 * @param classOn	The on class for the label
	 */
	$.fn.imageCheckbox = function(classOff, classOn) {
		var _classOn 	= classOn;
		var _classOff 	= classOff;
		
		$('span.labelText', this).remove();
		
		$('input', this).css({
			'visibility': 'hidden',
			'display': 'none'
		});
		
		/**
		 * Check the state of the checkbox and apply the correct class
		 */
		var toggleClass = function() {
			if($('input', this).is(':checked')) {
				$(this).removeClass(_classOff);
				$(this).addClass(_classOn);				
			}
			else {					
				$(this).removeClass(_classOn);
				$(this).addClass(_classOff);		
			}
		};
		
		/**
		 * Swap the current state of the hidden checkbox
		 */
		var toggleState = function() {
			if($('input', this).is(':checked')) {
				$('input', this).removeAttr('checked');
			}
			else {
				$('input', this).attr('checked', 'checked');
			}
		};
		
		/**
		 * Get a set of event parameters to pass to jQuery.trigger()
		 */
		var getEvent = function(eventName) {
			return {
				type: 		eventName,
				inputName: 	$('input', this).attr('name'),
				classOn: 	_classOn,
				classOff: 	_classOff,
				isChecked: 	$('input', this).is(':checked')
			};
		};
		
		toggleClass.apply(this);
		
		/**
		 * Bind the click event. This triggers two events on the target element:
		 * 
		 * - stateChanged: the checkbox state has changed
		 * - classChanged: the label class has changed
		 */
		$(this).click(function() {
			toggleState.apply(this);
			$(this).trigger(getEvent.apply(this, ['stateChanged']));
			
			toggleClass.apply(this);						
			$(this).trigger(getEvent.apply(this, ['classChanged']));
		});
	};
})(jQuery);
