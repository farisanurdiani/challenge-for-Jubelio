$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can login with \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input email field with \u003cemail\u003e email",
  "keyword": "When "
});
formatter.step({
  "name": "User input password field with \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "User \u003cresult\u003e login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "condition",
        "email",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "A01",
        "correct credentials",
        "valid",
        "valid",
        "successfully"
      ]
    },
    {
      "cells": [
        "A02",
        "unregistered email",
        "unregistered",
        "valid",
        "failed"
      ]
    },
    {
      "cells": [
        "A03",
        "invalid password",
        "valid",
        "invalid",
        "failed"
      ]
    },
    {
      "cells": [
        "A04",
        "invalid email",
        "invalid",
        "valid",
        "failed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can login with correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with valid email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_succesfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with unregistered email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with unregistered email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_unregistered_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_failed_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with valid email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_failed_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login with invalid email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with invalid email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_invalid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_failed_login()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with valid email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_succesfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "User click account button",
  "keyword": "When "
});
formatter.match({
  "location": "Logout.user_click_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Keluar",
  "keyword": "And "
});
formatter.match({
  "location": "Logout.user_click_Keluar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.user_succesfully_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Set_Stock.feature");
formatter.feature({
  "name": "Set_Stock",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Set_Stock"
    }
  ]
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_go_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email field with valid email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_email_field_with_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password field with valid password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_input_password_field_with_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_succesfully_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can edit stock of product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Set_Stock"
    }
  ]
});
formatter.step({
  "name": "User click Barang span",
  "keyword": "When "
});
formatter.match({
  "location": "Set_Stock.user_click_Barang_span()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Persediaan span",
  "keyword": "And "
});
formatter.match({
  "location": "Set_Stock.user_click_Persediaan_span()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Penyesuaian Persediaan button",
  "keyword": "And "
});
formatter.match({
  "location": "Set_Stock.user_click_Penyesuaian_Persediaan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select product SKU",
  "keyword": "And "
});
formatter.match({
  "location": "Set_Stock.user_select_product_SKU()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input stock",
  "keyword": "And "
});
formatter.match({
  "location": "Set_Stock.user_input_stock()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button",
  "keyword": "And "
});
formatter.match({
  "location": "Set_Stock.user_click_Simpan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User successfully edit stock",
  "keyword": "Then "
});
formatter.match({
  "location": "Set_Stock.user_successfully_edit_stock()"
});
formatter.result({
  "status": "passed"
});
});