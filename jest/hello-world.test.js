const PuppeteerEnvironment = require('jest-environment-puppeteer');

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
//        (don't uncomment)
// === NORMAL PUPPETEER USAGE ===
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com');
//  // other actions...
//   await browser.close();
// })();

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === BASIC OPENING PAGES ===
// describe('Google', () => {
//   beforeAll(async () => {
//     try {
//       await page.goto('https://google.com');
//     } catch (e) {
//       throw e;
//     }
//   });
//   it('should display "google" text on the page', async () => {
//     try {
//   const text = await page.evaluate(() => document.body.textContent);
//   expect(text).toContain('google');
//       await expect(page).toMatch('google');
//     } catch (e) {
//       throw e;
//     }
//   });
//   it('should not contain googleyboogley text on the page', async () => {
//     try {
//       await expect(page).not.toMatch('googleyboogley');
//     } catch (e) {
//       throw e;
//     }
//   });
// });

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === ADDING PAGES/TABS ===
// describe('Adding Pages/tabs', () => {
//   test('should have the text Puppeteer', async () => {
//     const secondPage = await browser.newPage();
//     await secondPage.goto('http://pptr.dev');
//     await expect(secondPage).toMatch('Puppeteer');
//   });
//   test('should have the text Jest', async () => {
//     const thirdPage = await browser.newPage();
//     await thirdPage.goto('http://jestjs.io');
//     await expect(thirdPage).toMatch('Jest');
//   });
// });

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === UTILITY ===
// const wait = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// };

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === DOING STUFF WITH PAGES ===
// describe('Interacting with pages on google', () => {
//   beforeEach(async () => {
//     await page.goto('https://google.com');
//   });

//   test('fills out forms on google', async () => {
//     jest.setTimeout(99999);
//     await page.goto('https://google.com');
//     await wait(2000);
//     await page.keyboard.type('Hello World!');
//     await wait(2000);
//     await page.keyboard.press('Enter');
//     await wait(2000);
//     await expect(page).toMatch('Hello World');
//   });

// test('Navigates through pages and types', async () => {
//   jest.setTimeout(99999);
//   await page.keyboard.type('Second test!');
//   await page.keyboard.press('Enter');
//   await wait(3000);
//   await expect(page).toMatch('Second test');
// });
// });

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === RETURNING ELEMENTHANDLES ===
// describe('When I go to the puppeteer website:', () => {
//   beforeEach(async () => {
//     jest.setTimeout(99999);
//     await page.goto('http://pptr.dev');
//     await wait(5000);
//     await expect(page).toMatch('puppeteer');
//   });

//   test('it can navigate to the Puppeteer Release Notes page', async () => {
//     /*
//   page.$() => Return a SINGLE elementHandle
//   page.$$() => Return ALL elementHandles that match query
//   */

//     jest.setTimeout(99999);
//     let sidebars = await page.$$('.pptr-sidebar-item');
//     expect(sidebars.length).toBe(32);
//     await sidebars[1].click();
//     await expect(page).toMatch('Chromium 85.0.4182.0 (r782078)');
//     await wait(3000);
//   });

//   test('it can go navigate to the Puppeteer Overview page', async () => {
//     let sidebars = await page.$$('.pptr-sidebar-item');
//     await sidebars[2].click();
//     await expect(page).toMatch(
//       'Puppeteer is a Node library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.'
//     );
//     await wait(3000);
//   });
//   test('it can go navigate to the Puppeteer vs Puppeteer core', async () => {
//     let sidebars = await page.$$('.pptr-sidebar-item');
//     await sidebars[3].click();
//     await expect(page).toMatch(
//       'puppeteer is a product for browser automation. When installed, it downloads a version of Chromium, which it then drives using puppeteer-core. Being an end-user product, puppeteer supports a bunch of convenient PUPPETEER_* env variables to tweak its behavior.'
//     );
//     await wait(3000);
//   });
// });

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================
// === USING EXPECT PUPPETEER RATHER THAN ELEMENTHANDLES ===
// describe('Rather than using ElementHandles, when I use expect-puppeteer:', () => {
//   beforeEach(async () => {
//     jest.setTimeout(99999);
//     await page.goto('http://pptr.dev');
//     await wait(5000);
//     await expect(page).toMatch('puppeteer');
//   });
//   test('it can go navigate to the Overview page', async () => {
//     await expect(page).toClick('.pptr-sidebar-item', { text: 'Overview' });
//     await expect(page).toMatch(
//       'Puppeteer is a Node library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.'
//     );
//     await wait(3000);
//   });
//   test('it can go navigate to the Release Notes page', async () => {
//     await expect(page).toClick('.pptr-sidebar-item', { text: 'Release Notes' });
//     await expect(page).toMatch('Chromium 85.0.4182.0 (r782078)');
//     await wait(3000);
//   });
//   test('it can go navigate to the Puppeteer vs Puppeteer core', async () => {
//     await expect(page).toClick('.pptr-sidebar-item', {
//       text: 'puppeteer vs puppeteer-core',
//     });
//     await expect(page).toMatch(
//       'puppeteer is a product for browser automation. When installed, it downloads a version of Chromium, which it then drives using puppeteer-core. Being an end-user product, puppeteer supports a bunch of convenient PUPPETEER_* env variables to tweak its behavior.'
//     );
//     await wait(3000);
//   });

//   test('It searches for the Page Class on pptr.dev', async () => {
//     jest.setTimeout(99999);
//     await expect(page).toFill('input', 'page');
//     await expect(page).toMatch('page.url');
//   });
// });
