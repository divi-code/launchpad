jQuery(document).ready(function() {
    const slick_prev = jQuery('.btn_prev');
    const slick_next = jQuery('.btn_next');
    const slick_item_prev = jQuery('.road-btn_prev');
    const slick_item_next = jQuery('.road-btn_next');
    const features_prev = jQuery('.features_prev');
    const features_next = jQuery('.features_next');
    const headerBtn = jQuery('.mob-menu-btn');

    headerBtn.click(function() {
        const menu = jQuery('.mob-menu');

        if (menu.css('display') === 'none') {
            menu.show();
        } else {
            menu.hide();
        }
    });
    jQuery('.close-btn').click(function() {
        jQuery('.mob-menu').hide();
    })

    setTimeout(() => {
        jQuery('.notification-block').addClass('inactive');
    }, 1000);

    jQuery('.cancel-btn').click(function(){
        jQuery('.notification-block').removeClass('inactive');
        setTimeout(() => {
            jQuery('.notification-block').addClass('inactive');
        }, 300000);
    });

    jQuery(".blog-list").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: slick_prev,
        nextArrow: slick_next,
        responsive: [{
                breakpoint: 650,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    });

    jQuery(window).on('load resize', function() {
        if (jQuery(window).width() < 768) {
            jQuery('#features-list:not(.slick-initialized)').slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                // autoplaySpeed: 500,
                prevArrow: features_prev,
                nextArrow: features_next,
            });
        }
    });

    jQuery(".roadmap-list").slick({
        // centerMode: true,
        // centerPadding: '105px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: slick_item_prev,
        nextArrow: slick_item_next,
        responsive: [{
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ]
    });


    jQuery(window).on('load resize', function() {
        if (jQuery(window).width() > 1250) {
            jQuery('.slider-main').slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.slider-nav',
                vertical: true,
                autoplay: false,
                verticalSwiping: true,
                centerMode: false
            });

            jQuery('.slider-nav').slick({
                slidesToShow: 3,
                arrows: false,
                asNavFor: '.slider-main',
                vertical: true,
                focusOnSelect: true,
                autoplay: true,
                centerMode: false
            });
        }
    });


    jQuery(window).on('resize orientationchange', function() {
        if (jQuery(window).width() > 1250) {
            jQuery('.slider-nav').slick('unslick');
            jQuery('.slider-nav').slick({
                slidesToShow: 3,
                asNavFor: '.slider-main',
                vertical: true,
                focusOnSelect: true,
                autoplay: false,
                centerMode: false,
                arrows: false
            });
        }
    });

    jQuery(".nav-container .secondary-title").each(function() {
        jQuery(this).text(function(i, text) {
            if (text.length >= 70) {
                text = text.substring(0, 70);
                var lastIndex = text.lastIndexOf(" ");
                text = text.substring(0, lastIndex) + '...';
            }
            jQuery(this).text(text);
        });
    })

    jQuery(".scroll-btn").bind('click', function(e) {
        e.preventDefault();
        jQuery('body,html').animate({ scrollTop: 0 }, 1000);
    });

    jQuery(".accordion__title").on("click", function(e) {
        e.preventDefault();
        const $this = jQuery(this);
        if (!$this.hasClass("accordion-active")) {
            jQuery(".accordion__content").slideUp(400);
            jQuery(".accordion__title").removeClass("accordion-active");
            jQuery('.accordion__arrow').removeClass('accordion__rotate');
        }
        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        jQuery('.accordion__arrow', this).toggleClass('accordion__rotate');
    });

    jQuery('.playpause, .video-btn-container .transparent-btn, .video-pause').click(function(e) {
        e.stopPropagation();
        let video = jQuery('.video')[0];

        if (video.paused) {
            video.play();
            jQuery('.video-pause').fadeIn();
            jQuery('.playpause').fadeOut();
            jQuery('.video-bg').fadeOut();
            jQuery('.video_modal-window').addClass('hidden');
            jQuery('.video-btn-container .transparent-btn span').text('Stop Video')
        } else {
            video.pause();
            jQuery('.video-pause').fadeOut();
            jQuery('.playpause').fadeIn();
            jQuery('.video-bg').fadeIn();
            jQuery('.video_modal-window').removeClass('hidden');
            jQuery('.video-btn-container .transparent-btn span').text('Watch Video')
        }
    });

    jQuery('.show_more').click(function() {
        const list = jQuery('.tranding-container .cryptoboxes table.dataTable.display tbody tr:nth-child(n+5)');
        if (list.css('display') === 'none') {
            list.css('display', 'table-row');
            jQuery('.show_more').html('Hide');
        } else {
            list.hide();
            jQuery('.show_more').html('Show more');
        }
    });


    jQuery('.entry-content h2, .entry-content h3').each((i, el) => {
      jQuery(el).attr('id', `navigateToLink-${i}`)
    })


    let titleArray = jQuery('.entry-content h2, .entry-content h3').map((i, h) => {
      const title = {
        title: jQuery(h).text(),
        id: `navigateToLink-${i}`
      }
      return title
    }).toArray()

    let icon = `<div class="icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8564_237048)">
                            <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM8 7V9H16V7H8ZM8 11V13H16V11H8ZM8 15V17H13V15H8Z" fill="#02C9BF"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_8564_237048">
                                <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>`


    const $ul = jQuery('<ul>', { class: "content-list" }).append(
      titleArray.map(el => 
        jQuery("<li>").addClass('content-item').html(icon).append(jQuery("<a>").addClass('content-link').text(el.title).attr('href', `#${el.id}`))
      )
    );

    jQuery('.content-list-container').append($ul)


    jQuery('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top - 200
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


let titles = jQuery('.article-content h2, .article-content h3')
let list = jQuery('.content-list-container .content-list')

jQuery(window).on('scroll', function () {
  let cur_pos = jQuery(this).scrollTop() + 200;
  
  titles.each(function() {
    let top = jQuery(this).offset().top,
        bottom = top + jQuery(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      list.find('a').parent().removeClass('active');
      titles.removeClass('active');
      
      jQuery(this).addClass('active');
      list.find('a[href="#'+jQuery(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

});