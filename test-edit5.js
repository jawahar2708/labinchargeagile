const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    await page.goto('file://' + __dirname + '/inventory.html');
    await page.waitForSelector('#addEquipmentModal'); // Wait for DOM
    await page.evaluate(() => {
        console.log("Calling editEquipment('EQP001')...");
        try {
            window.editEquipment('EQP001');
            console.log("Success.");
        } catch (e) {
            console.log("Failed:", e.toString(), e.stack);
        }
    });
    
    const isModalShown = await page.$eval('#addEquipmentModal', el => el.classList.contains('show'));
    console.log("Is modal shown?", isModalShown);
    
    await browser.close();
})();
