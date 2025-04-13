const {expect} = require("@playwright/test") // to use expect method


class LoginPage
{   
    //parameterized constructor - page parameter is brought from test cases
    //username, password and loginbutton are locators
    constructor (page)
    {
        this.page = page // this is keyword
        this.username="//input[@id='username']" // username is a variable which stores id of text box field
        this.password="//input[@id='password']"
        this.loginbutton="//button[normalize-space()='Login']"
        this.signinlabel="//h2[normalize-space()='Login']"
    }

    async verifySignin()
    {

        await expect(this.page.locator(this.signinlabel)).toBeVisible();
    }

    async logintoApplication(user,pass)  //user defined method with which we are filling username, password and clicking the login button
    {
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
        await this.page.pause() // pause execution
    }
/*
    async logintoApplication()  //user defined method with which we are filling username, password and clicking the login button
    {
        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
        await this.page.pause() // pause execution
    }
*/
}

//exporting class
module.exports = LoginPage;