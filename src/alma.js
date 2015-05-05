(function (window, undefined) {
    var alma = function (properties) {
        if (window === this) {
            return new alma(properties);
        }

        this.expression = properties;
        this.evaluation = true;
        return this;
    };

    alma.fn = alma.prototype = {
        
        required: function (properties) {
            if (!this.expression) {
                this.evaluation = false;
            }
            return this;
        },
        
        string: function (properties) {
            if (typeof this.expression !== 'string') {
                this.evaluation = false;
            }
            return this;
        },

        number: function (properties) {
            if (typeof this.expression !== 'number') {
                if (typeof this.expression === 'string') {
                    var text = parseInt(this.expression);
                    if (!text) {
                        this.evaluation = false;
                    }
                } else {
                    this.evaluation = false;
                } 
            }
            return this;
        },

        email: function (properties) {
            var email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (!email_regex.test(this.expression)) {
                this.evaluation = false;
            }
            return this;
        },

        evaluate: function (properties) {
            return this.evaluation;
        }
    };

    window.alma = alma;
})(window);
