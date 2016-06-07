// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic', 
  'app.frame.50on', 
  'app.frame.account',
  'app.frame.sentence',
  'app.secret'
])
// 没卵用
//ng-src audio not working http://stackoverflow.com/questions/23659395/can-i-use-angular-variables-as-the-source-of-an-audio-tag
// http://stackoverflow.com/questions/15728424/html5-video-is-not-working-with-angularjs-ng-src-tag
// .config(function($sceDelegateProvider) {
//   $sceDelegateProvider.resourceUrlWhitelist([
//     "self",
//     /(mp3|ogg|m4a)$/,
//   ]);
// })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
  // http://ionicframework.com/docs/api/provider/$ionicConfigProvider/
  // 全部使用native scrolling 相当于在ion-content上overflow-scroll='true'
  $ionicConfigProvider.scrolling.jsScrolling(false);
})
.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.50on', {
    url: '/50on',
    views: {
      'tab-50on': {
        templateUrl: 'frames/50on/50on.html',
        controller: 'Frame50onCtrl'
      }
    }
  })
  .state('tab.sentence', {
    url: '/sentence',
    views: {
      'tab-sentence': {
        templateUrl: 'frames/sentence/sentence.html',
        controller: 'FrameSentenceCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'frames/account/account.html',
        controller: 'FrameAccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/50on');

});
