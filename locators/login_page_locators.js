exports.LoginPageLocators = class LoginPageLocators {

    constructor(page) {
        this.page = page

        //[START] Locators
        this.username_field_locator = page.locator("xpath=//input[@id='username']")
        this.password_field_locator = page.locator("xpath=//input[@id='password']")
        this.login_button_locator = page.locator("xpath=//input[@type='submit']")
        //[END] Locators
    }
}