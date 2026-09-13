const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const OUTPUT_DIRS = [
  path.join(__dirname, 'screenshots'),
  path.join(__dirname, 'screenshoot')
];

OUTPUT_DIRS.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const baseData = require('./2026svn0601__1_.json');

const septTxs = [
  {
    id: 1789300001,
    name: 'Gaji Bulanan September',
    amount: 32000000,
    origAmount: 300000,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Gaji',
    date: '2026-09-01',
    note: 'Gaji pokok + bonus lembur',
    tags: '#gaji #income',
    type: 'income',
    recurring: true,
    recurrenceDay: 1,
    createdAt: '2026-09-01T09:00:00.000Z'
  },
  {
    id: 1789300002,
    name: 'Bonus Freelance UI/UX',
    amount: 7500000,
    origAmount: 7500000,
    origCurrency: 'IDR',
    walletId: 'idr-gopay',
    category: 'Bonus',
    date: '2026-09-03',
    note: 'Desain web klien Jepang',
    tags: '#freelance',
    type: 'income',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-03T14:30:00.000Z'
  },
  {
    id: 1789300003,
    name: 'Belanja Supermarket Seiyu',
    amount: 695500,
    origAmount: 6500,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Belanja',
    date: '2026-09-02',
    note: 'Bahan masakan mingguan & susu',
    tags: '#groceries #mingguan',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-02T18:20:00.000Z'
  },
  {
    id: 1789300004,
    name: 'Makan Siang Ichiran Ramen',
    amount: 128400,
    origAmount: 1200,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Konsumsi',
    date: '2026-09-04',
    note: 'Ramen ekstra cha-shu + tamago',
    tags: '#kuliner',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-04T12:45:00.000Z'
  },
  {
    id: 1789300005,
    name: 'Isi Kartu Pasmo / Kereta',
    amount: 321000,
    origAmount: 3000,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Transport',
    date: '2026-09-05',
    note: 'Transport komuter Tokyo-Shinjuku',
    tags: '#transport #kereta',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-05T08:15:00.000Z'
  },
  {
    id: 1789300006,
    name: 'Tagihan Listrik TEPCO',
    amount: 513600,
    origAmount: 4800,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Tagihan',
    date: '2026-09-06',
    note: 'Listrik apartemen Agustus',
    tags: '#utilitas #listrik',
    type: 'expense',
    recurring: true,
    recurrenceDay: 6,
    createdAt: '2026-09-06T10:00:00.000Z'
  },
  {
    id: 1789300007,
    name: 'Langganan Netflix & Spotify',
    amount: 285000,
    origAmount: 285000,
    origCurrency: 'IDR',
    walletId: 'idr-gopay',
    category: 'Hiburan',
    date: '2026-09-08',
    note: 'Family plan bulanan',
    tags: '#subscription',
    type: 'expense',
    recurring: true,
    recurrenceDay: 8,
    createdAt: '2026-09-08T11:00:00.000Z'
  },
  {
    id: 1789300008,
    name: 'Vitamin C & Obat Apotek',
    amount: 192600,
    origAmount: 1800,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Kesehatan',
    date: '2026-09-09',
    note: 'Matsumoto Kiyoshi Pharmacy',
    tags: '#sehat',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-09T16:40:00.000Z'
  },
  {
    id: 1789300009,
    name: 'Kopi & Croissant Starbucks',
    amount: 90950,
    origAmount: 850,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Konsumsi',
    date: '2026-09-11',
    note: 'Nongkrong kerja remote sore',
    tags: '#kopi #cafe',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-11T15:10:00.000Z'
  },
  {
    id: 1789300010,
    name: 'Makan Siang Bento & Ocha',
    amount: 72760,
    origAmount: 680,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Konsumsi',
    date: '2026-09-13',
    note: 'Lawson Karage Bento + Green Tea',
    tags: '#makansiang',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-13T12:15:00.000Z'
  },
  {
    id: 1789300011,
    name: 'Buku Pemrograman di Kinokuniya',
    amount: 278200,
    origAmount: 2600,
    origCurrency: 'JPY',
    walletId: 'jpy-cash',
    category: 'Belanja',
    date: '2026-09-13',
    note: 'Buku Arsitektur Web Modern',
    tags: '#buku #edukasi',
    type: 'expense',
    recurring: false,
    recurrenceDay: null,
    createdAt: '2026-09-13T14:30:00.000Z'
  }
];

