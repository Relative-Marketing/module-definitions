// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['lodash'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.

        // In a real world situation lodash would come from npm or similar
        // and ./ wouldn't be required
        module.exports = factory(require('./lodash'));
    } else {
        // Browser globals (root is window)
        root.exampleModule = factory(root._);
    }
}(typeof self !== 'undefined' ? self : this, function (_) {
    return {
        test: function() {
            console.log('From UMD: test function was called adding 3 and 7: ', _.add(3,7));
        },
    }
}));