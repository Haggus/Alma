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
                this.evaluation = true;
            } else {
                this.evaluation = false;
            }
            return this;
        },
        is_string: function (properties) {
            if (typeof this.expression === 'string') {
                this.evaluation = true;
            } else {
                this.evaluation = false;
            }
            return this;
        }
    };

    window.alma = alma;
})(window);
