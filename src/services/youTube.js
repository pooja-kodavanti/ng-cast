angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.getVideos = function(query, callback) {
      
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
          key: window.YOUTUBE_API_KEY, 
          q: query, 
          maxResults: 5, 
          videoEmbeddable: 'true',
          part: 'snippet',
          type: 'video'
        }
      }).then(function successCallback(response) {
        console.log('Success');
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('Error', response);

      });
    };
  });
