import { test, expect } from '@playwright/test';
import * as helpers from '../utils/commonHelpers.js';
import { Locators } from '../Locators/Locators.js';

const data = helpers.readExcelData('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx');
const InputData = helpers.readExcelDataForTestCase('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx','LabelName','Test01');

test('Validate DEMOQA Site', async ({ page }) => {
    const x_locator = new Locators(page);

  const BaseURL = "https://scriptng.com/practise-site/selenium-iframe-automation-practice/";
  await page.goto(BaseURL);
  page.locator('div[id="elementor-tab-title-1683"]').click();
  //page.locator('button[id="iframe-button"]').click();
  await page.getByText('Load Nested Content', { exact: true }).click();                



const frames = page.frames();
frames.forEach((frame, i) => {
  console.log(`Index ${i}: URL=${frame.url()} Name=${frame.name()} Parent=${frame.parentFrame()?.name()}`);
});

const parentFrame = page.frameLocator('#parent-iframe');
await parentFrame.locator('h4').waitFor();   // iframe content is loaded dynamically and the element may not be immediately available
await expect(parentFrame.locator('h4')).toHaveText('Parent IFrame');

const childFrame = parentFrame.frameLocator('#nested-iframe');
await expect(childFrame.locator('p')).toHaveText('This is the nested iframe content.');

await page.waitForTimeout(2000); // pauses for 7 seconds 
await expect(page.locator('div[class="iframe-practice-container"]')).toBeVisible();

});