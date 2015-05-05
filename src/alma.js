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
            if (isNaN(this.expression) || typeof this.expression !== 'number') {
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

        mask: function (properties) {
            var numbers = /^[0-9]/;
            var letters = /^[a-zA-Z]/;
            if (this.expression && properties) {
                if (this.expression.length === properties.length) {
                    // console.log('length checks out');
                    for (var i = 0; i < this.expression.length; i++) {
                        if (properties[i] === '0') {
                            if (!numbers.test(this.expression[i])) {
                                this.evaluation = false;
                                break;
                            }
                        } else if (properties[i] === 'X') {
                            if (!letters.test(this.expression[i])) {
                                this.evaluation = false;
                                break;
                            }
                        } else {
                            if (properties[i] !== this.expression[i]) {
                                this.evaluation = false;
                                break;
                            }
                        }
                    }
                } else {
                    this.evaluation = false;
                }
            } else {
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
