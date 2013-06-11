$('#methods a').click(function() {
	$('#methods').hide();
	$('#calc').show();
	var method = $(this).find('dt').text();
	var fee = $(this).find('dd').text().replace('%', '');

	$('#method-name span').text(method);
	$('#fee').val(fee);
	var amount = $('#amount');
	if (amount.val()) {
		$('#do-calc').click();
	} else {
		amount.focus();
	}
	return false;
});

$('#change').click(function() {
	$('#result').hide();
	$('#calc').hide();
	$('#methods').show();
	return false;
});

$('#do-calc').click(function() {
	var method = $('#method-name span').text();
	var fee = $('#fee').val();
	var amount = $('#amount').val();
	var tax = Math.ceil(amount * (1 / (1 - fee / 100)));
	$('#result-charge').text(tax + '円');
	$('#result-method span').text(method);
	$('#result-fee').text((tax - amount) + '円');
	$('#result').show();
	return false;
});

