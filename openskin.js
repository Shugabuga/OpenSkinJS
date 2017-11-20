// OpenSkinJS (c) HeyItsShuga. Licensed under MIT.
console.log("[OpenSkin] Loading application \"" + openskin + "\"");

function sanLite(str) {
  str = String(str).replace(/undefined|nil|null|\<|\>/g,"");
  return str;
}

var OpenSkin_jsonContents;
var OpenSkin_jsonAppName = openskin;
function OpenSkin() {
  this.application = openskin

  // default: remote JSON file [requires JQuery]
  this.get = function(url) {
    this.json = OpenSkin_jsonContents;
      $.getJSON(url, function(json) {
        OpenSkin_jsonContents = json;
        return json;
      });
      return OpenSkin_jsonContents;
   }
  
  // import via remote JSON file [requires JQuery]
  this.getJSON = function(url) {
    this.json = OpenSkin_jsonContents;
      $.getJSON(url, function(json) {
        OpenSkin_jsonContents = json;
        return json;
      });
      return OpenSkin_jsonContents;
   }
   
   // import via local string
   this.getStr = function(str) {
    OpenSkin_jsonContents = JSON.parse(str);
    return OpenSkin_jsonContents;
   }
   
   // import via object
   this.getObj = function(str) {
    OpenSkin_jsonContents = str;
    return OpenSkin_jsonContents;
   }

  this.load = function() {
    var element = "";

    element += ".navbar {" + sanLite(jsonContents.styles[0].header) + ";" + "}";
    element += "body {" + sanLite(jsonContents.styles[0].label) + "}";
    element += ".list-button, .button, .active {" + sanLite(jsonContents.styles[0].button) + "}";
    element += ".modal {" + sanLite(jsonContents.styles[0].alert) + "}";
    element += ".page-content {" + sanLite(jsonContents.styles[0].containerBackground) + "}";
    element += ".item-content, .card, .swiper-slide {" + sanLite(jsonContents.styles[0].cell) + "}";
    element += ".item-after {" + sanLite(jsonContents.styles[0].cellChevron) + "}";
    element += ".toolbar {" + sanLite(jsonContents.styles[0].toolbar) + "}";
    // iGBA methods are officially in the OpenSkin spec.
    element += "#emulatorPopup {" + sanLite(jsonContents.styles[0].emulatorBackground) + ";" + "}";
    element += "#emulatorTarget {" + sanLite(jsonContents.styles[0].emulatorScreen) + ";" + "}";
    element += "#triggerL {" + sanLite(jsonContents.styles[0].triggerL) + "}";
    element += "#triggerR {" + sanLite(jsonContents.styles[0].triggerR) + "}";
    element += "#center {" + sanLite(jsonContents.styles[0].center) + "}";
    element += "#right {" + sanLite(jsonContents.styles[0].right) + "}";
    element += "#left {" + sanLite(jsonContents.styles[0].left) + "}";
    element += "#up {" + sanLite(jsonContents.styles[0].up) + "}";
    element += "#down {" + sanLite(jsonContents.styles[0].down) + "}";
    element += "#aBtn {" + sanLite(jsonContents.styles[0].aBtn) + "}";
    element += "#bBtn {" + sanLite(jsonContents.styles[0].bBtn) + "}";
    element += "#startbtn {" + sanLite(jsonContents.styles[0].startBtn) + "}";
    element += "#select {" + sanLite(jsonContents.styles[0].select) + "}";

    if(jsonContents.styles[0][jsonAppName]) {
      element += ".navbar {" + sanLite(jsonContents.styles[0][jsonAppName][0].header) + ";" + "}";
      element += "body {" + sanLite(jsonContents.styles[0][jsonAppName][0].label) + "}";
      element += ".list-button, .button, .active {" + sanLite(jsonContents.styles[0][jsonAppName][0].button) + "}";
      element += ".modal {" + sanLite(jsonContents.styles[0][jsonAppName][0].alert) + "}";
      element += ".page-content {" + sanLite(jsonContents.styles[0][jsonAppName][0].containerBackground) + "}";
      element += ".item-content, .card, .swiper-slide {" + sanLite(jsonContents.styles[0][jsonAppName][0].cell) + "}";
      element += ".item-after {" + sanLite(jsonContents.styles[0][jsonAppName][0].cellChevron) + "}";
      element += ".toolbar {" + sanLite(jsonContents.styles[0][jsonAppName][0].toolbar) + "}";
      // iGBA methods are officially in the OpenSkin spec.
      element += "#emulatorPopup {" + sanLite(jsonContents.styles[0][jsonAppName][0].emulatorBackground) + ";" + "}";
      element += "#emulator_target {" + sanLite(jsonContents.styles[0][jsonAppName][0].emulatorScreen) + ";" + "}";
      element += "#triggerL {" + sanLite(jsonContents.styles[0][jsonAppName][0].triggerL) + "}";
      element += "#triggerR {" + sanLite(jsonContents.styles[0][jsonAppName][0].triggerR) + "}";
      element += "#center {" + sanLite(jsonContents.styles[0][jsonAppName][0].center) + "}";
      element += "#right {" + sanLite(jsonContents.styles[0][jsonAppName][0].right) + "}";
      element += "#left {" + sanLite(jsonContents.styles[0][jsonAppName][0].left) + "}";
      element += "#up {" + sanLite(jsonContents.styles[0][jsonAppName][0].up) + "}";
      element += "#down {" + sanLite(jsonContents.styles[0][jsonAppName][0].down) + "}";
      element += "#aBtn {" + sanLite(jsonContents.styles[0][jsonAppName][0].aBtn) + "}";
      element += "#bBtn {" + sanLite(jsonContents.styles[0][jsonAppName][0].bBtn) + "}";
      element += "#startbtn {" + sanLite(jsonContents.styles[0][jsonAppName][0].startBtn) + "}";
      element += "#select {" + sanLite(jsonContents.styles[0][jsonAppName][0].select) + "}";
    }

    // Custom CSS
    try {
      element += jsonContents.styles[0].custom[0][jsonAppName]
    } catch(n) {
      //
    }

    if(document.getElementById("openskin_stylesheet")) {
      document.getElementById("openskin_stylesheet").innerHTML = element;
    } else {
      var style = document.createElement("style");
      style.id = "openskin_stylesheet";
      style.innerHTML = element;
      document.head.appendChild(style);
    }

    return true
  }
  this.skin = function(url) {
    return OpenSkin_jsonContents;
  }
}
var OpenSkin = new OpenSkin()
