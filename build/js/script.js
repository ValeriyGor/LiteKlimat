$(document).ready(function(){

		
if ($(window).width() > '767'){
	$('.parent-elem').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 var v1 = ($(this).children('ul.second-level').width() - $(this).width())/-2;
		 $('ul.second-level').css('left', v1);
		 $('ul.second-level',this).stop(true,true).slideDown(250);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('ul.second-level',this).stop(true,true).hide(250);
		}, this), 50));
	});

	
	$('.second-parent-elem').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('ul.third-level',this).stop(true,true).slideDown(250);
		}, function () {
			$.data(this,'timer', setTimeout($.proxy(function() {
				$('ul.third-level',this).stop(true,true).hide(250);
			}, this), 50));
	});
}

if ($(window).width() <= '767'){
	$('.parent-elem>a').click(function(e) {
		e.preventDefault();
		$('.second-level').not($(this).next()).slideUp(300);
		$(this).next().slideToggle(300);
	});	
	$('.second-parent-elem>a').click(function (e) {
		e.preventDefault();
		$('.third-level').not($(this).next()).slideUp(150);
		$(this).next().slideToggle(150);
	});
}

	


	$('a.go').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
	
});



	
$('.close-input').click(function () {
			$(".search").removeClass('opened');
			$(".search input").val('');
			$(".search input").attr("placeholder", "Поиск по каталогу");
			$(".curtain").slideUp(300);
});
$('.read-more').click(function () {
		$(this).prev(".features").toggleClass("open");
		var text = $('.read-more').text();
		$(this).text(
        text == "Все особенности" ? "Скрыть особенности" : "Все особенности");
});


$(".search input" ).focus(function() {
	$(".search").addClass('opened');
	$(this).attr("placeholder", "Начните вводить название товара или услуги...");
	if ($(window).width() > '767'){
		$(".curtain").slideDown(300);
	}
});


$('.plus').click(function () {
	var n = $(this).prev().val();
	$(this).prev().val(++n);
});
$('.offer__remove').click(function () {
	$(this).parent().hide(300);
});

$('.minus').click(function () {
	var n = $(this).next().val();
	if (n>1) {
		$(this).next().val(--n);
	}
});

$('.open__more').click(function () {
	$(this).prev().toggleClass("open");
	var text = $('.open__more').text();
	$(this).text(
    text == "Все характеристики" ? "Скрыть характеристики" : "Все характеристики");
});

/*

Рабочая функция для закрытия окна поиска по клику вне области, 
разкомментить когда понадобится*/

$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".search").removeClass('opened');
			$(".search input").attr("placeholder", "Поиск по каталогу");
			$(".curtain").slideUp(300);
		}
	});



var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
	wrapperMenu.classList.toggle('open');  
	$(".head-menu").slideToggle(300);
	$(".head-menu").toggleClass("open");
})


$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 130  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Показать полностью";
    var lesstext = "Скрыть текст";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});