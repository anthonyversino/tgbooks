'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  $scope.posts = [];
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost =  function () {
    Post.save($scope.post, function (ref) {
      $scope.posts[ref.name] = $scope.posts;
      $scope.post = {url: 'http://', title: ''};
    });
    $scope.post = {url: 'http://', title: ''};
  };

  $scope.deletePost = function (index) {
    Post.delete({id: postId}, function (){
      delete $scope.posts[postId];
    });
  };
});
