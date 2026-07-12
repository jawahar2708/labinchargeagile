const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/inventory.html');
    await page.evaluate(() => {
        const oldEdit = window.editEquipment;
        window.editEquipment = function(id) {
            console.log("Called editEquipment with id:", id);
            try {
                oldEdit(id);
                console.log("Finished oldEdit");
            } catch(e) {
                console.log("Error in oldEdit:", e.stack);
            }
        };
    });
    
    await page.waitForSelector('[data-action="editEquipment"]');
    await page.click('[data-action="editEquipment"]');
    await page.waitForTimeout(1000);
    const isModalShown = await page.$eval('#addEquipmentModal', el => el.classList.contains('show'));
    console.log("Is modal shown?", isModalShown);
    
    await browser.close();
})();
