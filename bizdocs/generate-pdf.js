const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the HTML file
    await page.goto(`file:${path.join(__dirname, 'business-plan.html')}`, {
        waitUntil: 'networkidle0'
    });

    // Generate PDF
    await page.pdf({
        path: 'CME-Business-Plan.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm'
        }
    });

    await browser.close();
})();
