@Set_Stock
Feature: Set_Stock

Background: user already login
    Given User go to login page
    When User input email field with valid email
    And User input password field with valid password
    And User click Masuk button
    And User successfully login
    
Scenario: User can edit stock of product
    When User click Barang span
    And User click Persediaan span
    And User click Penyesuaian Persediaan button
    And User select product SKU
    And User input stock
    And User click Simpan button
    Then User successfully edit stock