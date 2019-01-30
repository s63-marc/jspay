//Simple utility to make a random Id
function makeId() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}
// makeid();

// document.getElementById("paymentRef").value = makeId();

// !--- RDP Hosted Page --- //
document.getElementById("formPay").addEventListener("submit", submitForm);

async function getAccessToken(client, secret) {
	console.log("getAccessToken >>>>>>>>>>>>>", client, secret)
	let data = await fetch(
		`https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/v1/authenticate`, {
			method: "POST",
			accept: "application/json",
			credentials: "same-origin",
			mode: "cors",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({
				clientId: client,
				secret: secret
			})
		}
	)

	return await data.json();
}

async function verifyMerchant(merchantId) {
	console.log("verifyMerchant >>>>>>>>>>>>>", merchantId)
	let data = await fetch(
		`https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/v1/merchants/${merchantId}`, {
			method: "GET",
			credentials: "same-origin",
			mode: "cors",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
				// "Content-Type": "application/x-www-form-urlencoded",
			}
		}
	)

	return await data.json();
}

async function getPaymentToken(mid, payload, accessToken) {
	console.log("verifyMerchant >>>>>>>>>>>>>", payload)
	let data = await fetch(
		`https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/v1/payments/token/${mid}`, {
			method: "POST",
			credentials: "same-origin",
			mode: "cors",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": `Bearer ${accessToken}`
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify(payload)
		}
	)

	return await data.json();
}

async function getPaymentStatus(mid, payment_ref, accessToken) {
	console.log("getPaymentStatus >>>>>>>>>>>>>", mid, payment_ref)
	let data = await fetch(
		`https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/v1/payments/token/${mid}/status/${payment_ref}`, {
			credentials: "same-origin",
			mode: "cors",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": `Bearer ${accessToken}`
				// "Content-Type": "application/x-www-form-urlencoded",
			},
		}
	)

	return await data.json();
}

