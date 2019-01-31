// RedDotPay Hosted Page JavaScript Development Kit

const config = {
	authDomain: "https://rg4fgp2oag.execute-api.ap-southeast-1.amazonaws.com/prod/v1",
	domain: "https://connect.reddotpay.sg",
	popup: {
		title: "Red Dot Pay",
		width: 800,
		height: 600,
	},
	statusCheckFrequency: 3*1000 // every 3 seconds
}

const popup = null;

export default class Pay {
	constructor({
		merchantId,
		clientId,
		secret,
		payload
	}) {
		console.log(merchantId, clientId, secret, payload)
		this.merchantId = merchantId;
		this.clientId = clientId;
		this.secret = secret;
		this.payload = payload;
		this.initialized = false;
		this.accessToken = null;

		this.popup = popup;

		console.log("merchantId >>>", merchantId)
	}

	init() {
		if (this.initialized) {
			this.destroy();
		}

		this.pay();

		this.initialized = true;

	}

	async _verifyMerchant(merchantId) {
		console.log("verifyMerchant >>>>>>>>>>>>>", merchantId)

		let data = await fetch(
			`${config.authDomain}/merchants/${merchantId}`, {
				method: "GET",
				credentials: "same-origin",
				mode: "cors",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				}
			}
		)

		return await data.json();
	}

	async _getAccessToken(client, secret) {
		console.log("getAccessToken >>>>>>>>>>>>>", client, secret)
		let data = await fetch(
			`${config.authDomain}/authenticate`, {
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

	async _getPaymentStatus(mid, payment_ref) {
		console.log("getPaymentStatus >>>>>>>>>>>>>", mid, payment_ref)
		let data = await fetch(
				`${config.authDomain}/payments/token/${mid}/status/${payment_ref}`
			)

		return await data.json();
	}

	async _getPaymentToken(accessToken, merchantId, payload) {
		console.log("_getPaymentToken >>>>>>>>>>>>>", accessToken, merchantId, payload)
		let data = await fetch(
			`${config.authDomain}/payments/token/${merchantId}`, {
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

	openPopup() {
		// PopupCenter

		// let url =  `http://view-pay-redirect.herokuapp.com/pay/verify`;//,"MyWindow", 1024, 768)//"config='toolbar=no, menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'")
		let url = `${config.domain}/m/${this.merchantId}/#/pay`;

		// START: This block makes sure that the popup window is in the center of the page
		let dualScreenLeft =
			window.screenLeft != undefined ? window.screenLeft : screen.left;
		let dualScreenTop =
			window.screenTop != undefined ? window.screenTop : screen.top;

		let width = window.innerWidth ?
			window.innerWidth :
			document.documentElement.clientWidth ?
			document.documentElement.clientWidth :
			screen.width;
		let height = window.innerHeight ?
			window.innerHeight :
			document.documentElement.clientHeight ?
			document.documentElement.clientHeight :
			screen.height;

		let left = width / 2 - config.popup.width / 2 + dualScreenLeft;
		let top = height / 2 - config.popup.height / 2 + dualScreenTop + 15;
		this.popup = window.open(
			url,
			config.popup.title,
			"scrollbars=yes, width=" +
			config.popup.width +
			", height=" +
			config.popup.height +
			", top=" +
			top +
			", left=" +
			left
		);

		// END: This block makes sure that the popup window is in the center of the page

		// Puts focus on the newWindow
		if (window.focus) {
			this.popup.focus();
		}
	}

	async pay() {
		console.log(">>>>>>>>>> pay")
		this.openPopup();
		// let verifyMerchant = await this._verifyMerchant()

		let verifyMerchant = await this._verifyMerchant(this.merchantId).catch(err => {
			throw new Error("Something went wrong while validating the merchant: ", err)
			this.popup.location.href = `${config.domain}/m/${this.merchantId}/#/500`;

		})
		if (typeof verifyMerchant === "object") {
			let accessToken = await this._getAccessToken(this.clientId, this.secret);
			console.log(accessToken);

			this._getPaymentToken(accessToken.accessToken, this.merchantId, this.payload)
				.then(response => {
					// redirect to new url
					if (response.token === undefined) {
						this.popup.location.href = `${config.domain}/m/${this.merchantId}/#/500`;
						throw new Error("Something went wrong: Token is not defined")
					} else {
						this.popup.location.href = `${config.domain}/m/${this.merchantId}/#/pay/${response.token}`;

						// Remote development environment or your production env
						// this.popup.location.href = `http://connect.reddotpay.sg/#/pay/${merchantId}/${data.token}`;

						// Start timer to check payment status if = `captured`

						let statusInterval = setInterval(() => {
							this._getPaymentStatus(this.merchantId, this.payload.orderId)
								.then((response)=> {
									if (response.status == "capture") {
										clearInterval(statusInterval);
										console.log("Status: ", response.status);
										// statusBox.innerText = "Order paid!";
										// $("#success").show();
										// $("#loading").hide();
										document.location.href = "/";
									} else if (
										response.status == "pending" ||
										response.status == "authorize"
									) {
										console.log("Status: ", response.status);
										// statusBox.innerText = "Waiting for response from the checkout page...";
									} else {
										clearInterval(interval);
										console.log("Status: ", response.status);
										// statusBox.innerText = "Something went wrong... Please try again.";
									}
								})
								}, config.statusCheckFrequency);
					}
				})
				.catch(err => {
					this.popup.location.href = `${config.domain}/m/${this.merchantId}/#/500`;
					throw new Error('Something went wrong while getting the payment token: ', err)
				})
		}

		// this._getAccessToken(this.clientId, this.secret)
		// 	.then(response => {
		// 		this.accessToken = response.accessToken
		// 		this._getPaymentToken()
		// 	})
	}

	destroy() {
		// assign to `null` elements that are creted by this initially

		// unset initialized value to true
		this.initialized = false;
	}
}