const allTransactions = [...septTxs, ...baseData.transactions];

const initialStorage = {
  transactions: allTransactions,
  shortcuts: [
    { id: 's1', label: 'Makan Siang', icon: '🍱', cat: 'Konsumsi', idr: 85000 },
    { id: 's2', label: 'Ojek/Taksi',  icon: '🚖', cat: 'Transport', idr: 50000 },
    { id: 's3', label: 'Kopi',        icon: '☕', cat: 'Konsumsi', idr: 45000 },
    { id: 's4', label: 'Listrik',     icon: '⚡', cat: 'Tagihan',   idr: 513600 },
    { id: 's5', label: 'Groceries',   icon: '🛒', cat: 'Belanja',   idr: 350000 },
    { id: 's6', label: 'Lain-lain',   icon: '📌', cat: 'Lainnya',   idr: 30000 }
  ],
  budgets: { daily: 350000, monthly: 9000000 },
  currency: 'JPY',
  rates: { JPY: 107, USD: 15800 },
  ratesUpdatedAt: '2026-09-13T00:00:00.000Z',
  ratesSource: 'frankfurter',
  darkMode: true,
  wallets: [
    { id: 'jpy-cash', name: 'JPY Cash', currency: 'JPY', icon: '💴', color: '#7c6fe0', initialBalance: 150000 },
    { id: 'idr-gopay', name: 'BCA / GoPay', currency: 'IDR', icon: '💚', color: '#00ae42', initialBalance: 5000000 },
    { id: 'usd-save', name: 'Wise Savings', currency: 'USD', icon: '💵', color: '#42a5f5', initialBalance: 1200 }
  ]
};

