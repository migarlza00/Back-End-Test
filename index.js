const { resolve } = require('path');
const puppeteer = require('puppeteer');
const fs = require("fs").promises;
// เว็บไซต์
const WEBSITE_URL = 'https://shopee.co.th/';
// const userDataDir = 'C:\\Users\\smile\\AppData\\Local\\Google\\Chrome\\User Data';

(async (WEBSITE_URL) => {


    const sleep = (seconds) => {
        return new Promise((resolve) => setTimeout(resolve, seconds))
    }
  
    // เปิด Browser 
    const browser = await puppeteer.launch({
        headless: false,
        // userDataDir: userDataDir
    });
    // เปิด page 
    const page = await browser.newPage();
    //Load cookies
    //   const cookiesString = await fs.readFile("./cookies.json");
    //   const cookies = JSON.parse(cookiesString);
    //   await page.setCookie(...cookies);

    // เข้าเว็บไซต์
    await page.goto(WEBSITE_URL);

    await sleep(5000)

    //Step 1 Select Your Language
    // await page.click("#modal > div.AU9BO1 > div.EqoklY > div > div.language-selection__list > div:nth-child(2) > button")

    // await sleep(5000)

    // Step 2 Login
    await page.click("#main > div > div.uqT7Nz > div > div > div > div:nth-child(2) > div > div.p7oxk2 > form > div.biFZbP > div.q18aRr > input")
    await sleep(3000)
    await page.click("#main > div > div.uqT7Nz > div > div > div > div:nth-child(2) > div > div.p7oxk2 > form > button")
    console.log("WTH");

})(WEBSITE_URL);