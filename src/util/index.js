export function generatedOrderId() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for (var i = 0; i < 3; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text + (new Date()).getTime();
}
