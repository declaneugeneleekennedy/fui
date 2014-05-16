define(['models/TemplateModel'], function(TemplateModel) {
	var instance;

	return {
		getInstance: function(attributes, options) {
			if(!instance) {
				instance = new TemplateModel(attributes, options);
			}

			return instance;
		}
	};
});