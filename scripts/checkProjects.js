import fs from 'fs';

const urls = [
  { id: 'namami', name: 'Namami IT Software Solutions', url: 'https://namami.co.in/', cat: 'Corporate / PHP / CodeIgniter' },
  { id: 'sameka', name: 'Sameka Health', url: 'https://samekahealth.com/', cat: 'Shopify / eCommerce' },
  { id: 'blacktiger', name: 'Black Tiger Events', url: 'https://blacktigerevents.in/', cat: 'WordPress / Event Management' },
  { id: 'viralgarage', name: 'The Viral Garage', url: 'https://theviralgarage.com/', cat: 'Digital Agency' },
  { id: 'iskcon', name: 'ISKCON Bareilly', url: 'https://iskconbareilly.com/', cat: 'Organization / Community' },
  { id: 'prakruti', name: 'Prakruti Media Shala', url: 'https://prakrutishala.org/', cat: 'Educational / Interactive' },
  { id: 'ramangreens', name: 'Raman Greens', url: 'https://ramangreens.com/', cat: 'Food Brand / eCommerce' },
  { id: 'dairy-demo', name: 'Dairy Demo', url: 'https://megharaikwar139.github.io/dairy-demo/', cat: 'Frontend / Dairy Showcase' },
  { id: 'dairy-classics', name: 'Dairy Classics', url: 'https://megharaikwar139.github.io/dairy-classics/', cat: 'Frontend / Dairy Brand' },
  { id: 'tramadol', name: 'Tramadol50mg', url: 'https://tramadol50mg.store/', cat: 'Web Development / eCommerce' },
  { id: 'buyxanax', name: 'BuyXanaxOnline', url: 'https://buyxanaxonline.store/', cat: 'Web Development / eCommerce' }
];

async function check() {
  const results = [];
  for (const item of urls) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(6000)
      });
      const html = await res.text();
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
      const title = titleMatch ? titleMatch[1].trim() : '';
      const desc = descMatch ? descMatch[1].trim() : '';
      results.push({ ...item, status: res.status, title, desc, accessible: true });
      console.log(`[OK ${res.status}] ${item.name} (${item.url}) - ${title}`);
    } catch (err) {
      results.push({ ...item, status: 'error', error: err.message, accessible: false });
      console.log(`[ERR] ${item.name} (${item.url}) - ${err.message}`);
    }
  }
  fs.writeFileSync('./scripts/projects-audit.json', JSON.stringify(results, null, 2));
}

check();
