"use strict";

import * as functions from "./modules/functions.js";
import "./libs/jquery.js";
import "./libs/slick.js";

functions.isWebp();

$(".nav__button").on("click", function () {
  let self = $(this);
  let dropdown = $(".nav__dropdown");
  if (self.hasClass("active")) {
    self.removeClass("active");
    dropdown.removeClass("active");
  } else {
    self.addClass("active");
    dropdown.addClass("active");
  }
});

$(".works__list").slick({
  slidesToShow: 6,
  vertical: true,
  asNavFor: ".works__previews",
  prevArrow: ".slider__arrow_up",
  nextArrow: ".slider__arrow_down",
  focusOnSelect: true,
  infinite: false,
  rows: 0,
});

$(".works__previews").slick({
  slidesToShow: 1,
  asNavFor: ".works__list",
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true,
  infinite: false,
  rows: 0,
});
