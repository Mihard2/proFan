$(document).ready(function () {

    /*      open serch-form         */

    $('#search_1').on('click', function () {
        $('#search-form_1').slideToggle(600);
    });

    $('#search_2').on('click', function () {
        $('#search-form_2').slideToggle(600);
    });

    $('#search_3').on('click', function () {
        $('#search-form_3').slideToggle(600);
    });

    /*      end open serch-form         */



    /*      open mobile-menu         */

    var link = $('.mobile-link');
    var menu = $('.header-menu_mobile');
    var navLink = $('.header-menu_mobile ul li a.link');
    var mobLink = $('.mobileMenu-secondLevel_link');
    var mobSecondMenu = $('.mobileMenu-secondLevel');

    link.click(function () {
        link.toggleClass('mobile-link_active');
        menu.slideToggle("slow", function () {
            // Animation complete.
        });
    });

    navLink.click(function () {
        link.toggleClass('mobile-link_active');
        menu.slideToggle("slow", function () {
            // Animation complete.
        });
    });

    mobLink.click(function () {
        mobSecondMenu.slideToggle("slow", function () {
            // Animation complete.
        });
    });


    /*      end open mobile-menu         */


    $('.menu ul li a, .header-menu_mobile ul li a ').each(function () {
        var path = window.location.href;
        var current = path.substring(path.lastIndexOf('/') + 1);
        var url = $(this).attr('href');

        if (url == current) {
            $(this).addClass('active');
        };
    });


    $(function () {
        $('.theme input').styler();
    });

    $('.checkbox').on('click', function () {
        $(this).toggleClass('active_checkbox');
    });







    var id_song, Song, i,
        songs = [
            muz_one = [0, 'single one', 'static/audio/Billie Eilish - Bad Guy.mp3', '132'],
            muz_two = [1, 'single two', "static/audio/Dynoro & Gigi D'Agostino - In My Mind.mp3", '156'],
            muz_three = [2, 'single 3', 'static/audio/linkin-park-in-the-end-mellen-gi-tommee-profitt-remix(mp3-top.info).mp3', '145'],
            muz_four = [3, 'single 99', 'static/audio/1503854834_lo-air-day-and-night.mp3', '199'],
        ];
    for (i = 0; i < songs.length; i++) {
        $('.audio_wrap').append('<div class="song" id="' + songs[i][0] + '"><div class="song_name">' + songs[i][1] + '</div><div class="song_wrap"><a class="song_play" href="javascropt:voide(0)"><i class="icon-play"></i></a><input type="range"><div class="song_duration">' +
            parseInt(songs[i][3] / 60) + ':' + parseInt(songs[i][3] % 60) + '</div></div></div>');
    }

    function playNewSong(id) {
        id_song = id;
        Song = new Audio(songs[id][2]);
        Song.play();
    }

    function playPauseSong(id) {
        if (Song) {
            if (id == id_song) {
                if (Song.paused) {
                    Song.play();
                    return console.log('2');
                } else {
                    Song.pause();
                    $('i').removeClass('icon-pause').addClass('icon-play');
                    return console.log('3');

                }
            } else {
                Song.pause(id);
                $('i').removeClass('icon-pause').addClass('icon-play');
                playNewSong(id);
                return console.log('4');

            }

        } else {
            playNewSong(id);
            $(this).find('i').removeClass('icon-play').addClass('icon-pause');
            return console.log('5');
        }
    }

    $('.song').on('click', function () {
        var id = $(this).attr('id');
        // $(this).find('i').removeClass('icon-play').addClass('icon-pause');
        playPauseSong(id);
    });


    






});