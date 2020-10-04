$(document).ready(function() {
  setInterval('blockAnimate();', 4000);
});

function blockAnimate() {
  $('.active').removeClass('upnext')
  let active = $('.active');
  active.addClass('up');
  let next = $('.active').next('li').length ? $('.active').next('li') : $('.welcome-text li').first();
  $('.active').removeClass('active');
  next.addClass('upnext active');
  active.addClass('hiddenclass')
}