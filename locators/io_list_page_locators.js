exports.IoListPageLocators = class IoListPageLocators {

    constructor(page) {
        this.page = page

        //[START] Locators
        this.io_sidebar_menu_locator = page.locator("xpath=//a[@class='accordion-inner-side']//span[text()='IO']")
        //[END] Locators
    }
}