angular.module("app.frame.sentence", [])
.factory('FrameSentence', ["$q", function ($q) {
  var startDate = new Date("2016-06-03");
  var sentence = [
    // s sentence
    // kana
    // m meaning
    {
      s: "おやすみなさい",
      kana: "おやすみなさい",
      m: "晚安"
    },
    {
      s: "なるほど",
      kana: "なるほど",
      m: "原来如此"
    },
    {
      s: "バカ",
      kana: "バカ",
      m: "笨蛋"
    },
  ];

  var nowDate = new Date();
  var passedDay = Math.ceil((nowDate - startDate) / (1000 * 3600 * 24));
  return {
    getData: function() {
      var output = sentence.slice(0, passedDay);
      return $q.when(output)
    }
  };
}])