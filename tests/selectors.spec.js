import { test, expect } from '@playwright/test'

test("Learning selectors", "This test is focused on selectors", async ({ page }) => {
    //navigating to the page
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    //1. ID - # is the code syntax for selecting an id
    await page.locator('#clickButton').click();

    //2. Class - . is the code syntax for selecting a class
    await page.locator('.button-style').click();

    //3. Tag and Class
    await page.locator('button.button-style').click();

    //4. Attribute value - like data-test
    await page.locator('[data-action="increment"]').click();
    await page.locator('[id="clickButton"]').click();
    await page.locator('[class="button-style"]').click();

    //5. Partial attribute - * tells it to search by role in which the attribute has any text containing "but"
    await page.locator('[role*="but"]').click();

    //6. Text content
    await page.locator('text=CLICK ME').click();

    //7. Combine selectors for precision, class and text - used to find EXACT match
    await page.locator('.button-style:text("CLICK ME")').click();

    //8. has-text - more flexible, like cypress .contains()
    await page.locator('button:has-text("click m")').click();

    //9. Attribute and text combination
    await page.locator('[data-action="increment"]:text("CLICK ME")').click();

    //10. Playwright locators - https://playwright.dev/docs/locators
    //get by text
    await page.getByText('CLICK ME').click();

    //11. By Role
    await page.getByRole('button', { name: /click/i }).click();

    // assert the counter

    await page.pause();

    await expect(page.locator('#counter')).toContainText('13');

    await page.pause();

});