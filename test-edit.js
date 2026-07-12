const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    await page.goto('file://' + __dirname + '/inventory.html');
    
    console.log("Waiting for table to render...");
    await page.waitForSelector('[data-action="editEquipment"]');
    
    console.log("Clicking edit equipment button...");
    await page.click('[data-action="editEquipment"]');
    
    // Check if modal has class 'show'
    const isModalShown = await page.$eval('#addEquipmentModal', el => el.classList.contains('show'));
    console.log("Is modal shown?", isModalShown);
    
    await browser.close();
})();
