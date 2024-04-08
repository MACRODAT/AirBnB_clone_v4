$(document).ready(function() {
	var checked_ = [];
	$('input[type="checkbox"]').change(function(){
		var _id = $(this).data('id');
		var _name = $(this).data('name');
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
		$('#allamenities').text(_text);
	});

	$.get('http://0.0.0.0:5001/api/v1/status', function (data, texts) {
		if (texts == "success") {
			if (data.status === "OK") {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		}
	})
})
