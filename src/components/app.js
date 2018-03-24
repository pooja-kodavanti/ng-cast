angular.module('video-player')

  .component('app', {

    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.titleClick = function() {
        console.log('CLICCCCCKKED ');
      };
   
    },
  
    templateUrl: 'src/templates/app.html'
  });
