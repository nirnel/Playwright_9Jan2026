import { expect } from '@playwright/test';
import { Page_Locators } from '../Locators/Locators.js';

import XLSX from 'xlsx';

export async function rrrvalidateTitle(page, expected) {
  try {
    await expect(page).toHaveTitle(expected);
    console.log(`✅ Title validated: ${expected}`);
  } catch (error) {
    console.warn(`⚠️ Title validation failed. Expected: ${expected}, Actual: ${await page.title()}`);
    throw error; // ❌ force test to fail
  }
}

export async function validateTitle(page, expected) {
  // Hard assertion → test fails if mismatch
  await expect(page).toHaveTitle(expected);
}


export async function waitAndvalidateURL(page,expected) {
  await expect(page).waitForURL(expected);
}

export async function validateURL(page,expected) {
  await expect(page).toHaveURL(expected);   
}

export async function SwitchToWindow(page, Locator) {
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    Locator.click()
  ]);

  await popup.bringToFront();      // focus the new window
  return new Page_Locators(popup); // return locators scoped to popup
}
 
export function readExcelData(filePath) {
  const workbook = XLSX.readFile(filePath);   // ✅ works now
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

export function readExcelDataForTestCase(filePath, labelName, labelValue) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[1]];
  const rows = XLSX.utils.sheet_to_json(sheet);
  // Find the row where labelName column matches labelValue
  const row = rows.find(r => r[labelName] === labelValue);
   return row; // row is now a JS object (map) with column names as keys
}



export function collectUntilEnd(data, columnName) {
  const result = [];
  for (const row of data) {
    const val = row[columnName]?.trim();   // dynamic property access
    if (val === "END") break;
    result.push(val ?? "");
  }
  return result;
}


export async function validateUIvsExcel(page, locator, data, columnName) {
  // 1. Get UI elements
  const uiElements = locator;
  const uiCount = await uiElements.count();

  // 2. Get Excel values until END (retain blanks before END)
  const expectedValues = collectUntilEnd(data, columnName);
  const excelCount = expectedValues.length;

  // 3. Compare counts
  expect(uiCount).toBe(excelCount);

  // 4. Compare text one by one
  for (let i = 0; i < uiCount; i++) {
    await expect(uiElements.nth(i)).toHaveText(expectedValues[i]);
  }
}