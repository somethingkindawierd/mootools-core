Function.extend({

	bindAsEventListener: function(bind, args){
		return this.create({'bind': bind, 'event': true, 'arguments': args});
	},

	bindWithEvent: function(bind, args){
		return this.create({'bind': bind, 'event': true, 'arguments': args});
	}

});