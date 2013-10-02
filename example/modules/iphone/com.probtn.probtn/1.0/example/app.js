// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// Load module and open button
if ((Ti.Platform.name == "iphone") || (Ti.Platform.name == "ipad")) {
	var probtn = require('com.probtn.probtn');
	probtn.open();
}
