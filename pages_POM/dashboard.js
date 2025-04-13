const {expect} = require("@playwright/test")

class DashboardPage
{   
    //parameterized constructor - page parameter is brought from test cases
    //username, password and loginbutton are locators
    constructor (page)
    {
        this.page = page // this is keyword
        this.dashboardlabel="//h2[normalize-space()='CRUD Dashboard']" // username is a variable which stores id of text box field
        this.logoutoption="//button[normalize-space()='Logout']"
        this.name="//input[@id='name']"
        this.email="//input[@id='email']"
        this.Addbutton="//button[normalize-space()='Add']"
        
    }

    async verifydashboardlebelOption()
    {
        await expect(this.page.locator(this.dashboardlabel)).toBeVisible();

    }

    async AddRecord()
    {

        await this.page.fill(this.name,"Sachin Bhosale")
        await this.page.fill(this.email,"sdbhosale@gmail.com")
        await this.page.click(this.Addbutton)

    }

    async logoutfromApplication()  //user defined method with which we are filling username, password and clicking the login button
    {
        await this.page.click(this.logoutoption)
        await this.page.pause() // pause execution
    }
}

//exporting class
module.exports = DashboardPage;