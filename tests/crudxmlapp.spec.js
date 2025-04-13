// Run : npx playwright test crudxmlapp.spec.js --project=chromium --headed --debug

const {test, expect} = require('@playwright/test');
const LoginPage=require("D:/playwrite_automation/pages_POM/xmlloginpage.js");
const DashboardPage=require("D:/playwrite_automation/pages_POM/dashboard.js");

test('Login To application using POM', async({page}) =>
{
await page.goto('https://iamsdbhosale.github.io/HumanRobot/crud-xml-app.html');

const loginPage=new LoginPage (page); // crating object for LoginPage class
await loginPage.verifySignin();
await loginPage.logintoApplication("admin","1234"); //calling user defined function with object
//await loginPage.logintoApplication(); //calling user defined function with object

const dashboardPage=new DashboardPage (page); // crating object for HomePage class

await dashboardPage.verifydashboardlebelOption();

await dashboardPage.AddRecord();

await dashboardPage.logoutfromApplication();

});

