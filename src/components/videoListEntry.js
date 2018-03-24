angular.module('video-player')
  .component('videoListEntry', {
  // TODO
    bindings: {
      videos: '<',
      item: '<',
      index: '<',
      titleClick: '<'
    },


    templateUrl: 'src/templates/videoListEntry.html'
  });