async function run() {
  const profileDir = path.join(__dirname, '.chrome_profile_full');
  if (fs.existsSync(profileDir)) {
    fs.rmSync(profileDir, { recursive: true, force: true });
  }

  console.log('Launching Chrome...');
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--remote-allow-origins=*',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--hide-scrollbars',
    '--user-data-dir=' + profileDir,
    'http://localhost:3000/#dashboard'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  const res = await fetch('http://127.0.0.1:9222/json/list');
  const targets = await res.json();
  const pageTarget = targets.find(t => t.type === 'page');
  if (!pageTarget) throw new Error('Page target not found');

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  console.log('CDP WebSocket connected to page');

  let reqId = 1;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = reqId++;
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Seeding localStorage...');
  const seedScript = `
    (function() {
      const data = ${JSON.stringify(initialStorage)};
      localStorage.setItem('transactions', JSON.stringify(data.transactions));
      localStorage.setItem('shortcuts', JSON.stringify(data.shortcuts));
      localStorage.setItem('budgets', JSON.stringify(data.budgets));
      localStorage.setItem('currency', JSON.stringify(data.currency));
      localStorage.setItem('rates', JSON.stringify(data.rates));
      localStorage.setItem('ratesUpdatedAt', JSON.stringify(data.ratesUpdatedAt));
      localStorage.setItem('ratesSource', JSON.stringify(data.ratesSource));
      localStorage.setItem('darkMode', JSON.stringify(data.darkMode));
      localStorage.setItem('wallets', JSON.stringify(data.wallets));
      window.location.reload();
    })()
  `;

  await send('Runtime.evaluate', { expression: seedScript });
  await new Promise(r => setTimeout(r, 2000));

  console.log('Page reloaded with active data');

  async function setViewport(width, height, isMobile = false) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: isMobile,
      fitWindow: false
    });
    await new Promise(r => setTimeout(r, 300));
  }

  async function evalCode(expr) {
    await send('Runtime.evaluate', { expression: expr });
    await new Promise(r => setTimeout(r, 400));
  }

  async function takeScreenshot(filename) {
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(shot.data, 'base64');
    for (const dir of OUTPUT_DIRS) {
      fs.writeFileSync(path.join(dir, filename), buffer);
    }
    console.log(`Saved: ${filename} (${Math.round(buffer.length / 1024)} KB)`);
  }

  const scenes = [
    {
      name: '01_dashboard_desktop_dark.png',
      desc: 'Dashboard Desktop (Dark Mode)',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          document.documentElement.setAttribute('data-theme', 'dark');
          goTo('dashboard');
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '02_dashboard_mobile_dark.png',
      desc: 'Dashboard Mobile (iPhone Viewport, Dark Mode)',
      action: async () => {
        await setViewport(430, 932, true);
        await evalCode(`
          document.documentElement.setAttribute('data-theme', 'dark');
          goTo('dashboard');
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '03_history_desktop_dark.png',
      desc: 'Halaman Riwayat Transaksi Desktop',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          goTo('history');
          renderHistory();
        `);
        await new Promise(r => setTimeout(r, 500));
      }
    },
    {
      name: '04_history_mobile_dark.png',
      desc: 'Halaman Riwayat Transaksi Mobile',
      action: async () => {
        await setViewport(430, 932, true);
        await evalCode(`
          goTo('history');
          renderHistory();
        `);
        await new Promise(r => setTimeout(r, 500));
      }
    },
    {
      name: '05_stats_desktop_dark.png',
      desc: 'Halaman Statistik & Visualisasi Grafik Desktop',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          goTo('stats');
          renderCharts();
        `);
        await new Promise(r => setTimeout(r, 1000)); // wait for Chart.js animation
      }
    },
    {
      name: '06_calendar_desktop_dark.png',
      desc: 'Halaman Kalender Finansial Desktop',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          goTo('calendar');
          renderCalendar();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '07_calendar_mobile_dark.png',
      desc: 'Halaman Kalender Finansial Mobile',
      action: async () => {
        await setViewport(430, 932, true);
        await evalCode(`
          goTo('calendar');
          renderCalendar();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '08_settings_desktop_dark.png',
      desc: 'Halaman Setelan Lengkap Desktop',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          goTo('settings');
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '09_dashboard_desktop_light.png',
      desc: 'Dashboard Desktop (Light Mode - Washi Sand Neumorphism)',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          state.darkMode = false;
          LS.set('darkMode', false);
          applyTheme();
          goTo('dashboard');
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '10_modal_tambah_transaksi.png',
      desc: 'Modal Tambah Transaksi Baru (Expense/Income/Transfer)',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          state.darkMode = true;
          LS.set('darkMode', true);
          applyTheme();
          goTo('dashboard');
          openAddSheet();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '11_modal_scan_struk_ai.png',
      desc: 'Modal OCR Scan Struk Gemini AI',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          closeModal('add-sheet');
          openScanReceiptSheet();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '12_modal_ai_prompt_generator.png',
      desc: 'Modal AI Import Prompt Generator',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          closeModal('scan-receipt-sheet');
          openAIImportSheet();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '13_modal_kelola_kantong.png',
      desc: 'Modal Tambah/Kelola Kantong Keuangan (Multi-Wallet)',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          closeModal('ai-import-sheet');
          goTo('settings');
          openAddWallet();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '14_modal_kelola_shortcuts.png',
      desc: 'Modal Manajemen Quick Shortcuts',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          closeModal('wallet-modal');
          goTo('dashboard');
          openShortcutManager();
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    },
    {
      name: '15_modal_cloud_sync_auth.png',
      desc: 'Modal Masuk & Registrasi Cloud Sync (Supabase)',
      action: async () => {
        await setViewport(1440, 900, false);
        await evalCode(`
          closeModal('shortcut-manager-sheet');
          openAuthModal('login');
        `);
        await new Promise(r => setTimeout(r, 600));
      }
    }
  ];

  console.log(`Starting capture of ${scenes.length} scenes...`);
  for (const scene of scenes) {
    console.log(`Capturing: ${scene.name} - ${scene.desc}...`);
    await scene.action();
    await takeScreenshot(scene.name);
  }

  console.log('All screenshots captured successfully!');
  ws.close();
  chrome.kill();
  await new Promise(r => setTimeout(r, 1000));
  try {
    if (fs.existsSync(profileDir)) {
      fs.rmSync(profileDir, { recursive: true, force: true });
    }
  } catch (e) {
    // Ignore profile locked by Chrome closing on Windows
  }
}

run().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
