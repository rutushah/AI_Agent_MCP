import { test, expect } from '@playwright/test';

test('login to ProtoCommerce, add iPhone X to cart and checkout', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in the username
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');

  // Fill in the password
  await page.getByRole('textbox', { name: 'Password:' }).fill('Learning@830$3mK2');

  // Check the terms and conditions checkbox
  await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();

  // Click the Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify we're on the shop page after login
  await expect(page).toHaveURL(/angularpractice\/shop/);

  // Add iPhone X to cart
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();

  // Verify the cart count shows 1 item
  await expect(page.getByText('Checkout ( 1 )')).toBeVisible();

  // Click on Checkout
  await page.getByText('Checkout ( 1 )').click();

  // Verify iPhone X is in the cart
  await expect(page.getByText('iphone X')).toBeVisible();
  await expect(page.getByText('In Stock')).toBeVisible();

  // Click the Checkout button in the cart
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Fill delivery location
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('India');

  // Agree to terms and conditions
  await page.getByText('I agree with the term &').click();

  // Click Purchase
  await page.getByRole('button', { name: 'Purchase' }).click();

  // Wait a moment for the success modal to appear
  await page.waitForTimeout(1000);

  // Verify successful purchase - check if success message is visible
  await expect(page.getByText('Success!')).toBeVisible();
  await expect(page.getByText('Thank you! Your order will be delivered in next few weeks')).toBeVisible();
});