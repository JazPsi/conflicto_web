window.onscroll = (function () {
  var $nav = $(".is-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  var element = document.getElementById("myNAV");
  element.classList.remove("is-transparent");
});
