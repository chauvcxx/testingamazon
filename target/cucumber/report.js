$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile.feature");
formatter.feature({
  "line": 2,
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
  "duration": 932852388,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:738)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:115)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:330)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:108)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:104)\r\n\tat com.cucumber.StepDefinitions.Amazon.navigate(Amazon.java:18)\r\n\tat ✽.Given user is on amazon.co.uk page(featurefile.feature:8)\r\n",
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