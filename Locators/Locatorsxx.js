
export class HomePage_Locators {
    constructor(HomePage) {
    this.HomePage = HomePage;
    this.General_MainTabs = HomePage.locator('a.nav-link.scrollto');
    this.General_Button_InstantBooking = HomePage.locator('a[class="instant-button"]');
    this.General_Tab_Home = HomePage.locator('a[href="https://concertcraze.com/"]');
    this.General_Tab_Concerts = HomePage.locator('a[href="/home/Concerts"]');
    this.General_SearchCategory_TextBox = HomePage.locator('input[class="form-control add"]');
    this.General_SearchCategory_Dancer = HomePage.locator('div[class="back-topnew"] ul li a').nth(5);
    this.General_Popup_Header = HomePage.locator('div[class="modal-header"]');
    this.General_Popup_Fields_EnterName = HomePage.locator('div[class="pop-new"] span input').nth(0);
    this.General_Popup_Fields_EnterMobileNo = HomePage.locator('div[class="pop-new"] span input').nth(1);
    this.General_Popup_Fields_EnterEmail = HomePage.locator('div[class="pop-new"] span input').nth(2);
    this.General_Popup_Fields_SelectGenre = HomePage.locator('div[class="pop-new"] span select').nth(0);
    this.General_Popup_Fields_SelectEvent = HomePage.locator('div[class="pop-new"] span select').nth(1);
    this.General_Popup_Fields_SelectLocationType = HomePage.locator('div[class="pop-new"] span select').nth(2);
    this.General_Popup_Fields_EnterLocationHere = HomePage.locator('div[class="pop-new"] span input').nth(4);
    this.General_Popup_Fields_SelectBudget = HomePage.locator('div[class="pop-new"] span select').nth(3);
    this.General_InstantButton = HomePage.locator('.instant-button');
    this.Home_CenterHeader = HomePage.locator('div[class="back-topnew"] h2');
    //-----------------------------------------------------------------------
    this.DemoQA_TopicCards_Forms = HomePage.locator('div[class="card-body"] h5').nth(1);
    this.DemoQA_TextBox_FirstName = HomePage.locator('#firstName');
    this.DemoQA_RadioButton_Male = HomePage.locator('label[class="custom-control-label"]').first();
    this.DemoQA_RadioButton_Other = HomePage.locator('label[class="custom-control-label"][for="gender-radio-3"]');
    this.DemoQA_CheckBox_Hobbies_Sports= HomePage.locator('label[class="custom-control-label"]').nth(3);
    this.DemoQA_CheckBox_Hobbies_Reading= HomePage.locator('label[class="custom-control-label"]').nth(4);
    this.DemoQA_CheckBox_Hobbies_Music= HomePage.locator('label[class="custom-control-label"]').last();
   
    this.DemoQA_TopicCards_Elements = HomePage.locator('div[class="card-body"] h5').nth(0);
    this.DemoQA_RadioButton_Doyoulikethesite_Yes = HomePage.locator('#yesRadio');
    this.DemoQA_RadioButton_Doyoulikethesite_No = HomePage.locator('#noRadio');
    this.DemoQA_Button_HiddenOne = HomePage.locator('button[type="button"]').first();
    this.DemoQA_Button_DoubleClickMe = HomePage.locator('#doubleClickBtn');
    this.DemoQA_Button_RightClickMe = HomePage.locator('#rightClickBtn');
    this.DemoQA_Button_ClickMe = HomePage.locator('button[type="button"]').nth(3);
    this.DemoQA_doubleClickMessage = HomePage.locator('#doubleClickMessage');
    this.DemoQA_rightClickMessage = HomePage.locator('#rightClickMessage');
    this.DemoQA_dynamicClickMessage = HomePage.locator('#dynamicClickMessage');
    this.DemoQA_WebTable_GridCells = HomePage.locator('div[class="ReactTable -striped -highlight"] div[role="rowgroup"] div[role="gridcell"]');
    this.DemoQA_Button_Hovermetosee = HomePage.locator('#toolTipButton');
    this.DemoQA_Button_VisibleAfter5Seconds = HomePage.locator('#visibleAfter');
    this.DemoQA_Button_ClickMe1 = HomePage.locator('#alertButton');
    this.DemoQA_Button_ClickMe2 = HomePage.locator('#timerAlertButton');
    this.DemoQA_Button_ClickMe3 = HomePage.locator('#confirmButton');
    this.DemoQA_Button_ClickMe4 = HomePage.locator('#promtButton');
    this.DemoQA_Message_ConfirmBox = HomePage.locator('#confirmResult');
    this.DemoQA_Message_PromptBox = HomePage.locator('#promptResult');
    this.DemoQA_Button_Smallmodal = HomePage.locator('div[id="modalWrapper"] div button[id="showSmallModal"]');
    this.DemoQA_Button_SmallmodalClose = HomePage.locator('button[id="closeSmallModal"]');
    this.DemoQA_Button_NewTab = HomePage.locator('button[id="tabButton"]');
    this.DemoQA_Button_NewWindow = HomePage.locator('button[id="windowButton"]');
    this.DemoQA_Header = HomePage.locator('#sampleHeading');
    this.DemoQA_Image_Logo = HomePage.locator('img[src="/images/Toolsqa.jpg"]');
    //-----------------------------------------------------------------------
    this.matetools_Main_TextBox_ItemName = HomePage.locator('#itemName');
    }
}

export class MateHomePage_Locators {
  constructor(page) {
    this.page = page;
    this.matetools_Button_AddtoChrome  = page.locator('a[class="btn btn-light btn-sm text-start"]').first();
    this.matetools_Button_AddtoEdge    = page.locator('a[class="btn btn-light btn-sm text-start"]').nth(1);
    this.matetools_Button_AddtoFirefox = page.locator('a[class="btn btn-light btn-sm text-start"]').last();
  }
}

export class ChromeMate_Locators {
  constructor(page) {
    this.page = page;
    this.matetools_Chrome_TextBox_Search = page.locator('#InputSearchBox');
  }
}

export class EdgeMate_Locators {
  constructor(page) {
    this.page = page;
    this.matetools_Edge_TextBox_Search = page.locator('#InputSearchBox');
  }
}

export class FireFoxMate_Locators {
  constructor(page) {
    this.page = page;
    this.matetools_FireFox_TextBox_Search = page.locator('#InputSearchBox');
 }
}


