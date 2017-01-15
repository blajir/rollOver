/*global jQuery*/
// JavaScript Document
// UTF-8
(function ($) {
  'use strict';
  $.fn.rollOver = function (params) {
    // デフォルト値
    var defs = {
      duration: 800,
      // 置き換える画像の接尾辞
      suffix_replace: '_on',
      fade: false,
      easing: 'linear',
      opacity: false
    };
    return this.each(function(){
      // 渡されたオプションとデフォルト値をマージ
      var config = $.extend({}, defs, params);
      // 要素を退避
      var element = this;
      var src = $(this).attr('src');
      // w+$でマッチした拡張子を取得
      // $&でマッチした拡張子を代入
      var src_o = src.replace(/\.\w+$/, config.suffix_replace + '$&');
      if (config.fade) {
        // 要素をマウスオンした時のイベント
        $(this).on({
          'mouseenter.rollover': function () {
            $(this).animate({
              'opacity': '.6'
            }, {
              'duration': config.duration,
              'complete': function () {
                $(this).animate({
                  'opacity': '1'
                }, config.duration, config.easing);
                this.src = src_o;
              }
            });
          },
          'mouseleave.rollover': function () {
            this.src = src;
          }
        });
      } else if (config.opacity) {
        $(this).on({
          'mouseenter.rollover': function () {
            $(this).css('opacity', config.opacity);
          },
          'mouseleave.rollover': function () {
            $(this).css('opacity', 1);
          }
        })
      } else {
        $(this).on({
          'mouseenter.rollover': function () {
            this.src = src_o;
          },
          'mouseleave.rollover': function () {
            this.src = src;
          }
        });
      }
      // 要素を返す
      return this;
    });
  };
}(jQuery));
