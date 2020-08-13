# Working with Children Checker
This project aims to simplify the validation of working with children checks in all Australian states by automating the entire process and turning it into a node package.

## Motivation
I got the idea for this project when working on an application for a company that performed working with children checks as part of its day to day. The process is laborious and every state has their own validation tool. In Australia, anyone who wants to work with children in any capacity (teacher, volunteer, etc) is required to undergo one of these checks. I wanted to build something that would make it easier and more convenient for businesses and individuals who perform these check regularly.

## Technologies Used
* Node.js
* Selenium WebDriver
* Chromedriver
* Geckodriver

## Usage
Calling the state functions will use selenium to open a browser and input the information. In cases where a captcha is not present, it will submit the information and return the result before closing the browser. In cases where a captcha is present it will autofill the information and wait for the user to complete the captcha and final submission.
### Functions
#### qld(detailsToCheck)
Takes an object as input and fully automates the validation for Queensland. Returns string result from check.
```
// Expected input
 detailsToCheck = {
   fullName: 'Full name of searchee',
   registrationNumber: 'Registration number of working with children check'
   issueNumber: 'Issue number of working with children check'
   expiryDay: 'Expiry day of working with children check'
   expiryMonth: 'Expiry Month of working with children check written as Jan, Feb, Mar, etc'
   expiryYear: 'Expiry Year of working with children check'
 }
```
### vic(detailsToBeChecked)
Takes an object as input and fully automates the validation for Victoria. Returns string result from check.
``` 
// Expected input
 detailsToCheck = {
   lastName: 'Surname of searchee',
   registrationNumber: 'Registration number of working with children check'
 }
```
### wa(detailsToBeChecked)
Takes an object as input and fully automates the validation for West Australia. Returns string result from check.
``` 
// Expected input
 detailsToCheck = {
   lastName: 'Surname of searchee',
   registrationNumber: 'Registration number of working with children check'
 }
```
### tas(detailsToBeChecked)
Takes an object as input and fully automates the validation for Tasmania. Returns string result from check.
``` 
// Expected input
 detailsToCheck = {
   lastName: 'Surname of searchee',
   registrationNumber: 'Registration number of working with children check'
 }
```
<!-- ### nsw(detailsToBeChecked, user)
New South Wales requires information of the user conducting the search and that of the searchee. Will not submit due to captcha but will autofll the form.
```
// Expected input
 detailsToCheck = {
   lastName: 'Last name of searchee',
   dob: 'Date of birth of searchee',
   registrationNumber: 'Registration number of working with children check'
 }

 user = {
   name: 'Users name',
   email: 'Users email',
   phone: 'Users contact number'
 }  
```
### sa(detailsToBeChecked, user)
South Australia requires information of the user conducting the search and that of the searchee. Will not submit due to captcha but will autofll the form.
```
// Expected input
 detailsToCheck = {
   lastName: 'Last name of searchee',
   dob: 'Date of birth of searchee',
   registrationNumber: 'Registration number of working with children check'
 }

 user = {
   name: 'Users name',
   email: 'Users email',
   phone: 'Users contact number'
 }  
```
### nt(detailsToBeChecked)
Northern Territory will not submit due to captcha, but will autofill the form.
```
// Expected input
 detailsToCheck = {
   lastName: 'Last name of searchee',
   dob: 'Date of birth of searchee',
   registrationNumber: 'Registration number of working with children check'
 }  
```-->
Currently the functions for NSW, SA and NT are disabled due to the presence of captchas on the validation sites. Functions have been created to autofill the data, however the browser detects selenium and forces the user to solve multiple questions. This currently take more time than it would take the user to do manually. I am searching for a workaround. 