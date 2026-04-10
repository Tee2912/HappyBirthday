import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('file:///Users/teehuat/Documents/happybday/index.html');
await page.waitForTimeout(3500);
// Force all reveals visible
await page.evaluate(() => {
  document.querySelectorAll('.splash').forEach(el => el.remove());
  document.querySelectorAll('.reveal,.reveal-zoom,.reveal-slide-left,.reveal-slide-right,.reveal-expand,.reveal-drop,.reason-item,.tl-item,.stagger-item').forEach(el => el.classList.add('visible'));
});
await page.waitForTimeout(500);

const sections = [
  { name: 'hero', scroll: 0 },
  { name: 'cake', scroll: 900 },
  { name: 'gift', scroll: 1800 },
  { name: 'letter', scroll: 2600 },
  { name: 'balloons', scroll: 3300 },
  { name: 'memory', scroll: 4000 },
  { name: 'timeline', scroll: 4900 },
  { name: 'wishes', scroll: 6200 },
  { name: 'spinner', scroll: 7200 },
  { name: 'coupons', scroll: 8000 },
  { name: 'scratch', scroll: 8800 },
  { name: 'jar', scroll: 9500 },
  { name: 'fortune', scroll: 10200 },
  { name: 'quiz', scroll: 10900 },
  { name: 'fireworks', scroll: 11600 },
  { name: 'doodle', scroll: 12300 },
  { name: 'bottles', scroll: 13000 },
  { name: 'photo', scroll: 13700 },
  { name: 'reasons', scroll: 14400 },
  { name: 'meter', scroll: 15200 },
  { name: 'celebrate_footer', scroll: 99999 },
];

for (const s of sections) {
  await page.evaluate((y) => window.scrollTo(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight)), s.scroll);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/audit_${s.name}.png` });
}
await browser.close();
console.log('Audit screenshots done');
