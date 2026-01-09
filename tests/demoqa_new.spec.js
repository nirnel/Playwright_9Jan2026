import { test, expect } from '@playwright/test';
import * as helpers from '../utils/commonHelpers.js';
import { Page_Locators } from '../Locators/Locators.js';

const data = helpers.readExcelData('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx');
const InputData = helpers.readExcelDataForTestCase('C:/Users/HP/OneDrive/Desktop/bookplay.xlsx','LabelName','Test01');

test('Validate DEMOQA Site', async ({ page }) => {
  const x_locator = new Page_Locators(page);

  const BaseURL = "https://demoqa.com/";
  await page.goto(BaseURL);
  await expect(page).toHaveTitle('DEMOQA');                             // ⏳  Navigation:  Assert current page title
  await x_locator.DemoQA_TopicCards_Forms.click();                      // 🎯 Locator: Using one‑level descendant selector to navigate DOM hierarchy
  await page.waitForURL(BaseURL + 'forms');                             // ⏳  Navigation: Wait until navigation completes to the page
  await page.getByText("Practice Form").click();                        
  await expect(page).toHaveURL(BaseURL + 'automation-practice-form');   // ⏳  Navigation:  Assert current page URL

  await x_locator.DemoQA_TextBox_FirstName.type("Niranjana"); //✏️ Actions: Does not Clears before filling
  await x_locator.DemoQA_TextBox_FirstName.fill("Peter");     //✏️ Actions: Clears before filling

  await x_locator.DemoQA_RadioButton_Other.click();          //🎯 Locator: Using multiple attributes (e.g., class + for)
  await x_locator.DemoQA_RadioButton_Male.click();           //🎯 Locator: Using first() to target the first matching element
  await x_locator.DemoQA_CheckBox_Hobbies_Reading.click();   //🎯 Locator: Using nth() to target by index (example: 4th element)
  await x_locator.DemoQA_CheckBox_Hobbies_Music.click();     //🎯 Locator: Using last() to target the last matching element

  await expect(x_locator.DemoQA_CheckBox_Hobbies_Reading).toBeChecked ();     // ✅ Assert: Element is checked
  await expect(x_locator.DemoQA_CheckBox_Hobbies_Sports).not.toBeChecked();   // ✅ Assert: Element is unchecked

  await expect(x_locator.DemoQA_RadioButton_Male).toHaveValue('Male');                             // ✅ Assert: Element attribute → value = "Male"
  await expect(x_locator.DemoQA_TextBox_FirstName).toHaveAttribute('placeholder', 'First Name');   // ✅ Assert: Element attribute → placeholder = "First Name"
  await expect(x_locator.DemoQA_TextBox_FirstName).toHaveAttribute('type', 'text');                // ✅ Assert: Element attribute → type = "text"


  await page.goBack();
  await page.goBack();
  await x_locator.DemoQA_TopicCards_Elements.click();  // 🎯 Locator: Using nth() to target the 0th element (first in the list)
  await page.getByText("Radio Button").click();
  await expect(x_locator.DemoQA_RadioButton_Doyoulikethesite_Yes).toBeEnabled();  // ✅ Assert: Element is enabled
  await expect(x_locator.DemoQA_RadioButton_Doyoulikethesite_No).toBeDisabled();  // ✅ Assert: Element is disabled

  await page.getByText("Buttons").click();
  await expect(x_locator.DemoQA_Button_DoubleClickMe).toBeVisible();  // ✅ Assert: Element is visible
  await expect(x_locator.DemoQA_Button_HiddenOne).toBeHidden();       // ✅ Assert: Element is hidden

  await x_locator.DemoQA_Button_ClickMe.click();                            //🖱️ Action: Click element  
  await x_locator.DemoQA_Button_DoubleClickMe.dblclick();                   //🖱️ Action: double Click element  
  await x_locator.DemoQA_Button_RightClickMe.click({ button: 'right' });    //🖱️ Action: right‑click element 

  await expect(x_locator.DemoQA_doubleClickMessage).toHaveText('You have done a double click');  // ✅ Assert: Element Text = "You have done a double click"
  await expect(x_locator.DemoQA_rightClickMessage).toHaveText('You have done a right click');    // ✅ Assert: Element Text = "You have done a right click"
  await expect(x_locator.DemoQA_dynamicClickMessage).toContainText('dynamic click');             // ✅ Assert: Element Text contains substring
  
  await page.getByText("Web Tables").click();
  await expect(x_locator.DemoQA_WebTable_GridCells).toHaveCount(70);          // ✅ Assert: Number of matching elements

  await page.getByText("Dynamic Properties").click();
  await expect(x_locator.DemoQA_Button_VisibleAfter5Seconds).toBeVisible({ timeout: 7000 });
  //await page.waitForSelector('#visibleAfter', { state: 'visible', timeout: 7000 });
  //await expect(page.locator('#visibleAfter')).toBeVisible();


  await page.getByText("Widgets").click();
  await page.getByText("Tool Tips").click();
  await x_locator.DemoQA_Button_Hovermetosee.hover();                         // 🖱️ Action: Hover over the element that triggers the tooltip
  await expect(page.getByText("You hovered over the button")).toBeVisible();  // ✅ Assert: Verify that the tooltip becomes visible

  await page.getByText("Frame & Windows").click();                            // 🎯 Locator: Substring match (contains) → clicks the element whose text contains "Frame & Windows"
  await page.getByText('Alerts', { exact: true }).click();                    // 🎯 Locator: Exact match → clicks the element whose text is exactly "Alerts"

  page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('You clicked a button');  
  await dialog.accept(); 
  });
  await x_locator.DemoQA_Button_ClickMe1.click(); 


  page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Do you confirm action?');  
  await dialog.dismiss(); 
  });
  await x_locator.DemoQA_Button_ClickMe3.click(); 
  await expect(x_locator.DemoQA_Message_ConfirmBox).toHaveText('You selected Cancel');  

  page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Please enter your name');  
  await dialog.accept('Birthday'); 
  });
  await x_locator.DemoQA_Button_ClickMe4.click();
  await expect(x_locator.DemoQA_Message_PromptBox).toHaveText('You entered Birthday');  

  await page.getByText("Modal Dialogs").click();
  await x_locator.DemoQA_Button_Smallmodal.click();           // 🎯 Locator: Using two‑level descendant selector to navigate DOM hierarchy
  await x_locator.DemoQA_Button_SmallmodalClose.click(); 

  await page.waitForTimeout(2000); // pauses for 7 seconds 

  //Frames
  await page.getByText('Frames', { exact: true }).click();                
  const frameElement = page.frameLocator('#frame1');
  await expect(frameElement.locator('#sampleHeading')).toHaveText('This is a sample page');
  await expect(frameElement.locator('#sampleHeading')).toBeVisible();

  await page.getByText('Nested Frames', { exact: true }).click();                


const parentFrame = page.frameLocator('#frame1');
await expect(parentFrame.locator('body')).toContainText('Parent frame');

const childFrame = parentFrame.frameLocator('iframe');
await expect(childFrame.locator('p')).toHaveText('Child Iframe');

  await page.waitForTimeout(2000); // pauses for 7 seconds 

  

});