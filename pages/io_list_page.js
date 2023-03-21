const { timeout } = require("../playwright.config")
const { BasePage } = require("./base_page")
const { IoListPageLocators } = require("../locators/io_list_page_locators")

exports.IoListPage = class IoListPage extends BasePage {

    constructor(page) {
        super()
        this.page = page
        this.io_list_page_locators = new IoListPageLocators(page)
    }
}