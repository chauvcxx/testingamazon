Feature: Search phone with largest storage
Search the phone on amazon.co.uk.
Print the name and price of the phone.


Scenario: Search Phone

Given user is on amazon.co.uk page
When user seraches phone with largest storage
Then user print the name and price of the phone
