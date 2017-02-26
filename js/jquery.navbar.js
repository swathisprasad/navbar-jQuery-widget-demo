/**
 * @namespace jQuery UI Navbar Component 1.0.0
 * @author Swathi Prasad
 *
 * @requires jquery
 * @requires jquery ui
 */
(function($, undefined) {
	$.widget('ts.navbar', {
		options: {
			/**
			 *  navbar will be positioned to left of the window by default 
			 */
			leftPos: true
		},
		
		/**
		 * Called once upon construction.
		 * @private
		 */
		_create: function() {
			this.element.addClass('ts-navbar').attr({role:'navbar'});
			this.element.children().addClass('ts-menu-item');
			this.element.hide();
		},
		
		/**
		 * @public
		 */
		show: function() {
			this.element.css('float', this.options.leftPos ? $.ts.navbar.float.left : $.ts.navbar.float.right);
			this.options.leftPos ? this.element.css('left', '0') : this.element.css('right', '0');
			this.element.show();
		},
		
		/**
		 * @public
		 */
		hide: function() {
			this.element.hide();
		},
		
		/**
		 * Remove the navbar functionality completely. This will return the
		 * element back to its pre-init state.
		 * @private
		 */
		_destroy: function() {
			this.element.removeClass('ts-navbar').removeAttr('role');
		},
		
		/**
		 * @private
		 */
		_setOption: function(key, value) {
			if (key === 'leftPos') {
				this.options.leftPos = value;
			}
			// base
			this._super( key, value );
		}
	});
	
	/**
	 * Constants
	 */
	$.extend($.ts.navbar, {
		version: '1.0.0',
		float: { right: 'right', left: 'left' }
	});

}(jQuery));
 