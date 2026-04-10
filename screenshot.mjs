import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('file:///Users/teehuat/Documents/happybday/index.html');
await page.waitForTimeout(4000);
// Force all reveals visible
await page.evaluate(() => {
  document.querySelectorAll('.reveal,.reveal-zoom,.reveal-slide-left,.reveal-slide-right,.reveal-expand,.reveal-drop,.reason-item,.tl-item,.stagger-item').forEach(el => el.classList.add('visible'));
});
await page.waitForTimeout(500);
// Screenshot hero
await page.screenshot({ path: '/tmp/s5_hero.png', clip:{x:0,y:0,width:1440,height:900} });
// Cake
await page.evaluate(() => window.scrollTo(0, 1000));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_cake.png' });
// Gift+Letter
await page.evaluate(() => window.scrollTo(0, 2000));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_gift.png' });
// Memory game
await page.evaluate(() => window.scrollTo(0, 3500));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_memory.png' });
// Timeline
await page.evaluate(() => window.scrollTo(0, 4500));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_timeline.png' });
// Wishes
await page.evaluate(() => window.scrollTo(0, 6200));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_wishes.png' });
// Fireworks + Doodle
await page.evaluate(() => window.scrollTo(0, 10700));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_fireworks.png' });
// Reasons
await page.evaluate(() => window.scrollTo(0, 13500));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_reasons.png' });
// Footer
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s5_footer.png' });
await browser.close();
console.log('Sprint 5 done');
