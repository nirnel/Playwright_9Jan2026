import { test, expect } from '@playwright/test';
import * as helpers from '../utils/commonHelpers.js';
import { Locators } from '../Locators/Locators.js';

const data = helpers.readExcelData('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx');
const InputData = helpers.readExcelDataForTestCase('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx','LabelName','Test01');

test('Validate artist categories from Excel', async ({ page }) => {
    const x_locator = new Locators(page);

  const BaseURL = "https://www.concertcraze.com/";
  await page.goto(BaseURL);
  await expect(page).toHaveTitle('Concertpass');
  await expect(x_locator.Home_CenterHeader).toHaveText('Book Your Live Concert Pass');
  await helpers.validateUIvsExcel(page, x_locator.General_MainTabs, data, 'Header_concertCrazeTabs');

  await x_locator.General_Button_InstantBooking.click();
  await page.waitForURL(BaseURL + 'home/InstantBooking');
  await x_locator.General_Tab_Concerts.click();
  await page.waitForURL(BaseURL + 'home/Concerts');
  // Go back to the previous page
  await page.goBack();
  await page.waitForURL(BaseURL + 'home/InstantBooking');
  // Reload current pahe
  await page.reload();
  await page.waitForURL(BaseURL + 'home/InstantBooking');
  // Go forward
  await page.goForward();
  await page.waitForURL(BaseURL + 'home/Concerts');
  await x_locator.General_Tab_Home.click();

  await expect(x_locator.General_SearchCategory_TextBox).toHaveAttribute('placeholder', 'Search Category');
  await x_locator.General_SearchCategory_TextBox.click();
  await x_locator.General_SearchCategory_Dancer.waitFor();
  await x_locator.General_SearchCategory_Dancer.click();
  await expect(x_locator.General_Popup_Header).toBeVisible();

  await x_locator.General_Popup_Fields_EnterName.fill(InputData.EnterName);

   // ✅ Convert number to string before filling
  await x_locator.General_Popup_Fields_EnterMobileNo.type("9885645321");
  await page.waitForTimeout(1000); // pauses for 1 seconds
  await x_locator.General_Popup_Fields_EnterMobileNo.fill(String(InputData.EnterMobileNo));

  await x_locator.General_Popup_Fields_EnterEmail.fill(InputData.EnterEmail);

  await x_locator.General_Popup_Fields_SelectGenre.selectOption({ label: InputData.SelectGenre });
  await x_locator.General_Popup_Fields_SelectEvent.selectOption({ index: InputData.SelectEvent });
  await x_locator.General_Popup_Fields_SelectLocationType.selectOption({ label: InputData.SelectLocationType });
  await x_locator.General_Popup_Fields_EnterLocationHere.fill(InputData.EnterLocationHere);
  await x_locator.General_Popup_Fields_SelectBudget.selectOption({ index: InputData.SelectBudget });

  await page.waitForTimeout(3000); // pauses for 3 seconds


  


});