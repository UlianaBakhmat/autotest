const puppeteer = require('puppeteer');

async function getPic() {
const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://puzzle-english.com');
  await page.click ('.welcome-screen-header-login-button');
  await page.click ('#alreadyHaveAccount');
  


  await page.$eval ('#email', (elem) => { 
      elem.value = 'petov_i@list.ru'});

    await page.$eval ('#password', (elem) => { 
        elem.value = '2580852'});

    await page.click ('.signin-sign-in-form__button');
    await page.waitForNavigation();
    await page.goto('https://puzzle-english.com/buy?userlang=ru');

    await page.click ('.buy-products__check');
    await page.click ('.j-card-buy');
    await page.waitForNavigation();
    await page.click ('.checkout-payment-pay-button_default');
    await page.waitForNavigation();

    await page.setViewport({width: 2000,  height: 3500});
    await page.screenshot({path: 'price00.png'});

  await browser.close();
}


getPic();
