function downloadVideo() {
  var videoUrl = document.getElementById('videoUrl').value;
  
  // Add video download links
  var downloadLinks = document.getElementById('downloadLinks');
  downloadLinks.innerHTML = '';
  
  var formats = [
    { name: 'MP4 (720p)', url: videoUrl + '&format=mp4' },
    { name: 'MP4 (360p)', url: videoUrl + '&format=mp4-low' },
    { name: 'WebM (480p)', url: videoUrl + '&format=webm' }
    // Add more formats if desired
  ];

  formats.forEach(function(format) {
    var link = document.createElement('a');
    link.setAttribute('href', format.url);
    link.setAttribute('download', '');
    link.className = 'download-link';
    link.innerText = format.name;
    downloadLinks.appendChild(link);
  });
}
