import { test, expect } from '@playwright/test';

test('This was generated by codegen', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.pause();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.getByText('Welcome to the Secure Area.')).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('11');
  await expect(page.getByLabel('Username')).toHaveValue('11');
  await page.pause();
});