'use strict';

/**
 * @ngdoc service
 * @name todasAsPatasApp.auth
 * @description
 * # auth
 * Service in the todasAsPatasApp.
 */
angular.module('todasAsPatasApp')
        .factory('Auth', ['User', 'AccessToken', function Auth(User, AccessToken) {
                var currentUser = {};
                
                if (AccessToken.get()) {
                    currentUser = User.get();
                }
                
                return {
                    /**
                     * Gets all available info on authenticated user
                     *
                     * @return {Object} user
                     */
                    getCurrentUser: function () {
                        return currentUser;
                    },
                    /**
                     * Gets all available info on authenticated user
                     *
                     * @return {Object} user
                     */
                    setCurrentUser: function (user) {
                        return currentUser = user;
                    },
                    
                    /**
                     * Check if a user is logged in
                     *
                     * @return {Boolean}
                     */
                    isLoggedIn: function () {
                        return currentUser.hasOwnProperty('id');
                    },
                    /**
                     * Waits for currentUser to resolve before checking if user is logged in
                     */
                    isLoggedInAsync: function (cb) {
                        if (currentUser.hasOwnProperty('$promise')) {
                            currentUser.$promise.then(function () {
                                cb(true);
                            }).catch(function () {
                                cb(false);
                            });
                        } else if (currentUser.hasOwnProperty('id')) {
                            cb(true);
                        } else {
                            cb(false);
                        }
                    },
                    /**
                     * Get auth token
                     */
                    getToken: function () {
                        return AccessToken.get();
                    }
                };
            }]);
