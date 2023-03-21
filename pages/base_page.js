exports.BasePage = class BasePage {

    constructor(page) {
        this.page = page
    }

    async set_value_into_specific_field(field_name, value) {
        const locator = this.page.locator("xpath=//label[normalize-space(text())='" + field_name + "']/..//input")
        await locator.waitFor('attached');
        await locator.fill(value)
    }

    async set_value_into_element(locator, value) {
        await locator.waitFor('attached');
        await locator.fill(value)
    }

    async click_on_element(locator) {
        await locator.waitFor('attached');
        await locator.click()
    }
}