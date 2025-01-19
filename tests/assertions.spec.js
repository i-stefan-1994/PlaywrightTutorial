import { test, expect } from '@playwright/test'

test.describe("Learn assertions @assertions_group", () => {
    test('verify web page behavior', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');

        //1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        //2. to have title
        await expect(page).toHaveTitle('The Internet');
    });

    test('continues assertions', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
        //3. assert visibility
        await expect(page.locator('h1')).toBeVisible();

        //4. to have text
        await expect(page.locator('h2')).toHaveText('Available Examples');

        //5. to contain text
        await expect(page.locator('[href="/tinymce"]')).toContainText('WYSIWYG');

    });

    test('Continue with assertions p2', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');

        //6. to have count

        await expect(page.locator('a')).toHaveCount(46);

        //7. to be checked

        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        // await page.waitForTimeout(1000); -- basic timeout
        // await page.waitForLoadState('networkidle'); -- wait for no more activity in the network tab

        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();

    });

    test('Continue with assertions p3', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');

        //8. to have value
        await page.locator('#username').fill('tomsmith');

        await expect(page.locator('#username')).toHaveValue('tomsmith');
    
        //9. to be enabled or disabled

        await expect (page.locator('button[type="submit"]')).toBeEnabled();

        
    });

    
 test('Continue with assertions p4', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')

        //10. Store text in variable, then verify content

        const headerText = await page.locator('h1').textContent();

        expect(headerText).toBe('Welcome to the-internet');
    });   

    
});