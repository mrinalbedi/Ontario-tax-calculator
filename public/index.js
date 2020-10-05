import Framework7 from 'framework7/framework7.esm.bundle'
import $$ from 'dom7';
const HST = require("./HST.js");

// Init F7
const app = new Framework7({
  root: '#app',
  theme: 'auto',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
});

let nIncome = 0;
let nTax = 0;
let nOwing = 0;

$$("#adding").on("submit", evt => {
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")
  nIncome = Number(oData.amount);
  if (nIncome < 0) {
    $$("#ErrorMessage").html("The Taxable income you entered has been converted into a positive number and the calculations have been done");

  }
  nIncome = Math.abs(nIncome);
  nTax = Number(oData.tax);
  const nHst = HST.calculate(nIncome);
  const nFederal = HST.CalculateFederal(nIncome);
  nOwing =Math.abs( nHst - nTax);
  $$("#hst").html(nHst);
  // $$("#owing").html(nOwing);
  $$("#federal").html(nFederal);
  $$("#total").html(nHst + nFederal);
  $$("#owing").html((nHst + nFederal - nTax).toFixed(2));
  $$("#subtotal").html(nIncome);
});


$$('#amount').on('keyup', function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    $$('.tax').focus();
  }
});
