// dropdown
$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('open');

  $(document).mouseup(function(e){
    let item = $(".dropdown.open");

    if (item.has(e.target).length === 0 || e.target.className === "tooltip__close icon icon-close"){
      item.removeClass('open');
    }
  })
});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').removeClass('open');
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(500);
  } else{
    $(this.getAttribute("href")).slideDown(500);
  }

  $(this).toggleClass("active");
});

// menu
$(".btn-menu").click(function(){

  $(this).toggleClass("active");
  $("#nav").toggleClass("show");
  $('body').toggleClass("menu-open");
});

// copy
$('.copy-btn').click(function(e) {
  e.preventDefault();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(this.getAttribute("href")).val()).select();
  document.execCommand("copy");
  $temp.remove();

});

// content-block
let titleArr = document.querySelectorAll("h2");
let nav = document.querySelector(".content-nav");

for(let i = 0; i < titleArr.length; i++){
  titleArr[i].id = `title-${i}`;

  nav.insertAdjacentHTML('afterBegin', `<li class="content-nav__item">
    <a href="#title-${i}" class="content-nav__link">${titleArr[i].textContent}</a>
  </li>`)

}

// fixed
let float = document.querySelector('.floating');

if(window.innerWidth > 991 && float){
  $(function(){
    var topPos = $('.floating').offset().top;
      $(window).scroll(function() {
      var top = $(document).scrollTop(),
          pip = $('.stoper').offset().top,
          height = $('.floating').outerHeight();
      if (top > topPos && top < pip - height) {
      $('.floating').addClass('fixed').removeAttr("style");
      }
      else if (top > pip - height) {$('.floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
      else {$('.floating').removeClass('fixed');}
      });
    });
}