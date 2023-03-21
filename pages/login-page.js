const { timeout } = require("../playwright.config")
const { BasePage } = require("./base_page")
const { LoginPageLocators } = require("../locators/login_page_locators")

exports.LoginPage = class LoginPages extends BasePage{

    constructor(page) {
        super()
        this.page = page

        this.login_page_locators = new LoginPageLocators(page)
    }

    async login() {
        await this.page.goto('/')
        await this.set_value_into_element(this.login_page_locators.username_field_locator, "--------")
        await this.set_value_into_element(this.login_page_locators.password_field_locator, "--------")
        await this.click_on_element(this.login_page_locators.login_button_locator)
    }
}