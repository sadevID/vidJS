(function(window, videojs) {
      var player = window.player = videojs('videojs-http-source-selector-player');
      player.httpSourceSelector();
      //Load stream from query param /?stream=MYHLS_STREAM_URL_GOES_HERE
      var queryParamStream = getQueryString('stream');
      if(queryParamStream !== null)
      {
        document.getElementById("streamURL").value = queryParamStream;
        player.src({ type: "application/x-mpegURL", src: document.getElementById("streamURL").value });
      }
    }(window, window.videojs));

    function loadStream(){
      console.log("Change stream to : "+document.getElementById("streamURL").value );
      player.src({ type: "application/x-mpegURL", src: document.getElementById("streamURL").value });
    }

    function loadCaption1(){
      console.log("Add caption: "+document.getElementById("caption1URL").value );
      player.addRemoteTextTrack({src: document.getElementById("caption1URL").value, label: 'Caption 1'}, false);
    }

    function loadCaption2(){
      console.log("Add caption: "+document.getElementById("caption2URL").value );
      player.addRemoteTextTrack({src: document.getElementById("caption2URL").value, label: 'Caption 2'}, false);
    }

    /**
      * Get the value of a querystring
      * @param  {String} field The field to get the value of
      * @param  {String} url   The URL to get the value from (optional)
      * @return {String}       The field value
      */
    function getQueryString ( field, url )
    {
      var href = url ? url : window.location.href;
      var reg = new RegExp( '[?&]' + field + '=([^]*)', 'i' );
      var string = reg.exec(href);
      return string ? string[1] : null;
    }
