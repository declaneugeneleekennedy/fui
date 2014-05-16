define(['models/FormModel'], function(FormModel) {
	var instance;

	return {
		getInstance: function(attributes, options) {
			if(!instance) {
				instance = new FormModel(attributes, options);
			}

			return instance;
		}
	};
});