const { BasePage } = require("./base_page")
const { timeout } = require("../playwright.config")

exports.Sidebar = class Sidebar extends BasePage {


    constructor(page) {
        super()
        this.page = page
    }

    async click_on_specific_menu(menu_name, sub_menu_name, expand_menu = true) {
        const menu_locator = await this.page.locator("xpath=//span[normalize-space()='" + menu_name + "']/../../../a")
        // await this.page.waitForTimeout(3000);
        if (expand_menu == true) {
            await menu_locator.waitFor('attached');
            await this.click_on_element(menu_locator);
        }
        const sub_menu_locator = await this.page.locator("xpath=//span[normalize-space()='" + sub_menu_name + "']/../../../a")
        await sub_menu_locator.waitFor('attached');
        await this.click_on_element(sub_menu_locator)
    }
}