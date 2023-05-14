@Logout
Feature: Logout

Background: user already login
    Given User go to login page
    When User input email field with valid email
    And User input password field with valid password
    And User click Masuk button
    And User successfully login
    
Scenario: User can logout
    When User click account button
    And User click Keluar
    Then User successfully logout