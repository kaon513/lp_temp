$(function() {
      //

      $('.hamburger').click(function() {
          });

          $(window).resize(function(){
            var win = $(window).width();
            var p = 720;
            if(win >= p){
              $('.nav-item').show();
            }
            else{
              $('.nav-item').hide();
            }
          });

      $('.faq-list-item').click(function(){
        var open_item = $(this).find('.answer');
        var change_item = $(this).find('span');
       
        toggleChangeBtn(open_item, change_item);
      });


      function toggleChangeBtn(open_item, change_item){
        
        if (open_item.hasClass('open')){
          open_item.removeClass('open');
          open_item.slideUp();
          change_item.text('+');
        }
        else {
          open_item.addClass('open');
          open_item.slideDown();
          change_item.text('-');
        }

      }


      $(window).on('load',function(){
        var locUrl = location.href;
        var setHash = locUrl.split('#');
        //現在のページURLに#が含まれる場合はスクロール移動
        if(setHash[1]){
            hashMove("#"+setHash[1]);
        }
        //#pagetop
        $('#pagetop a').on('click',function() {
            var href = $(this).attr("href");
            var clkUrl = href.split('#');
            hashMove("#"+clkUrl[1]);
            return false;
        });
        //#から始まるリンクはスクロール
        $('a[href^="#"]').on('click',function() {
            var href = $(this).attr("href");
            var clkUrl = href.split('#');
            hashMove("#"+clkUrl[1]);
        });
        //#を含むリンクは、リンク先と現在のページのURLを比較して判断
        $('a[href*="#"]').on('click',function() {
            var href = $(this).attr("href");
            var pageURL = location.pathname;
            reg = new RegExp(pageURL);
            //ページ名が同じならスクロール移動
            if (href.match(reg)) {
                var clkUrl = href.split('#');
                hashMove("#"+clkUrl[1]);
            }
        });
     
        function hashMove(trg){
            var position = $(trg).offset().top;
            if($('body').hasClass('admin-bar')){
                position = position - 50;
            }else{
                position = position - 20;
            }
            if($('body').width() <= 980){
                position = position - 50; //見出しの文字が切れるのを防ぐ
            }else{
                position = position - 150; //見出しの文字が切れるのを防ぐ
            }
            $('body,html').animate({scrollTop:position}, '800',"swing");
            return false;
        }
    });


      var pagetop = $('.pagetop');
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
          } else {
                pagetop.fadeOut();
                }
                
          });
      //     pagetop.click(function () {
      //         $('body, html').animate({ scrollTop: 0 }, 500);
      //             return false;
      // });

      $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        var open_item = $('.nav-item');
        toggleChangeBtn(open_item);
        return false;
      });


      });
