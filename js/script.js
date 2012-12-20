$(document).ready(function() {

    var params = {changedEl: ".gender", visRows: 12, scrollArrows: true};
    cuSel(params);

    $('.info').each(function() {
        $(this).children(':odd').css('background', '#DCDCDC');
    });

    $('#vacans').click(function() {
        $('#listVacans').slideToggle();
    });

    $('.fullSearch').click(function() {
        $('#extParams').slideToggle();
    });
	
	$('[name=salaryFrom]').mask('?99999');
	$('[name=salaryTo]').mask('?999999');
	$('[name=ageFrom]').mask('?99');
	$('[name=ageTo]').mask('?99');

    $('.timeCheckbox').click(function() {
        if(!$(this).hasClass('checked')) {
            $('.timeCheckbox').removeClass('checked');
            $(this).toggleClass('checked');
            $(this).children('input').attr('checked', true);
            return false;
        } else {
            $(this).removeClass('checked')
            $(this).children('input').attr('checked', false);
            return false;
        }
    });

    if( $('.ava').width() > $('.ava').height() ) {
        $('.ava').attr('width', '100px');
    } else {
        $('.ava').attr('height', '100px');
    }

    var rating = 0;
    $('.star').click(function() {
        var pos = $('.star').index(this) + 1;
        rating = pos;
        setRating(pos);
    });

    $('.star').mouseover(function() {
        var pos = $('.star').index(this) + 1;
        setRating(pos);
    });

    $('.stars').mouseleave(function() {
        setRating(rating);
    });

    function setRating(pos) {
        $('.star').each(function() {
            $('.star').css('background', 'url(img/starempty.png)');
        });
        for(var i=0; i<pos; i++) {
            $('.star').eq(i).css('background', 'url(img/star.png)');
        }
    }

    $('.subMenu').hide();
    $('#menu li').hover(
        function() {
            $(this).children('.subMenu').fadeIn(400);
        }, 
        function() {
            $(this).children('.subMenu').fadeOut(100);
        }
    );

    $('.messageWin').jqm({trigger: 'a.sendMess'});
	$('.success').jqm();
	
	$('#messForm').ajaxForm({
		success: function() {
			$('.messageWin').jqmHide();
			$('.success').jqmShow();
			setTimeout(function() { $('.success').jqmHide() }, 1000);
		}
	});
    
});