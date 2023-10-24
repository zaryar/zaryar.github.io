var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  document.getElementById('unmute').addEventListener('click', function() {
    player.unMute();
  });
}