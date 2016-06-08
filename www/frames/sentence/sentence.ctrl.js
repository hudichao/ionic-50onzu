angular.module("app.frame.sentence")
.controller('FrameSentenceCtrl', ['$scope', 'FrameSentence', function ($scope, FrameSentence) {
  FrameSentence.getData()
  .then(function(data) {
    $scope.sentences = data;
  });

  $scope.playVoice = function(item) {
    if (!item) return;
    // item = jaco.hiraganize(item);
    // 中文
    document.getElementById('audio_sentence').src = "voice/sentence/" + item + ".m4a";
    document.getElementById('audio_sentence').play();
  }
}])