var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload = function(readerEvt) {
            var base64 = readerEvt.target.result;
            var base64 = window.btoa(base64)
            document.getElementById('base64').innerHTML = base64
            document.getElementById('previewCSS').innerHTML = "@font-face {font-family: 'fontPreview'; src: url('data:application/octet-stream;base64," + base64 + "')}"

            // Clean font name since truetype.js won't work.
            function capitalize(s){
                return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
            };
            fontName = document.getElementById('fontSelect').files[0].name.replace(/-|_/g, ' ')
            fontName = fontName.replace(/f[^a-z]demo[^a-z]|[^a-z]personal[^a-z]Use[^a-z]|[^a-z]font\ family[^a-z]|[^a-z]fontfamily[^a-z]|font|[^a-z]demo[^a-z]|ffp|ttf|otf|\./gi, '')
            fontName = capitalize(fontName)
            document.getElementById('fontName').value = fontName
            document.getElementById('fontName').placeholder = fontName
        };
        reader.readAsBinaryString(file);
    }
  };
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('fontSelect').addEventListener('change', handleFileSelect, false);
} else {
    alert('Sadly, your browser isn\'t compatible. Try using Safari.');
}

function generateHTML() {
// The only reason this works is because of the data: url scheme.
var fontSelect = document.getElementById('fontSelect')
var fontName = document.getElementById('fontName').value
base64 = document.getElementById('base64').innerHTML

var xmlString = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>ConsentText</key><dict><key>default</key><string>This profie will install the font "' + fontName + '" onto your device. To use the font, use an app like Pages. You can uninstall the font by removing this profile.</string></dict><key>PayloadContent</key><array><dict><key>Font</key><data>' + base64 +'</data><key>Name</key><string>' + fontName + '</string><key>PayloadDescription</key><string>Configures Font settings</string><key>PayloadDisplayName</key><string>Fonts</string><key>PayloadIdentifier</key><string>com.apple.font.CA9DD3A4-DA14-4D5A-84F8-0E90BC4360D2</string><key>PayloadType</key><string>com.apple.font</string><key>PayloadUUID</key><string>4A79228B-717E-44B0-8F53-9EF64F4C18A0</string><key>PayloadVersion</key><integer>1</integer></dict></array><key>PayloadDescription</key><string>Installs the font "' + fontName + '" onto your device.</string><key>PayloadDisplayName</key><string>Font - ' + fontName + '</string><key>PayloadIdentifier</key><string>heyitsshuga.FontPages.' + fontName + '</string><key>PayloadOrganization</key><string>FontPages by HeyItsShuga</string><key>PayloadRemovalDisallowed</key><false/><key>PayloadType</key><string>Configuration</string><key>PayloadUUID</key><string>CCA9B4E7-7E4B-4AF6-9EDC-478B6FE7B065</string><key>PayloadVersion</key><integer>1</integer></dict></plist>'
var encodedXml = window.btoa(xmlString)
// Download/generate profile
window.location = 'data:application/x-apple-aspen-config;base64,' + encodedXml
}

var myApp = new Framework7();

// Featured Fonts
$$('#tab2').on('tab:show', function () {
  if (document.getElementById('isTab2').innerHTML === "[DEBUG] Loaded Featured.") {
    console.log('Already loaded.')
  } else {
    console.log('Not loaded!')
    var mySwiper1 = myApp.swiper('.swiper-1', {
      pagination:'.swiper-1 .swiper-pagination',
      spaceBetween: 20,
      autoplay: 5000,
      loop: true
    });
    document.getElementById('isTab2').innerHTML = "[DEBUG] Loaded Featured."
  }
});

// _blank links open in Safari
document.getElementById("safari1").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari2").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari3").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari4").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari5").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari6").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari7").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari8").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
