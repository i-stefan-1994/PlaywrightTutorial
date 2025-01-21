import {test, expects } from '@playwright/test'
import PomManager from '../pages/PomManager.js';

let pm;

test.describe.only('Login Tests', () => {
    // creates a pge in the beforeEach block, then it will pass it into the LoginPage
    //it will then use this page within actions
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    });

    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!');
    })
});