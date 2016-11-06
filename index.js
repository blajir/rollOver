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
      easing: 'linear'
    };

    // 渡されたオプションとデフォルト値をマージ
    var config = $.extend({}, defs, params);

    // 要素を退避
    var element = this;

    var src = element.attr('src');
    // w+$でマッチした拡張子を取得
    // $&でマッチした拡張子を代入
    var src_o = src.replace(/\.\w+$/, config.suffix_replace + '$&');

    if (config.fade) {
      // 要素をマウスオンした時のイベント
      element.on({
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
    } else {
      element.on({
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

  };
}(jQuery));
