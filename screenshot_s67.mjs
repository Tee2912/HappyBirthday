import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('file:///Users/teehuat/Documents/happybday/index.html');
await page.waitForTimeout(4000);
// Force all reveals visible, remove splash
await page.evaluate(() => {
  document.querySelectorAll('.splash').forEach(el => el.remove());
  document.querySelectorAll('.love-quote-banner').forEach(el => el.remove());
  document.querySelectorAll('.reveal,.reveal-zoom,.reveal-slide-left,.reveal-slide-right,.reveal-expand,.reveal-drop,.reason-item,.tl-item,.stagger-item,.section-flourish').forEach(el => el.classList.add('visible'));
});
await page.waitForTimeout(600);

const shots = [
  { name: 'hero', scroll: 0 },
  { name: 'cake', scroll: 950 },
  { name: 'gift', scroll: 1850 },
  { name: 'balloons', scroll: 3400 },
  { name: 'memory', scroll: 4100 },
  { name: 'timeline', scroll: 5000 },
  { name: 'wishes', scroll: 6400 },
  { name: 'spinner', scroll: 7400 },
  { name: 'decoder', scroll: 14000 },
  { name: 'song', scroll: 14800 },
  { name: 'celebrate_footer', scroll: 99999 },
];

for (const s of shots) {
  await page.evaluate(y => window.scrollTo(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight)), s.scroll);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/s67_${s.name}.png` });
}
await browser.close();
console.log('Sprint 6+7 screenshots done');
