package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class Login {

	@Given("User go to login page")
	public void user_go_to_login_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://app.jubelio.com/login')
		WebUI.verifyElementVisible(findTestObject('Login_Page/img_jubelio'))
	}

	@When("User input email field with valid email")
	public void user_input_email_field_with_valid_email() {
		WebUI.setText(findTestObject('Login_Page/input_email'), 'qa.rakamin.jubelio@gmail.com')
	}

	@When("User input email field with unregistered email")
	public void user_input_email_field_with_unregistered_email() {
		WebUI.setText(findTestObject('Login_Page/input_email'), 'farisanurdiani@gmail.com')
	}

	@When("User input email field with invalid email")
	public void user_input_email_field_with_invalid_email() {
		WebUI.setText(findTestObject('Login_Page/input_email'), 'qa.rakamin.jubelio@mail.com')
	}

	@And("User input password field with valid password")
	public void user_input_password_field_with_valid_password() {
		WebUI.setText(findTestObject('Login_Page/input_password'), 'Jubelio123!')
	}

	@And("User input password field with invalid password")
	public void user_input_password_field_with_invalid_password() {
		WebUI.setText(findTestObject('Login_Page/input_password'), 'Jubelio12')
	}

	@And("User click Masuk button")
	public void user_click_Masuk_button() {
		WebUI.click(findTestObject('Login_page/button_masuk'))
	}

	@Then("User failed login")
	public void user_failed_login() {
		WebUI.verifyElementVisible(findTestObject('Login_page/message_password_atau_email_salah'))
		WebUI.verifyElementVisible(findTestObject('Login_page/img_jubelio'))
	}

	@Then("User successfully login")
	public void user_succesfully_login() {
		WebUI.verifyElementVisible(findTestObject('Home_page/text_selamat_datang'))
	}
}
