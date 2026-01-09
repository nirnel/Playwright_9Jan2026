import { test, expect } from '@playwright/test';
import * as helpers from '../utils/commonHelpers.js';
import { Page_Locators } from '../Locators/Locators.js';

const data = helpers.readExcelData('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx');
const InputData = helpers.readExcelDataForTestCase('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx','LabelName','Test01');

test('Mate Tools Site', async ({ page }) => {
  
  const x_locator = new Page_Locators(page);
  const BaseURL = "https://mate.tools/household-inventory-manager";
  await page.goto(BaseURL);
  await expect(page).toHaveTitle('Household Inventory Manager online (Free Tool)');       
  await expect(page).toHaveURL(BaseURL);  
  await expect(x_locator.matetools_Main_TextBox_ItemName).toBeVisible();
  
  const ChromeWindow_locator = await helpers.SwitchToWindow(page, x_locator.matetools_Button_AddtoChrome);
  await expect(ChromeWindow_locator.matetools_Chrome_TextBox_Search).toBeVisible();
  
  const EdgeWindow_locator = await helpers.SwitchToWindow(page, x_locator.matetools_Button_AddtoEdge);
  await expect(EdgeWindow_locator.matetools_Edge_TextBox_Search).toBeVisible();
  
  const FireFoxWindow_locator = await helpers.SwitchToWindow(page, x_locator.matetools_Button_AddtoFirefox);
  await expect(FireFoxWindow_locator.matetools_FireFox_TextBox_Search).toBeVisible();
  

});


