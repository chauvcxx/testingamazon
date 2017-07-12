package com.cucumber.StepDefinitions;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;



public class Amazon {
	WebDriver dr;

    @Given("^user is on amazon.co.uk page$")
    public void navigate(){
              dr=new FirefoxDriver();
              //String tagName = "";
    	   dr.get("http://www.google.co.uk");
    	   WebElement tagName = dr.findElement(By.cssSelector("input#lst-ib"));
    	    	tagName.sendKeys("amazon.co.uk");
    	    	tagName.submit();
    	   dr.findElement(By.partialLinkText("Amazon.co.uk")).click();
    		
    			   
    }


    @When("^user searches phone with largest storage$")
    public void UserSeraches(){
    	WebElement Storage = dr.findElement(By.id("variation_size_name"));
    	 Storage.getText();
    }

    @Then("^user print the name and price of the phone$")
    public void Printresult(){
    	
    	WebElement phone = dr.findElement(By.id("titleSection"));
    			
    	WebElement price = dr.findElement(By.id("priceblock_ourprice_row"));
    			
    	System.out.println(phone.getText());
    	System.out.println(price.getText());
        dr.close();
        System.exit(0);
    }
}