function submitForm(e) {
	let statusBox = document.getElementById("status");

	// let merchantId = "af8fed75-3fc4-49d5-a6bb-59d658f49465"; // mix
	// // let merchantId = "92d853c0-66d0-42b4-9d15-663aa7baeee8"; // cardpay
	// // let merchantId = "2ff05424-7491-4a39-b71d-edcfa6ea54b1";
	/*
	8b3978e8-04c6-455a-9ea4-c8efe0896f50
	cards only
	altpay only 9ffdea39-5951-4813-a8ba-699ad4004427
  both cardpay and altpay cb61bf4a-bc2b-4f18-9e60-efa0405ac8ab
  */
	let merchantId = "cb61bf4a-bc2b-4f18-9e60-efa0405ac8ab";
	/*{
		"name": "Test Account ",
		"description": "Test account with altpay and card",
		"cspType": "b2s",
		"merchantId": "cb61bf4a-bc2b-4f18-9e60-efa0405ac8ab",
		"pageId": "83ae23742afd80f53bd50686ab03d4e9",
		"clientId": "27kemc733pgrbunbfqda34r419",
		"secret": "17s80fgag9am2824m7404hghijbs31be93kn1787kf90tjf0b6b9",
		"dateAdded": "2019-01-29 05:25:14"
	}*/
	let amount = document.getElementById("amount").value;
	let currency = document.getElementById("currency").value;
	let email = document.getElementById("email").value;
	let promotion = document.getElementById("promotion").value;
	let payment_ref = makeId(); //document.getElementById("paymentRef").value;
	let statusInterval, accessToken, clientId, clientSecret;

	$("#myModal").modal("show");
	e.preventDefault();
	let btn = this;
	btn.disabled = true;
	statusBox.innerText = "Processing payment...";

	// PopupCenter
	let title = "Red Dot Pay";
	let Uheight = 600;
	let Uwidth = 800;
	// let url =  `http://view-pay-redirect.herokuapp.com/pay/verify`;//,"MyWindow", 1024, 768)//"config='toolbar=no, menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'")
	let url = `http://localhost:8080/m/${merchantId}/#/pay`;

	// START: This block makes sure that the popup window is in the center of the page
	var dualScreenLeft =
		window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop =
		window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ?
		window.innerWidth :
		document.documentElement.clientWidth ?
		document.documentElement.clientWidth :
		screen.width;
	height = window.innerHeight ?
		window.innerHeight :
		document.documentElement.clientHeight ?
		document.documentElement.clientHeight :
		screen.height;

	var left = width / 2 - Uwidth / 2 + dualScreenLeft;
	var top = height / 2 - Uheight / 2 + dualScreenTop + 15;
	newTab = window.open(
		url,
		title,
		"scrollbars=yes, width=" +
		Uwidth +
		", height=" +
		Uheight +
		", top=" +
		top +
		", left=" +
		left
	);

	// END: This block makes sure that the popup window is in the center of the page

	// Puts focus on the newWindow
	if (window.focus) {
		newTab.focus();
	}

	var pollTimer = window.setInterval(function () {
		if (newTab.closed !== false) {
			// !== is required for compatibility with Opera
			window.clearInterval(pollTimer);
			// someFunctionToCallWhenPopUpCloses();
			$("#myModal").modal("hide");
			clearInterval(statusInterval);
		}
	}, 200);

	/**
	 * This block sends an API request to the hosted page middleware
	 * and passing the `merchantId` as the parameter
	 *
	 * 1. verify merchant GET /merchants/:merchantId, check status if "created"
	 * 2. next is generate the token
	 */

	verifyMerchant(merchantId)
		.then(data => {
			// debugger
			console.log(data);
			// if (data.status == "created") {

			// Request for access token
			// POST /authenticate 
			// https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/api-docs/#/access_token_for_generating_payment_tokenId/post_authenticate

			getAccessToken("27kemc733pgrbunbfqda34r419", "17s80fgag9am2824m7404hghijbs31be93kn1787kf90tjf0b6b9")
				.then(data => {

					accessToken = data.accessToken;

					// debugger

					console.log(accessToken)

					// Request token now

					let payload = {
						amount: amount,
						currency: currency.toString(),
						email: email.toString(),
						promotion: promotion,
						orderId: payment_ref
					}

					getPaymentToken(merchantId, payload, accessToken)
						.then(data => {
							// Pass the hosted-page passing the `data.token` (response from the previous fetch call) as the parameter
							console.log(data)
							debugger
							// Local development url
							if (data.token === undefined) {
								throw new Error("Token is not defined")
							} else {
								newTab.location.href = `http://localhost:8080/m/${merchantId}/#/pay/${data.token}`;

								// Remote development environment or your production env
								// newTab.location.href = `http://connect.reddotpay.sg/#/pay/${merchantId}/${data.token}`;
							}
						})
						.catch(function (error) {
							// Handle errors here
							status.innerText = error.message;
							console.log(
								"There has been a problem with your fetch operation: ",
								error.message
							);
						})
						.finally(() => {
							// A script calls the status of the status payment by passing the
							// merchantId and the payment_ref as the parameter.
							// Once the data.status is `capture` (statuses are always present tense),
							// the process is completed

							statusInterval = setInterval(() => {
								getPaymentStatus(merchantId, payment_ref, accessToken).then(data => {
									if (data.status == "capture") {
										clearInterval(statusInterval);
										console.log("Status: ", data.status);
										// statusBox.innerText = "Order paid!";
										// $("#success").show();
										// $("#loading").hide();
										document.location.href = "/";
									} else if (
										data.status == "pending" ||
										data.status == "authorize"
									) {
										console.log("Status: ", data.status);
										// statusBox.innerText =
										// 	"Waiting for response from the checkout page...";
									} else {
										clearInterval(interval);
										console.log("Status: ", data.status);
										// statusBox.innerText =
										// 	"Something went wrong... Please try again.";
									}
								});
							}, 3000);
						});

				})
				.catch(error => {
					console.log(error)
				})
			// }
		});
}

function checkFirst(e) {
	e.preventDefault();
}
