$(document).ready(function() {

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  $('.ui.dropdown').dropdown();

});

var partnersAbout = document.getElementById('partnersAbout');
var partnersList = document.getElementById('partnersList');
var partnersAboutNavItems = document.getElementsByClassName('partners-about-nav-link');
var partnersListNavItems = document.getElementsByClassName('partners-list-nav-link');

function showPartnersAbout() {
  $(partnersList).hide();
  $(partnersAbout).show();
  $(partnersAboutNavItems).addClass('active');
  $(partnersListNavItems).removeClass('active');
}

function showPartnersList() {
  $(partnersList).show();
  $(partnersAbout).hide();
  $(partnersAboutNavItems).removeClass('active');
  $(partnersListNavItems).addClass('active');
}

function showBecomeAPartner() {
  showPartnersAbout();
  setTimeout(function() {
    $('html, body').animate({
        scrollTop: $("#CTAWrap").offset().top
    }, 1000);
  }, 100);

  setTimeout(function() {
    $('#CTAWrap').transition('pulse');
  }, 1200);

}

