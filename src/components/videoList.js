angular.module('video-player')
  .component('videoList', {
  // TODO
    bindings: {
      videos: '<',
      titleClick: '<'
    },
  
    templateUrl: 'src/templates/videoList.html'
  });
