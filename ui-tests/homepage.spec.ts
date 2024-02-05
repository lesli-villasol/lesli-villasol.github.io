import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';
test('has title', async ({ page }) => {
  await page.goto(baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
});

test('check h1 ', async ({ page }) => {
  await page.goto(baseUrl);


  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Counters that update separately. Test pr validation' })).toBeVisible();
});
