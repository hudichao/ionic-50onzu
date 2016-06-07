angular.module("app.frame.account")
.controller('FrameAccountCtrl', function ($scope, SecretAuthor, SecretUser) {
  $scope.author = SecretAuthor.profile;
  $scope.forUser = SecretUser.profile;
})