@Login
Feature: Login

  Scenario Outline: User can login with <condition>
    Given User go to login page
    When User input email field with <email> email
    And User input password field with <password> password
    And User click Masuk button
    Then User <result> login

    Examples: 
      | case_id | condition           | email        | password | result       |
      | A01     | correct credentials | valid        | valid    | successfully |
      | A02     | unregistered email  | unregistered | valid    | failed       |
      | A03     | invalid password    | valid        | invalid  | failed       |
      | A04     | invalid email       | invalid      | valid    | failed       |