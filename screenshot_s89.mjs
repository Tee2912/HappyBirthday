import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('file:///Users/teehuat/Documents/happybday/index.html');
await page.waitForTimeout(4000);

// Force all reveals visible, remove splash
await page.evaluate(() => {
  document.querySelectorAll('.splash').forEach(el => el.remove());
  document.querySelectorAll('.love-quote-banner').forEach(el => el.remove());
  document.querySelectorAll('.reveal,.reveal-zoom,.reveal-slide-left,.reveal-slide-right,.reveal-expand,.reveal-drop,.reason-item,.tl-item,.stagger-item,.section-flourish,.stagger-visible').forEach(el => el.classList.add('visible'));
  document.querySelectorAll('.wish-grid .flip-card').forEach(el => el.classList.add('stagger-visible'));
});
await page.waitForTimeout(600);

const shots = [
  { name: '01_hero_darling', scroll: 0 },
  { name: '02_ribbon_cake', scroll: 900 },
  { name: '03_gift', scroll: 1800 },
  { name: '04_letter', scroll: 2700 },
  { name: '05_balloons', scroll: 3400 },
  { name: '06_memory', scroll: 4100 },
  { name: '07_timeline', scroll: 5000 },
  { name: '08_wishes', scroll: 6200 },
  { name: '09_spinner', scroll: 7200 },
  { name: '10_coupons', scroll: 8000 },
  { name: '11_scratch', scroll: 9000 },
  { name: '12_jar', scroll: 9800 },
  { name: '13_fortune', scroll: 10600 },
  { name: '14_quiz', scroll: 11400 },
  { name: '15_fireworks', scroll: 12200 },
  { name: '16_doodle', scroll: 13000 },
  { name: '17_bottles', scroll: 13800 },
  { name: '18_photo', scroll: 14500 },
  { name: '19_reasons', scroll: 15200 },
  { name: '20_love_meter', scroll: 16000 },
  { name: '21_decoder', scroll: 16800 },
  { name: '22_song', scroll: 17500 },
  { name: '23_celebrate_footer', scroll: 99999 },
];

for (const s of shots) {
  await page.evaluate(y => window.scrollTo(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight)), s.scroll);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/s89_${s.name}.png` });
}

console.log('\n=== Sprint 8+9 Screenshots Complete ===');
console.log('Screenshots saved to /tmp/s89_*.png');

await browser.close();
