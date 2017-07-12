$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile.feature");
formatter.feature({
  "line": 1,
  "name": "Search phone with largest storage",
  "description": "Search the phone on amazon.co.uk.\r\nPrint the name and price of the phone.",
  "id": "search-phone-with-largest-storage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search Phone",
  "description": "",
  "id": "search-phone-with-largest-storage;search-phone",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is on amazon.co.uk page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user seraches phone with largest storage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user print the name and price of the phone",
  "keyword": "Then "
});
formatter.match({
  "location": "Amazon.navigate()"
});
formatter.result({
  "duration": 32137144310,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Amazon.co.uk\"}\nCommand duration or timeout: 2.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Vivek-PC\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d40.0.3, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ba42fbe7-6a99-4f0d-b21a-e80e1369ac33\n*** Element info: {Using\u003dpartial link text, value\u003dAmazon.co.uk}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByPartialLinkText(RemoteWebDriver.java:409)\r\n\tat org.openqa.selenium.By$ByPartialLinkText.findElement(By.java:269)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.cucumber.StepDefinitions.Amazon.navigate(Amazon.java:29)\r\n\tat ✽.Given user is on amazon.co.uk page(featurefile.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Amazon.co.uk\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Vivek-PC\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/vivek/AppData/Local/Temp/anonymous8558724030041202293webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10271)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/vivek/AppData/Local/Temp/anonymous8558724030041202293webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10280)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/vivek/AppData/Local/Temp/anonymous8558724030041202293webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12274)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/vivek/AppData/Local/Temp/anonymous8558724030041202293webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12279)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/vivek/AppData/Local/Temp/anonymous8558724030041202293webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12221)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Amazon.Printresult()"
});
formatter.result({
  "status": "skipped"
});
});