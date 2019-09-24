var videos = [
'PEFzUywFRbw',
'2gjuargCCSI',
'ZciwJ1jHSII',
'NVfeMLiE-Ys'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);
