import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { BasePage } from '../../pages/base_page';
import { Sidebar } from '../../pages/sidebar';


test.beforeEach(async ({ page }) => {
    const login_page = new LoginPage(page)
    console.log('Before tests');

    await login_page.login()
});

test('IO creation and verification', async ({ page }) => {

    const base_page = new BasePage(page)
    const sidebar = new Sidebar(page)

    await sidebar.click_on_specific_menu("Billing", "IO")
});