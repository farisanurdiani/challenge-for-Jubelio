package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import java.util.concurrent.ConcurrentHashMap.KeySetView

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

import org.openqa.selenium.Keys as Keys

class Set_Stock {

	@When("User click Barang span")
	public void user_click_Barang_span() {
		WebUI.click(findTestObject('Home_Page/span_barang'))
	}

	@And("User click Persediaan span")
	public void user_click_Persediaan_span() {
		WebUI.click(findTestObject('Home_Page/span_persediaan'))
		WebUI.verifyElementVisible(findTestObject('Home_Page_Persediaan/text_persediaan'))
	}

	@And("User click Penyesuaian Persediaan button")
	public void user_click_Penyesuaian_Persediaan_button() {
		WebUI.click(findTestObject('Home_Page_Persediaan/button_penyesuaian_persediaan'))
		WebUI.verifyElementVisible(findTestObject('Page_Penyesuaian_Persediaan/text_penyesuaian_persediaan'))
	}

	@And("User select product SKU")
	public void user_select_product_SKU() {
		WebUI.doubleClick(findTestObject('Page_Penyesuaian_Persediaan/span_harap_pilih'))
		WebUI.setText(findTestObject('Page_Penyesuaian_Persediaan/input_sku'), '12949028')
		WebUI.waitForElementVisible(findTestObject('Page_Penyesuaian_Persediaan/input_sku'), 10)
		WebUI.sendKeys(findTestObject('Page_Penyesuaian_Persediaan/input_sku'), Keys.chord(Keys.ENTER))
	}

	@And("User input stock")
	public void user_input_stock() {
		WebUI.doubleClick(findTestObject('Page_Penyesuaian_Persediaan/field_quantity'))
		WebUI.setText(findTestObject('Page_Penyesuaian_Persediaan/input_editor'), '20')
	}

	@And("User click Simpan button")
	public void user_click_Simpan_button() {
		WebUI.scrollToElement(findTestObject('Page_Penyesuaian_Persediaan/button_simpan'), 0)
		WebUI.click(findTestObject('Page_Penyesuaian_Persediaan/button_simpan'))
	}

	@Then("User successfully edit stock")
	public void user_successfully_edit_stock() {
		WebUI.verifyElementPresent(findTestObject('Home_Page_Persediaan/text_persediaan'), 0)
	}
}