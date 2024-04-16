import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/Saucelabs/loginPage';
import { ProductsPage } from '../pages/Saucelabs/productsPage';
import { CartPage } from '../pages/Saucelabs/cartPage';

test("Login with invalid username", async ({page}) => 
    {
        let loginPage:LoginPage = new LoginPage(page)
        await loginPage.login("invalid_user", "secret_sauce")
        await expect(loginPage.errorMessage).toContainText('Epic sadface'); 
    
    })

test("Login with invalid password", async ({page}) => 
    {
        let loginPage:LoginPage = new LoginPage(page)
        await loginPage.login("standard_user", "invalid_password")
        await expect(loginPage.errorMessage).toContainText('Epic sadface'); 
    
    })

test.describe('Sauce app demo test @reg', () => {

    let page: Page;
    let loginPage;
    let productPage;
    let cartPage;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
        console.log('Before all test');
        loginPage = new LoginPage(page);
        await loginPage.navigateToLandingPage();
        await loginPage.login("standard_user", "secret_sauce");
        
    })

    test.afterAll(async () => {

        console.log('After all test');
        await loginPage.logout();
        await page.close();

    })

    test("Add a new product to cart", async () => {

        productPage = new ProductsPage(page);
        await productPage.selectTShirt();
        cartPage = new CartPage(page);
        await cartPage.goToCart();

    })

})

