
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

function submitForm(e) {
  let statusBox = document.getElementById("status");
  
  let merchantId = document.getElementById("mid").value;
  let amount = document.getElementById("amount").value;
  let currency = document.getElementById("currency").value;
  let email = document.getElementById("email").value;
  let promotion = document.getElementById("promotion").value;
  let payment_ref = makeId(); //document.getElementById("paymentRef").value;
  let statusInterval;


  $("#myModal").modal("show");
  e.preventDefault();
  let btn = this;
  btn.disabled = true;
  statusBox.innerText = "Processing payment...";

  // PopupCenter
  let title = 'Red Dot Pay'
  let Uheight = 600;
  let Uwidth = 800;
  // let url =  `http://view-pay-redirect.herokuapp.com/pay/verify`;//,"MyWindow", 1024, 768)//"config='toolbar=no, menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'")

  // START: This block makes sure that the popup window is in the center of the page
  var dualScreenLeft =
    window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop =
    window.screenTop != undefined ? window.screenTop : screen.top;

  width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  var left = width / 2 - Uwidth / 2 + dualScreenLeft;
  var top = (height / 2 - Uheight / 2 + dualScreenTop) + 15; 
  newTab = window.open(
    "about:blank",
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

  var pollTimer = window.setInterval(function() {
      if (newTab.closed !== false) { // !== is required for compatibility with Opera
          window.clearInterval(pollTimer);
          // someFunctionToCallWhenPopUpCloses();
          $("#myModal").modal("hide");
          clearInterval(statusInterval);
      }
  }, 200);

  /** 
   * This block sends an API request to the hosted page middleware 
   * and passing the `merchandId` as the parameter
   * @param {string} merchantId - merchantId of the merchant. 
   * @returns {object}
   */
  fetch(
    `https://api-pay-redirect.herokuapp.com/api/v1/payments/token/${merchantId}`,
    {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        amount: amount,
        currency: currency.toString(),
        email: email.toString(),
        promotion: promotion,
        orderId: payment_ref
      })
    }
  )
  .then(response => {
    return response.json();
  })
  .then(data => {

    // Pass the hosted-page passing the `data.token` as the parameter

    // Local development url
    newTab.location.href = `http://connect.reddotpay.sg/pay/${data.token}`;

    // Remote development environment or your production env
    // newTab.location.href = `http://view-pay-redirect.herokuapp.com/pay/${data.token}`;

  })
  .catch(function(error) {
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
      fetch(
        `https://api-pay-redirect.herokuapp.com/api/v1/payments/token/${merchantId}/status/${payment_ref}`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.status == "capture") {
            clearInterval(statusInterval);
            console.log("Status: ", data.status);
            statusBox.innerText = "Order paid!";
            $("#success").show();
            $("#loading").hide();
            document.location.href = "/";
          } else if (
            data.status == "pending" ||
            data.status == "authorize"
          ) {
            console.log("Status: ", data.status);
            statusBox.innerText =
              "Waiting for response from the checkout page...";
          } else {
            clearInterval(interval);
            console.log("Status: ", data.status);
            statusBox.innerText =
              "Something went wrong... Please try again.";
          }
        });
    }, 3000);
  });
}

function checkFirst(e) {
  e.preventDefault();
}