const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/inventory.html');
    await page.waitForSelector('[data-action="editEquipment"]');
    await page.evaluate(() => {
        const btn = document.querySelector('[data-action="editEquipment"]');
        console.log("Clicking button via JS...");
        btn.click();
    });
    
    await new Promise(r => setTimeout(r, 1000));
    const isModalShown = await page.$eval('#addEquipmentModal', el => el.classList.contains('show'));
    console.log("Is modal shown?", isModalShown);
    
    await browser.close();
})();
