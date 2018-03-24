angular.module('video-player')

  .component('app', {

    controller: function(youTube) {
      // this.newSearch = '';
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.titleClick = function(index) {
        this.currentVideo = this.videos[index];
        console.log(youTube);     
      };

      this.search = function(query) {
        youTube.getVideos(query, function(results) {
          this.videos = results;
          this.currentVideo = results[0];
        }.bind(this));
      };

      this.titleClick = this.titleClick.bind(this);
      this.search = this.search.bind(this);
    },
  
    templateUrl: 'src/templates/app.html'
  });
