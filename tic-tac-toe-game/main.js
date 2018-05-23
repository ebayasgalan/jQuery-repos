$(document).ready(() =>{
  var x = 'x';
  var o = 'o';
  var turns = 0;

  var spot1 = $('#space1');
  var spot2 = $('#space2');
  var spot3 = $('#space3');
  var spot4 = $('#space4');
  var spot5 = $('#space5');
  var spot6 = $('#space6');
  var spot7 = $('#space7');
  var spot8 = $('#space8');
  var spot9 = $('#space9');

  $('#board li').on('click', function(){
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
		){
			alert('Winner: O');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
		} else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
		){
			alert('Winner: X');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
		} else if(turns == 9){
			alert('Tie Game');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
			turns = 0;
		} else if($(this).hasClass('disable')){
			alert('This space is taken!');
		} else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
				spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
				spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
				spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
				spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
				spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
			){
				alert('Winner: O');
				turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
				spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
				spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
				spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
				spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
				spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
			){
			alert('Winner: X');
			turns = 0;
			}
		}
	});
		// Reset Handler
		$("#reset").click(function(){
		$("#board li").text("+");
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
		turns = 0;
	});
});
