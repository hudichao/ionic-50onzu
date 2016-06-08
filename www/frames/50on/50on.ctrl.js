angular.module("app.frame.50on")
.controller('Frame50onCtrl', ['$scope', "$sce", function ($scope, $sce) {
  $scope.hiragana = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "", "ゆ", "", "よ"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "", "", "", "を"],
    ["ん", "", "", "", ""]
  ];

  $scope.katagana = [
    ["ア", "イ", "ウ", "エ", "オ"],
    ["カ", "キ", "ク", "ケ", "コ"],
    ["サ", "シ", "ス", "セ", "ソ"],
    ["タ", "チ", "ツ", "テ", "ト"],
    ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    ["マ", "ミ", "ム", "メ", "モ"],
    ["ヤ", "", "ユ", "", "ヨ"],
    ["ラ", "リ", "ル", "レ", "ロ"],
    ["ワ", "", "", "", "ヲ"],
    ["ン", "", "", "", ""]
  ];

  $scope.romaji = [
    ["a", "i", "u", "e", "o"],
    ["ka", "ki", "ku", "ke", "ko"],
    ["sa", "si", "su", "se", "so"],
    ["ta", "ti", "tu", "te", "to"],
    ["na", "ni", "nu", "ne", "no"],
    ["ha", "hi", "fu", "he", "ho"],
    ["ma", "mi", "mu", "me", "mo"],
    ["ya", "", "yu", "", "yo"],
    ["ra", "ri", "ru", "re", "ro"],
    ["wa", "", "", "", "wo"],
    ["n", "", "", "", ""]
  ];

  $scope.switch = function(type) {
    $scope.isActive = type;
    switch (type) {
      case "hiragana":
        $scope.kana = $scope.hiragana;
        break;
      case "katagana":
        $scope.kana = $scope.katagana;
        break;
    }
  }

  function init() {
    $scope.switch("hiragana");
  }

  init();

  $scope.playVoice = function(item) {
    // 没卵用
    // http://www.cnblogs.com/leejersey/p/4756663.html
    // $scope.activeVoicePath = $sce.trustAsResourceUrl("/voice/わ.m4a");
    // $scope.activeVoicePath = "/voice/わ.m4a";
    if (!item) return;

    // item = item.replace(/[()]/g, '');
    item = jaco.hiraganize(item);
    // 只有这个有用
    // http://stackoverflow.com/questions/23659395/can-i-use-angular-variables-as-the-source-of-an-audio-tag
    document.getElementById('audio_50on').src = "voice/50on/" + item + ".m4a";
    document.getElementById('audio_50on').play();
  }


}])