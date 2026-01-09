
export class Page_Locators {
    constructor(page) {
    this.page = page;
    this.General_MainTabs = page.locator('a.nav-link.scrollto');
    this.General_Button_InstantBooking = page.locator('a[class="instant-button"]');
    this.General_Tab_Home = page.locator('a[href="https://concertcraze.com/"]');
    this.General_Tab_Concerts = page.locator('a[href="/home/Concerts"]');
    this.General_SearchCategory_TextBox = page.locator('input[class="form-control add"]');
    this.General_SearchCategory_Dancer = page.locator('div[class="back-topnew"] ul li a').nth(5);
    this.General_Popup_Header = page.locator('div[class="modal-header"]');
    this.General_Popup_Fields_EnterName = page.locator('div[class="pop-new"] span input').nth(0);
    this.General_Popup_Fields_EnterMobileNo = page.locator('div[class="pop-new"] span input').nth(1);
    this.General_Popup_Fields_EnterEmail = page.locator('div[class="pop-new"] span input').nth(2);
    this.General_Popup_Fields_SelectGenre = page.locator('div[class="pop-new"] span select').nth(0);
    this.General_Popup_Fields_SelectEvent = page.locator('div[class="pop-new"] span select').nth(1);
    this.General_Popup_Fields_SelectLocationType = page.locator('div[class="pop-new"] span select').nth(2);
    this.General_Popup_Fields_EnterLocationHere = page.locator('div[class="pop-new"] span input').nth(4);
    this.General_Popup_Fields_SelectBudget = page.locator('div[class="pop-new"] span select').nth(3);
    this.General_InstantButton = page.locator('.instant-button');
    this.Home_CenterHeader = page.locator('div[class="back-topnew"] h2');
    //-----------------------------------------------------------------------
    this.DemoQA_TopicCards_Forms = page.locator('div[class="card-body"] h5').nth(1);
    this.DemoQA_TextBox_FirstName = page.locator('#firstName');
    this.DemoQA_RadioButton_Male = page.locator('label[class="custom-control-label"]').first();
    this.DemoQA_RadioButton_Other = page.locator('label[class="custom-control-label"][for="gender-radio-3"]');
    this.DemoQA_CheckBox_Hobbies_Sports= page.locator('label[class="custom-control-label"]').nth(3);
    this.DemoQA_CheckBox_Hobbies_Reading= page.locator('label[class="custom-control-label"]').nth(4);
    this.DemoQA_CheckBox_Hobbies_Music= page.locator('label[class="custom-control-label"]').last();
   
    this.DemoQA_TopicCards_Elements = page.locator('div[class="card-body"] h5').nth(0);
    this.DemoQA_RadioButton_Doyoulikethesite_Yes = page.locator('#yesRadio');
    this.DemoQA_RadioButton_Doyoulikethesite_No = page.locator('#noRadio');
    this.DemoQA_Button_HiddenOne = page.locator('button[type="button"]').first();
    this.DemoQA_Button_DoubleClickMe = page.locator('#doubleClickBtn');
    this.DemoQA_Button_RightClickMe = page.locator('#rightClickBtn');
    this.DemoQA_Button_ClickMe = page.locator('button[type="button"]').nth(3);
    this.DemoQA_doubleClickMessage = page.locator('#doubleClickMessage');
    this.DemoQA_rightClickMessage = page.locator('#rightClickMessage');
    this.DemoQA_dynamicClickMessage = page.locator('#dynamicClickMessage');
    this.DemoQA_WebTable_GridCells = page.locator('div[class="ReactTable -striped -highlight"] div[role="rowgroup"] div[role="gridcell"]');
    this.DemoQA_Button_Hovermetosee = page.locator('#toolTipButton');
    this.DemoQA_Button_VisibleAfter5Seconds = page.locator('#visibleAfter');
    this.DemoQA_Button_ClickMe1 = page.locator('#alertButton');
    this.DemoQA_Button_ClickMe2 = page.locator('#timerAlertButton');
    this.DemoQA_Button_ClickMe3 = page.locator('#confirmButton');
    this.DemoQA_Button_ClickMe4 = page.locator('#promtButton');
    this.DemoQA_Message_ConfirmBox = page.locator('#confirmResult');
    this.DemoQA_Message_PromptBox = page.locator('#promptResult');
    this.DemoQA_Button_Smallmodal = page.locator('div[id="modalWrapper"] div button[id="showSmallModal"]');
    this.DemoQA_Button_SmallmodalClose = page.locator('button[id="closeSmallModal"]');
    this.DemoQA_Button_NewTab = page.locator('button[id="tabButton"]');
    this.DemoQA_Button_NewWindow = page.locator('button[id="windowButton"]');
    this.DemoQA_Header = page.locator('#sampleHeading');
    this.DemoQA_Image_Logo = page.locator('img[src="/images/Toolsqa.jpg"]');

    // mate Home page 
    this.matetools_Button_AddtoChrome  = page.locator('a[class="btn btn-light btn-sm text-start"]').first();
    this.matetools_Button_AddtoEdge    = page.locator('a[class="btn btn-light btn-sm text-start"]').nth(1);
    this.matetools_Button_AddtoFirefox = page.locator('a[class="btn btn-light btn-sm text-start"]').last();
    this.matetools_Main_TextBox_ItemName = page.locator('#itemName');

    // mate : Chrome page 
    this.matetools_Chrome_TextBox_Search = page.locator('input[aria-label="Search Chrome Web Store"]');

    // mate : Edge page 
    this.matetools_Edge_TextBox_Search = page.locator('#InputSearchBox');

    // mate : FireFox page 
    this.matetools_FireFox_TextBox_Search = page.locator('.AutoSearchInput-query');

    }
}



