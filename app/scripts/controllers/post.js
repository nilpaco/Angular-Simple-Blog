'use strict';

/**
 * @ngdoc function
 * @name testingApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the testingApp
 */
angular.module('testingApp')
  .controller('PostCtrl', function($scope, Ref, $firebaseArray, $timeout) {

      $scope.posts = $firebaseArray(Ref.child('posts').limitToLast(10));

      $scope.posts.$loaded().catch(alert);

      $scope.addPost = function(newText, newTitle) {


        if (newText, newTitle) {
          // push a message to the end of the array
          $scope.posts.$add({
              text: newText,
              title: newTitle,
              date: Date.now()
            })
            // display any errors
            .catch(alert);
        }
      };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }


  });
