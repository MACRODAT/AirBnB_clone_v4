$(document).ready(function() {
	var checked_ = [];
	$('input[type="checkbox"]').change(function(){
		var _id = $(this).data('id');
		var _name = $(this).data('name');
		console.log("change !", $(this));
		if ($(this).is(':checked')) {
			checked_.push(_name);
		} else {
			var _ind = checked_.indexOf(_id);
			if (_ind >= 0)
			{
				checked_.splice(ind, 1);
			}
		}
		var _text = checked_.join(', ');
		console.log(_text);
		console.log(_id);
		$('#allamenities').text(_text);
	})
})
