(function() {
    'use strict';

    angular
        .module('app')
        .factory('lunchFactory', lunchFactory);

    function lunchFactory() {
        // Initialize Parse
        Parse.initialize("KgpldlxWYmTCN5kCWDwUyPUwGZbbW2j2xqJCundp", "j9RY71X9wbQfhbSuGAtMUIUUQ7Gdk3NyzUsaBVGK");

        var LunchObject = new Parse.Object.extend("LunchObject");
        var lunchObject = new LunchObject();
        lunchObject.id = 'jnPd7XSQEp';

        return {
            getResultsFromParse: function() {
                var query = new Parse.Query(LunchObject);
                var promise = new Parse.Promise();
                query.get(lunchObject.id, {
                    success: function(data) {
                        var lunchData = data.get("lunchData");
                        promise.resolve(lunchData);
                    }
                });
                return promise;
            },
            sendResultsToParse: function(lunchData) {
                lunchObject.add("lunchData", lunchData);
                lunchObject.save();
            },
            removeResultsFromParse: function() {
                lunchObject.unset("lunchData");
                lunchObject.save();
            }
        };
    }
})();