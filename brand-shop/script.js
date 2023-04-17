var siteName = "Brand Shop";
var domain = window.location.host;
var userAgent = navigator.appCodeName + " " + navigator.appVersion;

var header = {
  "alg": "HS256",
  "typ": "JWT"
};

var payload = {
    "issuer": "signature",
    "site_name": siteName,
    "url": domain,
    "browser": userAgent,
};

var verifySignature = "signature";

var encodedHeader = btoa(JSON.stringify(header));
var encodedPayload = btoa(JSON.stringify(payload));
var encodedSignature = btoa(JSON.stringify(verifySignature));


var token = encodedHeader + "." + encodedPayload + "." + encodedSignature;


var qrCode = new QRCode(document.getElementById("qrcode"), {
    text: token,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
