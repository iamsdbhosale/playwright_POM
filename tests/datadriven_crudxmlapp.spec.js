// Run : npx playwright test datadriven_crudxmlapp.spec.js --project=chromium --headed --debug

const {test, expect} = require('@playwright/test');
const LoginPage=require("D:/playwrite_automation/pages_POM/xmlloginpage.js");
const DashboardPage=require("D:/playwrite_automation/pages_POM/dashboard.js");

//following is the code to use data from testdata.json file
const testdata = JSON.parse(JSON.stringify(require("D:/playwrite_automation/testdatalogin.json")));


test.describe("Data Driven Login Test",function()
{
	for(const data of testdata)
	{
		test.describe(`Login with users ${data.id}`,function()
		{
            test('Login To application using POM', async({page}) =>
                {
                await page.goto('https://iamsdbhosale.github.io/HumanRobot/crud-xml-app.html');
                
                const loginPage=new LoginPage (page); // crating object for LoginPage class
                await loginPage.verifySignin();
                await loginPage.logintoApplication(data.username,data.password); //calling user defined function with object
                //await loginPage.logintoApplication(); //calling user defined function with object
                });
		})
	}
})







