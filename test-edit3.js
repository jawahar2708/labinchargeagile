const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('file://' + __dirname + '/inventory.html');
    await page.waitForSelector('[data-action="editEquipment"]');
    await page.evaluate(() => {
        document.addEventListener('click', e => {
            let t = e.target.closest('[data-action]');
            console.log("CLICK DETECTED. Target action:", t ? t.getAttribute('data-action') : "none");
        }, true);
        
        console.log("Type of editEquipment is:", typeof window.editEquipment);
        if (typeof window.editEquipment === "function") {
            const old = window.editEquipment;
            window.editEquipment = function(id) {
                console.log("editEquipment triggered with id", id);
                old(id);
            }
        }
    });
    
    await page.click('[data-action="editEquipment"]');
    await new Promise(r => setTimeout(r, 1000));
    const isModalShown = await page.$eval('#addEquipmentModal', el => el.classList.contains('show'));
    console.log("Is modal shown?", isModalShown);
    
    await browser.close();
})();
