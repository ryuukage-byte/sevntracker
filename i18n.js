// i18n.js - Comprehensive Translation Dictionary and Logic for SevnTracker
const translations = {
  id: {
    // ── Navigation (Bottom Nav + Sidebar) ──
    nav_home: "Beranda",
    nav_history: "Riwayat",
    nav_stats: "Statistik",
    nav_calendar: "Kalender",
    nav_settings: "Setelan",

    // ── Sidebar ──
    sidebar_subtitle: "EXPENSE TRACKER v9",
    sidebar_light_mode: "Light Mode",
    sidebar_dark_mode: "Dark Mode",

    // ── Header ──
    header_wallet_tooltip: "Klik untuk ganti dompet",
    header_theme_tooltip: "Toggle tema",

    // ── Dashboard ──
    install_title: "Install Aplikasi",
    install_desc: "Akses cepat tanpa buka browser",
    install_btn: "Install",
    backup_banner_msg: "Jangan lupa backup ya~",
    backup_banner_btn: "Backup",
    budget_progress_title: "📊 Progress Budget",
    budget_today: "Hari Ini",
    budget_this_month: "Bulan Ini",
    budget_not_set: "/ Belum diset",
    shortcuts_title: "⚡ Shortcuts",
    shortcuts_manage: "✏️ Kelola →",
    hero_select_wallet: "💳 Pilih Dompet",
    hero_monthly_expense: "Pengeluaran Bulan Ini",
    hero_networth_tooltip: "Total kekayaan bersih dari semua dompet",
    hero_networth_label: "💎 Net Worth",
    hero_ongoing: "Pengeluaran berjalan",
    hero_today: "Hari Ini",
    hero_this_week: "Minggu Ini",
    hero_remaining_budget: "Sisa Budget",
    hero_income: "💰 Pemasukan",
    hero_net_month: "⚖️ Net Bulan Ini",
    recent_title: "🕐 Terbaru",
    recent_see_all: "Lihat Semua →",
    recent_empty: "Belum ada transaksi.<br>Yuk mulai catat pengeluaranmu!",
    recent_empty_wallet: "Belum ada transaksi di dompet ini.<br>Yuk mulai catat pengeluaranmu!",

    // ── History ──
    history_search_placeholder: "Cari nama, kategori, catatan...",
    history_wallet_all: "💳 Semua Kantong",
    history_cat_all: "Semua",
    history_cat_konsumsi: "🍜 Konsumsi",
    history_cat_transport: "🚌 Transport",
    history_cat_belanja: "🛍️ Belanja",
    history_cat_hiburan: "🎮 Hiburan",
    history_cat_tagihan: "⚡ Tagihan",
    history_cat_lainnya: "📦 Lainnya",
    history_date_from: "Dari tanggal",
    history_date_to: "Sampai tanggal",
    history_date_reset: "Reset",
    history_empty: "Belum ada transaksi",
    history_no_found: "Tidak ada transaksi ditemukan",
    history_tx_count: "transaksi",
    history_load_more: "Muat Lebih Banyak ↓",
    history_all_shown: "transaksi ditampilkan",

    // ── Stats ──
    stats_pie_title: "🥧 Pengeluaran per Kategori",
    stats_month_label: "Bulan Ini",
    stats_trend_title: "📈 Tren Pengeluaran",
    stats_show_income: "+ Pemasukan",
    stats_14_days: "14 Hari",
    stats_6_months: "6 Bulan",
    stats_9_months: "9 Bulan",
    stats_cat_summary: "📋 Ringkasan Kategori — ",
    stats_cat_empty: "Belum ada data bulan ini",
    stats_income_summary: "💰 Pemasukan per Kategori — ",
    stats_income_empty: "Belum ada pemasukan bulan ini",
    stats_monthly_compare: "🗓️ Perbandingan Bulanan",
    stats_no_data: "Belum ada data",
    stats_no_tx: "Tidak ada transaksi",
    stats_tx_count: "transaksi",
    chart_expense: "Pengeluaran",
    chart_income: "Pemasukan",
    table_month: "Bulan",
    table_expense: "Keluar",
    table_income: "Masuk",
    table_net: "Net",
    table_now: "NOW",

    // ── Calendar ──
    calendar_guide_title: "💡 Panduan",
    calendar_guide_desc: "Ketuk tanggal yang memiliki angka merah untuk melihat detail pengeluaran. Tanggal hari ini ditandai dengan border ungu.",
    calendar_no_expense: "Tidak ada pengeluaran hari ini",
    calendar_total_today: "Total hari ini",
    calendar_add_expense: "+ Tambah Pengeluaran",
    calendar_months: "Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember",
    calendar_days: "Min,Sen,Sel,Rab,Kam,Jum,Sab",

    // ── Settings ──
    settings_data_warning_title: "Data Tersimpan di Browser",
    settings_data_warning_desc: "Data transaksimu disimpan di <strong>localStorage</strong> browser ini. Jika kamu hapus data browser atau ganti perangkat, data bisa hilang.<br><br><strong>Aktifkan backup Telegram</strong> di bawah agar data selalu aman. 🛡️",
    settings_language: "🌐 Bahasa / Language",
    settings_currency: "💱 Mata Uang & Kurs",
    settings_rate_status: "Status Kurs",
    settings_rate_not_updated: "⚪ Belum diperbarui",
    settings_rate_refresh: "🔄 Perbarui",
    settings_rate_manual: "✏️ Kurs Manual",
    settings_rate_save_manual: "💾 Simpan Kurs Manual",
    settings_rate_note: "💡 Kurs realtime diambil otomatis via <strong>frankfurter.app</strong>. Saat offline, menggunakan kurs terakhir yang tersimpan.",
    settings_budget_title: "💰 Atur Budget",
    settings_budget_daily: "Budget Harian",
    settings_budget_monthly: "Budget Bulanan",
    settings_budget_daily_ph: "cth: 100000",
    settings_budget_monthly_ph: "cth: 3000000",
    settings_budget_save: "✅ Simpan Budget",
    settings_wallet_title: "💳 Kantong / Wallet",
    settings_wallet_add: "+ Tambah",
    settings_data_title: "🗄️ Kelola Data",
    settings_ai_api_key: "🔑 Gemini API Key (Auto-Scan)",
    settings_ai_api_key_ph: "Tempel API Key dari Google AI Studio",
    settings_ai_api_key_save: "Simpan API Key",
    settings_ai_api_key_help: "Dapatkan API Key gratis di <strong style=\"color:var(--accent2)\">aistudio.google.com</strong> untuk fitur scan otomatis.",
    settings_tg_title: "🤖 TELEGRAM BACKUP",
    settings_tg_token: "Bot Token",
    settings_tg_chatid: "Chat ID",
    settings_tg_chatid_ph: "-100xxxxxxx atau @username",
    settings_tg_save: "💾 Simpan",
    settings_tg_send: "📤 Kirim Backup ke Telegram",
    settings_tg_help: "💡 Buat bot via <strong style=\"color:var(--accent2)\">@BotFather</strong> di Telegram. Chat ID bisa dilihat via <strong style=\"color:var(--accent2)\">@userinfobot</strong>.",
    settings_export: "📤 Export Backup",
    settings_import_replace: "🔁 Import & Ganti",
    settings_import_add: "➕ Import & Tambah",
    settings_data_info: "💡 <strong style=\"color:var(--text2)\">Export</strong> simpan file <code style=\"background:var(--surface2);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11px;color:var(--accent2)\">YYYYsvnMMDD.json</code> ke perangkatmu.<br><strong style=\"color:var(--text2)\">Import &amp; Ganti</strong> pulihkan data dari backup, data saat ini akan DIGANTI sepenuhnya.<br><strong style=\"color:var(--text2)\">Import &amp; Tambah</strong> gabungkan data dari backup ke data saat ini — transaksi yang sudah ada (tanggal, nominal, nama, tipe sama) otomatis dideteksi dan dilewati agar tidak dobel.",
    settings_clear_all: "🗑️ Hapus Semua Data",
    settings_cat_rename: "🏷️ Nama Kategori",

    // ── Supabase Cloud Sync & Auth ──
    settings_cloud_title: "☁️ Akun & Sinkronisasi Cloud",
    settings_cloud_desc: "Masuk atau daftar akun agar data tersimpan aman di cloud dan bisa diakses dari perangkat manapun.",
    settings_cloud_btn_login: "🔑 Masuk / Daftar Akun",
    settings_cloud_logged_in_as: "Terhubung sebagai:",
    settings_cloud_sync_now: "🔄 Sinkronkan",
    settings_cloud_change_password: "🔑 Ganti Password",
    settings_cloud_logout: "🚪 Keluar (Logout)",
    settings_cloud_synced: "🟢 Tersinkronisasi",
    settings_cloud_syncing: "🔄 Menyinkronkan...",
    settings_cloud_sync_failed: "⚠️ Gagal Sinkron",
    settings_cloud_offline: "⚪ Belum Masuk",
    settings_cloud_last_sync: "Terakhir sinkron:",
    settings_cloud_never: "Belum pernah",
    toast_login_success: "✅ Berhasil masuk!",
    toast_register_success: "✅ Akun berhasil dibuat! Silakan cek email jika diperlukan verifikasi.",
    toast_logout_success: "👋 Berhasil keluar akun.",
    toast_reset_sent: "📧 Link pemulihan telah dikirim ke email Anda! Cek inbox/spam.",
    toast_password_updated: "✅ Password berhasil diperbarui!",


    // ── FAB ──
    fab_tooltip: "Tambah Pengeluaran",

    // ── Transaction Form Modal ──
    form_new_expense: "+ Pengeluaran Baru",
    form_edit_tx: "✏️ Edit Transaksi",
    form_type_expense: "🔴 Pengeluaran",
    form_type_income: "🟢 Pemasukan",
    form_name_expense: "Nama Pengeluaran *",
    form_name_income: "Nama Pemasukan *",
    form_name_ph: "cth: Makan siang",
    form_amount: "Nominal *",
    form_category: "Kategori",
    form_wallet: "💳 Dari Kantong",
    form_add_detail: "＋ Tambah Detail",
    form_hide_detail: "− Sembunyikan Detail",
    form_date: "Tanggal",
    form_note: "Catatan",
    form_optional: "opsional",
    form_note_ph: "cth: Makan siang bersama tim...",
    form_tags: "Tag",
    form_tags_ph: "#hemat #darurat #rutin",
    form_recurring: "🔁 Tagihan Bulanan Berulang",
    form_recurring_enable: "Aktifkan Pengulangan",
    form_recurring_desc: "Otomatis dicatat tiap bulan pada tanggal yang sama",
    form_cancel: "Batal",
    form_save: "Simpan ✓",
    form_delete_tx: "🗑️ Hapus Transaksi",

    // ── Speed Dial FAB & Add Choice ──
    add_choice_title: "＋ Tambah Pengeluaran",
    add_choice_manual: "✍️ Input Manual",
    add_choice_ai: "🧠 AI Prompt (Teks/Struk/Income)",
    speed_dial_manual: "Input Manual",
    speed_dial_ai: "AI Parser",
    speed_dial_camera: "Kamera / Struk",

    // ── AI Import Modal ──
    ai_title: "🧠 AI Import (Prompt Generator)",
    ai_desc: "Generate prompt siap-pakai untuk AI (Gemini/ChatGPT), lalu tempel hasil JSON-nya di sini untuk otomatis dicatat — lengkap dengan dompet, saldo, dan konversi mata uang.",
    ai_mode_text: "Teks/Suara",
    ai_mode_receipt: "Struk Foto",
    ai_mode_income: "Income/Transfer",
    ai_input_label: "Ceritakan transaksinya",
    ai_input_ph: "cth: beli kopi 500 yen dan onigiri 150 yen di lawson",
    ai_wallet_label: "Dompet Tujuan (saran)",
    ai_generate_btn: "📋 Generate & Copy Prompt",
    ai_json_label: "Tempel Hasil JSON dari AI",
    ai_process_btn: "🔍 Proses JSON",
    ai_result_label: "Hasil",
    ai_prompt_rule: "8. Analisa nama barang atau keterangan dalam pengeluaran maupun pemasukan, jadikan bahasa sederhana dan terjemahkan ke dalam Bahasa Indonesia.",
    ai_total: "🧾 Total",
    ai_auto_process_btn: "✨ Proses Otomatis (Gemini API)",
    ai_loading: "⏳ Sedang memproses... mohon tunggu",
    ai_upload_receipt: "📷 Pilih Foto Struk",
    ai_reset: "Reset",
    ai_save: "✅ Simpan",
    ai_from_wallet: "Dari Dompet",
    ai_to_wallet: "Ke Dompet",

    // ── Quick Confirm Modal ──
    qc_edit_amount: "Edit nominal jika berbeda",
    qc_save: "⚡ Catat Sekarang",

    // ── Shortcut Manager Modal ──
    sc_manager_title: "✏️ Kelola Shortcuts",
    sc_add_new: "＋ Tambah Shortcut Baru",
    sc_new_title: "＋ Shortcut Baru",
    sc_edit_title: "✏️ Edit Shortcut",
    sc_icon: "Icon",
    sc_icon_ph: "atau ketik emoji...",
    sc_name: "Nama Shortcut *",
    sc_name_ph: "cth: Makan Siang",
    sc_amount: "Harga Default *",
    sc_category: "Kategori",
    sc_delete: "🗑️ Hapus Shortcut",
    sc_edit_btn: "✏️ Edit",
    sc_empty: "Belum ada shortcut",
    sc_add_btn: "Tambah Shortcut",

    // ── Wallet Modal ──
    wallet_add_title: "➕ Tambah Kantong",
    wallet_edit_title: "✏️ Edit Kantong",
    wallet_name: "Nama Kantong *",
    wallet_name_ph: "cth: GoPay, JPY Cash",
    wallet_currency: "Mata Uang",
    wallet_icon: "Icon",
    wallet_initial: "Saldo Awal",
    wallet_save: "Simpan ✓",
    wallet_delete: "Hapus",
    wallet_cancel: "Batal",
    wallet_empty: "Belum ada kantong",
    wallet_balance: "saldo",
    wallet_all: "💳 Semua",

    // ── Delete Confirm Modal ──
    modal_delete_title: "Hapus transaksi?",
    modal_delete_subtitle: "Tindakan ini tidak bisa dibatalkan.",
    modal_delete_cancel: "Batal",
    modal_delete_confirm: "Hapus",

    // ── Common ──
    common_cancel: "Batal",
    common_save: "Simpan ✓",
    common_delete: "Hapus",

    // ── Toast Messages ──
    toast_name_required: "Nama wajib diisi!",
    toast_amount_positive: "Nominal harus angka positif!",
    toast_tx_updated: "✅ Transaksi diperbarui",
    toast_income_recorded: "💰 Pemasukan dicatat",
    toast_expense_recorded: "✅ Pengeluaran dicatat",
    toast_tx_deleted: "Transaksi dihapus",
    toast_invalid_amount: "Nominal tidak valid!",
    toast_sc_name_required: "Nama shortcut wajib diisi!",
    toast_sc_price_positive: "Harga harus angka positif!",
    toast_sc_updated: "✅ Shortcut diperbarui",
    toast_sc_added: "✅ Shortcut ditambahkan",
    toast_sc_deleted: "Shortcut dihapus",
    toast_wallet_name_required: "Nama kantong wajib diisi!",
    toast_wallet_saved: "✅ Kantong disimpan!",
    toast_wallet_deleted: "🗑️ Kantong dihapus",
    toast_budget_saved: "✅ Budget disimpan",
    toast_all_cleared: "Semua data dihapus",
    toast_rate_invalid: "Kurs tidak valid!",
    toast_rate_manual_saved: "✅ Kurs manual disimpan",
    toast_rate_fetched: "💹 Kurs berhasil diperbarui!",
    toast_rate_fetch_failed: "❌ Gagal ambil kurs. Cek koneksi.",
    toast_rate_fetching: "🔄 Mengambil kurs terbaru...",
    toast_currency_switched: "Beralih ke",
    toast_sw_update: "🔄 Update tersedia! Refresh untuk versi terbaru.",
    toast_app_installed: "App berhasil diinstall! 🎉",
    toast_tg_cred_required: "Token dan Chat ID wajib diisi!",
    toast_tg_saved: "✅ Konfigurasi Telegram disimpan",
    toast_tg_missing: "⚠️ Isi Bot Token & Chat ID dulu!",
    toast_tg_sending: "📤 Mengirim ke Telegram...",
    toast_tg_sent: "✅ Backup terkirim ke Telegram!",
    toast_tg_fail: "❌ Gagal: ",
    toast_tg_fail_check: "Cek token/chat ID",
    toast_tg_conn_error: "❌ Gagal kirim. Cek koneksi.",
    toast_backup_saved: "✅ Backup disimpan: ",
    toast_invalid_backup: "❌ File bukan backup SevnTracker!",
    toast_data_restored: "✅ Data dipulihkan dari ",
    toast_import_success: "✅ Ditambahkan: ",
    toast_import_skip: " transaksi... Duplikat dilewati: ",
    toast_file_corrupted: "❌ File tidak valid atau rusak!",
    toast_ai_story_required: "Isi ceritanya dulu ya!",
    toast_ai_copied_receipt: "📋 Prompt disalin! Tempel + upload foto struk di Gemini yang baru dibuka.",
    toast_ai_copied_text: "📋 Prompt disalin! Tinggal paste di Gemini yang baru dibuka.",
    toast_sc_recorded: "dicatat",

    // ── AI Import Results ──
    ai_paste_first: "Tempel dulu JSON hasil AI-nya!",
    ai_invalid_json: "❌ JSON tidak valid, cek formatnya",
    ai_empty_json: "❌ JSON kosong",
    ai_expense_result: "🧾 Pengeluaran",
    ai_discount_info: "ℹ️ Diskon {amount} terdeteksi (info saja, tidak dicatat sbg baris terpisah)",
    ai_income_result: "💰 Pemasukan",
    ai_transfer_result: "🔁 Transfer Dompet",
    ai_unrecognized_type: "❌ transaction_type tidak dikenali (harus EXPENSE/INCOME/TRANSFER)",
    ai_select_min_one: "⚠️ Pilih minimal 1 item dulu!",
    ai_select_wallet: "⚠️ Pilih dompet tujuan dulu!",
    ai_invalid_amount: "⚠️ Nominal tidak valid",
    ai_expenses_saved: "pengeluaran disimpan!",
    ai_income_saved: "💰 Pemasukan disimpan!",
    ai_select_both_wallets: "⚠️ Pilih dompet asal & tujuan dulu!",
    ai_same_wallet: "⚠️ Dompet asal & tujuan tidak boleh sama",
    ai_transfer_saved: "🔁 Transfer dompet disimpan!",
    ai_via_import: "Via AI Import",
    ai_tax_service: "Pajak / Service",
    ai_default_item: "Item",
    ai_default_income: "Pemasukan",
    ai_default_transfer: "Transfer Dompet",

    // ── Confirm Dialogs ──
    confirm_delete_sc: "Hapus shortcut ini?",
    confirm_delete_wallet: "Kantong ini masih dipakai di beberapa transaksi. Tetap hapus?",
    confirm_clear_all: "Hapus SEMUA data? Tindakan ini tidak bisa dibatalkan!",
    confirm_delete_tx: "akan dihapus permanen.",
    confirm_no_undo: "Tindakan ini tidak bisa dibatalkan.",
    confirm_restore: "Data saat ini akan DIGANTI. Pastikan sudah export data terkini dulu.",
    confirm_restore_title: "Pulihkan data dari ",

    // ── Misc / Date ──
    date_today: "Hari ini,",
    months_short: "Jan,Feb,Mar,Apr,Mei,Jun,Jul,Ags,Sep,Okt,Nov,Des",
    months_long: "Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember",
    days_short: "Min,Sen,Sel,Rab,Kam,Jum,Sab",

    // ── Exchange Rate ──
    rate_realtime: "🟢 Realtime",
    rate_manual: "🟡 Manual",
    rate_updated: "Diperbarui ",
    rate_loading: "⏳ Memuat...",
    rate_refresh_btn: "🔄 Perbarui",

    // ── Theme ──
    theme_light: "Light Mode",
    theme_dark: "Dark Mode",

    // ── Budget Status ──
    budget_over: "🔴 Over Budget",
    budget_remaining: "✅ Sisa Budget",
    budget_set_prompt: "💰 Set budget dulu yuk",
    budget_set_link: "/ Set budget ⚙️",

    // ── Backup Banner ──
    backup_never: "Jangan lupa backup ya~ Data belum pernah disimpan.",
    backup_days_ago: "Jangan lupa backup ya~ Sudah {days} hari nih.",

    // ── Telegram Backup ──
    tg_backup_caption: "📦 SevnTracker Backup",
    tg_backup_tx_count: "transaksi",

    // ── AI Prompt Mode Labels ──
    ai_mode_a_label: "📝 Ceritakan pengeluaran (teks/hasil voice-to-text)",
    ai_mode_a_ph: "cth: beli kopi 500 yen dan onigiri 150 yen di lawson",
    ai_mode_a_hint: "① Isi cerita transaksi ② Generate & Copy Prompt (Gemini otomatis kebuka) ③ Paste ④ Tempel hasil JSON di bawah.",
    ai_mode_b_label: "Deskripsi tambahan struk (opsional)",
    ai_mode_b_ph: "opsional, cth: struk dari Lawson tadi siang",
    ai_mode_b_hint: "① Copy Prompt (Gemini otomatis kebuka) ② Paste + upload FOTO STRUK ③ Tempel hasil JSON-nya di bawah.",
    ai_mode_c_label: "Ceritakan pemasukan / transfer",
    ai_mode_c_ph: "cth: gajian 200000 yen masuk ke JPY Cash / pindah 5000 yen dari JPY Cash ke GoPay",
    ai_mode_c_hint: "Cocok untuk pemasukan (gaji, bonus, cashback) atau transfer antar dompet. Gemini otomatis kebuka setelah copy.",

    // ── Receipt Scan Animation Modal ──
    receipt_scan_anim_title: "Menganalisis Struk...",
    receipt_scan_anim_desc: "Sistem sedang membaca toko, tanggal, item barang, dan total belanja Anda.",
    receipt_scan_time_label: "⏱️ Waktu Proses:",
    receipt_scan_status_label: "⚡ Status:",
    receipt_scan_status_prep: "Menyiapkan...",
    receipt_scan_status_analyzing: "Menganalisis struk...",
    receipt_scan_status_optimizing: "Mengoptimalkan deteksi...",
    receipt_scan_cancel_btn: "Batal",
    receipt_scan_done_toast: "✨ Selesai dalam {secs}s!",
  },
  en: {
    // ── Navigation ──
    nav_home: "Home",
    nav_history: "History",
    nav_stats: "Stats",
    nav_calendar: "Calendar",
    nav_settings: "Settings",

    // ── Sidebar ──
    sidebar_subtitle: "EXPENSE TRACKER v9",
    sidebar_light_mode: "Light Mode",
    sidebar_dark_mode: "Dark Mode",

    // ── Header ──
    header_wallet_tooltip: "Click to switch wallet",
    header_theme_tooltip: "Toggle theme",

    // ── Dashboard ──
    install_title: "Install App",
    install_desc: "Quick access without browser",
    install_btn: "Install",
    backup_banner_msg: "Don't forget to backup~",
    backup_banner_btn: "Backup",
    budget_progress_title: "📊 Budget Progress",
    budget_today: "Today",
    budget_this_month: "This Month",
    budget_not_set: "/ Not set",
    shortcuts_title: "⚡ Shortcuts",
    shortcuts_manage: "✏️ Manage →",
    hero_select_wallet: "💳 Select Wallet",
    hero_monthly_expense: "Expense This Month",
    hero_networth_tooltip: "Total net worth from all wallets",
    hero_networth_label: "💎 Net Worth",
    hero_ongoing: "Running expenses",
    hero_today: "Today",
    hero_this_week: "This Week",
    hero_remaining_budget: "Budget Left",
    hero_income: "💰 Income",
    hero_net_month: "⚖️ Net This Month",
    recent_title: "🕐 Recent",
    recent_see_all: "See All →",
    recent_empty: "No transactions yet.<br>Start recording your expenses!",
    recent_empty_wallet: "No transactions in this wallet.<br>Start recording your expenses!",

    // ── History ──
    history_search_placeholder: "Search name, category, notes...",
    history_wallet_all: "💳 All Wallets",
    history_cat_all: "All",
    history_cat_konsumsi: "🍜 Food",
    history_cat_transport: "🚌 Transport",
    history_cat_belanja: "🛍️ Shopping",
    history_cat_hiburan: "🎮 Entertainment",
    history_cat_tagihan: "⚡ Bills",
    history_cat_lainnya: "📦 Others",
    history_date_from: "From date",
    history_date_to: "To date",
    history_date_reset: "Reset",
    history_empty: "No transactions",
    history_no_found: "No transactions found",
    history_tx_count: "transactions",
    history_load_more: "Load More ↓",
    history_all_shown: "transactions shown",

    // ── Stats ──
    stats_pie_title: "🥧 Expense by Category",
    stats_month_label: "This Month",
    stats_trend_title: "📈 Expense Trend",
    stats_show_income: "+ Income",
    stats_14_days: "14 Days",
    stats_6_months: "6 Months",
    stats_9_months: "9 Months",
    stats_cat_summary: "📋 Category Summary — ",
    stats_cat_empty: "No data this month",
    stats_income_summary: "💰 Income by Category — ",
    stats_income_empty: "No income this month",
    stats_monthly_compare: "🗓️ Monthly Comparison",
    stats_no_data: "No data yet",
    stats_no_tx: "No transactions",
    stats_tx_count: "transactions",
    chart_expense: "Expense",
    chart_income: "Income",
    table_month: "Month",
    table_expense: "Out",
    table_income: "In",
    table_net: "Net",
    table_now: "NOW",

    // ── Calendar ──
    calendar_guide_title: "💡 Guide",
    calendar_guide_desc: "Tap a date with red numbers to see expense details. Today's date is marked with a purple border.",
    calendar_no_expense: "No expenses today",
    calendar_total_today: "Total today",
    calendar_add_expense: "+ Add Expense",
    calendar_months: "January,February,March,April,May,June,July,August,September,October,November,December",
    calendar_days: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",

    // ── Settings ──
    settings_data_warning_title: "Data Saved in Browser",
    settings_data_warning_desc: "Your transaction data is saved in this browser's <strong>localStorage</strong>. If you clear browser data or switch devices, data may be lost.<br><br><strong>Enable Telegram backup</strong> below to keep your data safe. 🛡️",
    settings_language: "🌐 Language",
    settings_currency: "💱 Currency & Rates",
    settings_rate_status: "Rate Status",
    settings_rate_not_updated: "⚪ Not updated",
    settings_rate_refresh: "🔄 Refresh",
    settings_rate_manual: "✏️ Manual Rate",
    settings_rate_save_manual: "💾 Save Manual Rate",
    settings_rate_note: "💡 Realtime rates fetched automatically via <strong>frankfurter.app</strong>. When offline, uses last saved rates.",
    settings_budget_title: "💰 Set Budget",
    settings_budget_daily: "Daily Budget",
    settings_budget_monthly: "Monthly Budget",
    settings_budget_daily_ph: "e.g.: 100000",
    settings_budget_monthly_ph: "e.g.: 3000000",
    settings_budget_save: "✅ Save Budget",
    settings_wallet_title: "💳 Wallets",
    settings_wallet_add: "+ Add",
    settings_data_title: "🗄️ Manage Data",
    settings_ai_api_key: "🔑 Gemini API Key (Auto-Scan)",
    settings_ai_api_key_ph: "Paste API Key from Google AI Studio",
    settings_ai_api_key_save: "Save API Key",
    settings_ai_api_key_help: "Get a free API Key at <strong style=\"color:var(--accent2)\">aistudio.google.com</strong> for auto-scan features.",
    settings_tg_title: "🤖 TELEGRAM BACKUP",
    settings_tg_token: "Bot Token",
    settings_tg_chatid: "Chat ID",
    settings_tg_chatid_ph: "-100xxxxxxx or @username",
    settings_tg_save: "💾 Save",
    settings_tg_send: "📤 Send Backup to Telegram",
    settings_tg_help: "💡 Create a bot via <strong style=\"color:var(--accent2)\">@BotFather</strong> on Telegram. Get Chat ID via <strong style=\"color:var(--accent2)\">@userinfobot</strong>.",
    settings_export: "📤 Export Backup",
    settings_import_replace: "🔁 Import & Replace",
    settings_import_add: "➕ Import & Merge",
    settings_data_info: "💡 <strong style=\"color:var(--text2)\">Export</strong> saves a <code style=\"background:var(--surface2);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11px;color:var(--accent2)\">YYYYsvnMMDD.json</code> file to your device.<br><strong style=\"color:var(--text2)\">Import &amp; Replace</strong> restores data from backup, current data will be FULLY REPLACED.<br><strong style=\"color:var(--text2)\">Import &amp; Merge</strong> merges backup data into current data — duplicate transactions (same date, amount, name, type) are auto-detected and skipped.",
    settings_clear_all: "🗑️ Clear All Data",
    settings_cat_rename: "🏷️ Category Names",

    // ── Supabase Cloud Sync & Auth ──
    settings_cloud_title: "☁️ Account & Cloud Sync",
    settings_cloud_desc: "Sign in or create an account to securely sync your data to the cloud and access it from any device.",
    settings_cloud_btn_login: "🔑 Sign In / Register",
    settings_cloud_logged_in_as: "Connected as:",
    settings_cloud_sync_now: "🔄 Sync Now",
    settings_cloud_change_password: "🔑 Change Password",
    settings_cloud_logout: "🚪 Sign Out",
    settings_cloud_synced: "🟢 Synced",
    settings_cloud_syncing: "🔄 Syncing...",
    settings_cloud_sync_failed: "⚠️ Sync Failed",
    settings_cloud_offline: "⚪ Not signed in",
    settings_cloud_last_sync: "Last synced:",
    settings_cloud_never: "Never",
    toast_login_success: "✅ Signed in successfully!",
    toast_register_success: "✅ Account created! Check your email if verification is required.",
    toast_logout_success: "👋 Signed out successfully.",
    toast_reset_sent: "📧 Password recovery link sent to your email! Check inbox/spam.",
    toast_password_updated: "✅ Password updated successfully!",


    // ── FAB ──
    fab_tooltip: "Add Expense",

    // ── Transaction Form Modal ──
    form_new_expense: "+ New Expense",
    form_edit_tx: "✏️ Edit Transaction",
    form_type_expense: "🔴 Expense",
    form_type_income: "🟢 Income",
    form_name_expense: "Expense Name *",
    form_name_income: "Income Name *",
    form_name_ph: "e.g.: Lunch",
    form_amount: "Amount *",
    form_category: "Category",
    form_wallet: "💳 From Wallet",
    form_add_detail: "＋ Add Details",
    form_hide_detail: "− Hide Details",
    form_date: "Date",
    form_note: "Notes",
    form_optional: "optional",
    form_note_ph: "e.g.: Lunch with the team...",
    form_tags: "Tags",
    form_tags_ph: "#savings #urgent #routine",
    form_recurring: "🔁 Monthly Recurring Bill",
    form_recurring_enable: "Enable Recurring",
    form_recurring_desc: "Auto-recorded monthly on the same date",
    form_cancel: "Cancel",
    form_save: "Save ✓",
    form_delete_tx: "🗑️ Delete Transaction",

    // ── Speed Dial FAB & Add Choice ──
    add_choice_title: "＋ Add Expense",
    add_choice_manual: "✍️ Manual Input",
    add_choice_ai: "🧠 AI Prompt (Text/Receipt/Income)",
    speed_dial_manual: "Manual Input",
    speed_dial_ai: "AI Parser",
    speed_dial_camera: "Camera / Receipt",

    // ── AI Import Modal ──
    ai_title: "🧠 AI Import (Prompt Generator)",
    ai_desc: "Generate ready-to-use prompts for AI (Gemini/ChatGPT), then paste the JSON result here to auto-record — complete with wallet, balance, and currency conversion.",
    ai_mode_text: "Text/Voice",
    ai_mode_receipt: "Receipt",
    ai_mode_income: "Income/Transfer",
    ai_input_label: "Describe your transaction",
    ai_input_ph: "e.g.: bought coffee 500 yen and onigiri 150 yen at lawson",
    ai_wallet_label: "Target Wallet (suggested)",
    ai_generate_btn: "📋 Generate & Copy Prompt",
    ai_json_label: "Paste AI JSON Result",
    ai_process_btn: "🔍 Process JSON",
    ai_result_label: "Result",
    ai_prompt_rule: "8. Analyze the item names or descriptions in expenses and incomes, simplify them and translate them into English.",
    ai_total: "🧾 Total",
    ai_auto_process_btn: "✨ Auto Process (Gemini API)",
    ai_loading: "⏳ Processing... please wait",
    ai_upload_receipt: "📷 Select Receipt Photo",
    ai_reset: "Reset",
    ai_save: "✅ Save",
    ai_from_wallet: "From Wallet",
    ai_to_wallet: "To Wallet",

    // ── Quick Confirm Modal ──
    qc_edit_amount: "Edit amount if different",
    qc_save: "⚡ Record Now",

    // ── Shortcut Manager Modal ──
    sc_manager_title: "✏️ Manage Shortcuts",
    sc_add_new: "＋ Add New Shortcut",
    sc_new_title: "＋ New Shortcut",
    sc_edit_title: "✏️ Edit Shortcut",
    sc_icon: "Icon",
    sc_icon_ph: "or type emoji...",
    sc_name: "Shortcut Name *",
    sc_name_ph: "e.g.: Lunch",
    sc_amount: "Default Price *",
    sc_category: "Category",
    sc_delete: "🗑️ Delete Shortcut",
    sc_edit_btn: "✏️ Edit",
    sc_empty: "No shortcuts yet",
    sc_add_btn: "Add Shortcut",

    // ── Wallet Modal ──
    wallet_add_title: "➕ Add Wallet",
    wallet_edit_title: "✏️ Edit Wallet",
    wallet_name: "Wallet Name *",
    wallet_name_ph: "e.g.: GoPay, JPY Cash",
    wallet_currency: "Currency",
    wallet_icon: "Icon",
    wallet_initial: "Initial Balance",
    wallet_save: "Save ✓",
    wallet_delete: "Delete",
    wallet_cancel: "Cancel",
    wallet_empty: "No wallets yet",
    wallet_balance: "balance",
    wallet_all: "💳 All",

    // ── Delete Confirm Modal ──
    modal_delete_title: "Delete transaction?",
    modal_delete_subtitle: "This action cannot be undone.",
    modal_delete_cancel: "Cancel",
    modal_delete_confirm: "Delete",

    // ── Common ──
    common_cancel: "Cancel",
    common_save: "Save ✓",
    common_delete: "Delete",

    // ── Toast Messages ──
    toast_name_required: "Name is required!",
    toast_amount_positive: "Amount must be a positive number!",
    toast_tx_updated: "✅ Transaction updated",
    toast_income_recorded: "💰 Income recorded",
    toast_expense_recorded: "✅ Expense recorded",
    toast_tx_deleted: "Transaction deleted",
    toast_invalid_amount: "Invalid amount!",
    toast_sc_name_required: "Shortcut name is required!",
    toast_sc_price_positive: "Price must be a positive number!",
    toast_sc_updated: "✅ Shortcut updated",
    toast_sc_added: "✅ Shortcut added",
    toast_sc_deleted: "Shortcut deleted",
    toast_wallet_name_required: "Wallet name is required!",
    toast_wallet_saved: "✅ Wallet saved!",
    toast_wallet_deleted: "🗑️ Wallet deleted",
    toast_budget_saved: "✅ Budget saved",
    toast_all_cleared: "All data cleared",
    toast_rate_invalid: "Invalid rate!",
    toast_rate_manual_saved: "✅ Manual rate saved",
    toast_rate_fetched: "💹 Rates updated successfully!",
    toast_rate_fetch_failed: "❌ Failed to fetch rates. Check connection.",
    toast_rate_fetching: "🔄 Fetching latest rates...",
    toast_currency_switched: "Switched to",
    toast_sw_update: "🔄 Update available! Refresh for the latest version.",
    toast_app_installed: "App installed successfully! 🎉",
    toast_tg_cred_required: "Token and Chat ID are required!",
    toast_tg_saved: "✅ Telegram configuration saved",
    toast_tg_missing: "⚠️ Fill Bot Token & Chat ID first!",
    toast_tg_sending: "📤 Sending to Telegram...",
    toast_tg_sent: "✅ Backup sent to Telegram!",
    toast_tg_fail: "❌ Failed: ",
    toast_tg_fail_check: "Check token/chat ID",
    toast_tg_conn_error: "❌ Failed to send. Check connection.",
    toast_backup_saved: "✅ Backup saved: ",
    toast_invalid_backup: "❌ File is not a SevnTracker backup!",
    toast_data_restored: "✅ Data restored from ",
    toast_import_success: "✅ Added: ",
    toast_import_skip: " transactions... Duplicates skipped: ",
    toast_file_corrupted: "❌ File is invalid or corrupted!",
    toast_ai_story_required: "Tell your story first!",
    toast_ai_copied_receipt: "📋 Prompt copied! Paste + upload receipt photo in the newly opened Gemini.",
    toast_ai_copied_text: "📋 Prompt copied! Just paste in the newly opened Gemini.",
    toast_sc_recorded: "recorded",

    // ── AI Import Results ──
    ai_paste_first: "Paste the AI JSON result first!",
    ai_invalid_json: "❌ Invalid JSON, check the format",
    ai_empty_json: "❌ Empty JSON",
    ai_expense_result: "🧾 Expense",
    ai_discount_info: "ℹ️ Discount {amount} detected (info only, not recorded as separate line)",
    ai_income_result: "💰 Income",
    ai_transfer_result: "🔁 Wallet Transfer",
    ai_unrecognized_type: "❌ Unrecognized transaction_type (must be EXPENSE/INCOME/TRANSFER)",
    ai_select_min_one: "⚠️ Select at least 1 item first!",
    ai_select_wallet: "⚠️ Select target wallet first!",
    ai_invalid_amount: "⚠️ Invalid amount",
    ai_expenses_saved: "expenses saved!",
    ai_income_saved: "💰 Income saved!",
    ai_select_both_wallets: "⚠️ Select source & target wallets first!",
    ai_same_wallet: "⚠️ Source & target wallets cannot be the same",
    ai_transfer_saved: "🔁 Wallet transfer saved!",
    ai_via_import: "Via AI Import",
    ai_tax_service: "Tax / Service",
    ai_default_item: "Item",
    ai_default_income: "Income",
    ai_default_transfer: "Wallet Transfer",

    // ── Confirm Dialogs ──
    confirm_delete_sc: "Delete this shortcut?",
    confirm_delete_wallet: "This wallet is still used in some transactions. Delete anyway?",
    confirm_clear_all: "Delete ALL data? This action cannot be undone!",
    confirm_delete_tx: "will be permanently deleted.",
    confirm_no_undo: "This action cannot be undone.",
    confirm_restore: "Current data will be REPLACED. Make sure you've exported current data first.",
    confirm_restore_title: "Restore data from ",

    // ── Misc / Date ──
    date_today: "Today,",
    months_short: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
    months_long: "January,February,March,April,May,June,July,August,September,October,November,December",
    days_short: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",

    // ── Exchange Rate ──
    rate_realtime: "🟢 Realtime",
    rate_manual: "🟡 Manual",
    rate_updated: "Updated ",
    rate_loading: "⏳ Loading...",
    rate_refresh_btn: "🔄 Refresh",

    // ── Theme ──
    theme_light: "Light Mode",
    theme_dark: "Dark Mode",

    // ── Budget Status ──
    budget_over: "🔴 Over Budget",
    budget_remaining: "✅ Budget Left",
    budget_set_prompt: "💰 Let's set a budget",
    budget_set_link: "/ Set budget ⚙️",

    // ── Backup Banner ──
    backup_never: "Don't forget to backup~ Data has never been saved.",
    backup_days_ago: "Don't forget to backup~ It's been {days} days.",

    // ── Telegram Backup ──
    tg_backup_caption: "📦 SevnTracker Backup",
    tg_backup_tx_count: "transactions",

    // ── AI Prompt Mode Labels ──
    ai_mode_a_label: "📝 Describe expenses (text/voice-to-text)",
    ai_mode_a_ph: "e.g.: bought coffee 500 yen and onigiri 150 yen at lawson",
    ai_mode_a_hint: "① Describe transaction ② Generate & Copy Prompt (Gemini opens automatically) ③ Paste ④ Paste JSON result below.",
    ai_mode_b_label: "Additional receipt description (optional)",
    ai_mode_b_ph: "optional, e.g.: receipt from Lawson this afternoon",
    ai_mode_b_hint: "① Copy Prompt (Gemini opens automatically) ② Paste + upload RECEIPT PHOTO ③ Paste JSON result below.",
    ai_mode_c_label: "Describe income / transfer",
    ai_mode_c_ph: "e.g.: received salary 200000 yen to JPY Cash / transfer 5000 yen from JPY Cash to GoPay",
    ai_mode_c_hint: "Suitable for income (salary, bonus, cashback) or inter-wallet transfers. Gemini opens automatically after copy.",

    // ── Receipt Scan Animation Modal ──
    receipt_scan_anim_title: "Analyzing Receipt...",
    receipt_scan_anim_desc: "Scanning store, date, purchased items, and total automatically.",
    receipt_scan_time_label: "⏱️ Elapsed Time:",
    receipt_scan_status_label: "⚡ Status:",
    receipt_scan_status_prep: "Preparing...",
    receipt_scan_status_analyzing: "Analyzing receipt...",
    receipt_scan_status_optimizing: "Optimizing detection...",
    receipt_scan_cancel_btn: "Cancel",
    receipt_scan_done_toast: "✨ Completed in {secs}s!",
  },
  ja: {
    // ── Navigation ──
    nav_home: "ホーム",
    nav_history: "履歴",
    nav_stats: "統計",
    nav_calendar: "カレンダー",
    nav_settings: "設定",

    // ── Sidebar ──
    sidebar_subtitle: "家計簿 v9",
    sidebar_light_mode: "ライトモード",
    sidebar_dark_mode: "ダークモード",

    // ── Header ──
    header_wallet_tooltip: "クリックでウォレット切替",
    header_theme_tooltip: "テーマ切替",

    // ── Dashboard ──
    install_title: "アプリをインストール",
    install_desc: "ブラウザなしで素早くアクセス",
    install_btn: "インストール",
    backup_banner_msg: "バックアップをお忘れなく〜",
    backup_banner_btn: "バックアップ",
    budget_progress_title: "📊 予算の進捗",
    budget_today: "今日",
    budget_this_month: "今月",
    budget_not_set: "/ 未設定",
    shortcuts_title: "⚡ ショートカット",
    shortcuts_manage: "✏️ 管理 →",
    hero_select_wallet: "💳 ウォレット選択",
    hero_monthly_expense: "今月の支出",
    hero_networth_tooltip: "全ウォレットの純資産合計",
    hero_networth_label: "💎 純資産",
    hero_ongoing: "現在の支出",
    hero_today: "今日",
    hero_this_week: "今週",
    hero_remaining_budget: "予算残高",
    hero_income: "💰 収入",
    hero_net_month: "⚖️ 今月の純収支",
    recent_title: "🕐 最近の取引",
    recent_see_all: "すべて見る →",
    recent_empty: "取引がありません。<br>支出の記録を始めましょう！",
    recent_empty_wallet: "このウォレットに取引がありません。<br>支出の記録を始めましょう！",

    // ── History ──
    history_search_placeholder: "名前、カテゴリ、メモを検索...",
    history_wallet_all: "💳 すべてのウォレット",
    history_cat_all: "すべて",
    history_cat_konsumsi: "🍜 食費",
    history_cat_transport: "🚌 交通費",
    history_cat_belanja: "🛍️ 買い物",
    history_cat_hiburan: "🎮 娯楽",
    history_cat_tagihan: "⚡ 請求書",
    history_cat_lainnya: "📦 その他",
    history_date_from: "開始日",
    history_date_to: "終了日",
    history_date_reset: "リセット",
    history_empty: "取引がありません",
    history_no_found: "取引が見つかりません",
    history_tx_count: "件の取引",
    history_load_more: "もっと読み込む ↓",
    history_all_shown: "件の取引を表示中",

    // ── Stats ──
    stats_pie_title: "🥧 カテゴリ別支出",
    stats_month_label: "今月",
    stats_trend_title: "📈 支出トレンド",
    stats_show_income: "+ 収入",
    stats_14_days: "14日間",
    stats_6_months: "6ヶ月",
    stats_9_months: "9ヶ月",
    stats_cat_summary: "📋 カテゴリ別まとめ — ",
    stats_cat_empty: "今月のデータがありません",
    stats_income_summary: "💰 カテゴリ別収入 — ",
    stats_income_empty: "今月の収入がありません",
    stats_monthly_compare: "🗓️ 月別比較",
    stats_no_data: "データがありません",
    stats_no_tx: "取引なし",
    stats_tx_count: "件の取引",
    chart_expense: "支出",
    chart_income: "収入",
    table_month: "月",
    table_expense: "支出",
    table_income: "収入",
    table_net: "純額",
    table_now: "現在",

    // ── Calendar ──
    calendar_guide_title: "💡 ガイド",
    calendar_guide_desc: "赤い数字のある日付をタップすると支出の詳細が表示されます。今日の日付は紫のボーダーで示されています。",
    calendar_no_expense: "今日の支出はありません",
    calendar_total_today: "今日の合計",
    calendar_add_expense: "+ 支出を追加",
    calendar_months: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    calendar_days: "日,月,火,水,木,金,土",

    // ── Settings ──
    settings_data_warning_title: "ブラウザに保存されたデータ",
    settings_data_warning_desc: "取引データはこのブラウザの<strong>localStorage</strong>に保存されています。ブラウザのデータを消去したりデバイスを変更すると、データが失われる可能性があります。<br><br>データを安全に保つために、以下の<strong>Telegramバックアップを有効</strong>にしてください。 🛡️",
    settings_language: "🌐 言語 / Language",
    settings_currency: "💱 通貨とレート",
    settings_rate_status: "レート状況",
    settings_rate_not_updated: "⚪ 未更新",
    settings_rate_refresh: "🔄 更新",
    settings_rate_manual: "✏️ 手動レート",
    settings_rate_save_manual: "💾 手動レートを保存",
    settings_rate_note: "💡 リアルタイムレートは<strong>frankfurter.app</strong>から自動取得されます。オフライン時は最後に保存されたレートを使用します。",
    settings_budget_title: "💰 予算設定",
    settings_budget_daily: "日次予算",
    settings_budget_monthly: "月次予算",
    settings_budget_daily_ph: "例: 100000",
    settings_budget_monthly_ph: "例: 3000000",
    settings_budget_save: "✅ 予算を保存",
    settings_wallet_title: "💳 ウォレット",
    settings_wallet_add: "+ 追加",
    settings_data_title: "🗄️ データ管理",
    settings_ai_api_key: "🔑 Gemini APIキー (自動スキャン)",
    settings_ai_api_key_ph: "Google AI StudioのAPIキーを貼り付け",
    settings_ai_api_key_save: "APIキーを保存",
    settings_ai_api_key_help: "<strong style=\"color:var(--accent2)\">aistudio.google.com</strong>で無料APIキーを取得して自動スキャン機能を利用しましょう。",
    settings_tg_title: "🤖 TELEGRAMバックアップ",
    settings_tg_token: "Botトークン",
    settings_tg_chatid: "チャットID",
    settings_tg_chatid_ph: "-100xxxxxxx または @ユーザー名",
    settings_tg_save: "💾 保存",
    settings_tg_send: "📤 Telegramにバックアップ送信",
    settings_tg_help: "💡 Telegramで<strong style=\"color:var(--accent2)\">@BotFather</strong>からBotを作成してください。チャットIDは<strong style=\"color:var(--accent2)\">@userinfobot</strong>で確認できます。",
    settings_export: "📤 バックアップ出力",
    settings_import_replace: "🔁 インポート＆置換",
    settings_import_add: "➕ インポート＆追加",
    settings_data_info: "💡 <strong style=\"color:var(--text2)\">エクスポート</strong>は<code style=\"background:var(--surface2);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11px;color:var(--accent2)\">YYYYsvnMMDD.json</code>ファイルをデバイスに保存します。<br><strong style=\"color:var(--text2)\">インポート＆置換</strong>はバックアップからデータを復元し、現在のデータを完全に置き換えます。<br><strong style=\"color:var(--text2)\">インポート＆追加</strong>はバックアップデータを現在のデータに統合します。重複する取引は自動検出されスキップされます。",
    settings_clear_all: "🗑️ すべてのデータを削除",
    settings_cat_rename: "🏷️ カテゴリ名",

    // ── Supabase Cloud Sync & Auth ──
    settings_cloud_title: "☁️ アカウント＆クラウド同期",
    settings_cloud_desc: "アカウントにログインまたは新規登録すると、データがクラウドに安全に同期され、どの端末からでも利用できます。",
    settings_cloud_btn_login: "🔑 ログイン / 新規登録",
    settings_cloud_logged_in_as: "接続中:",
    settings_cloud_sync_now: "🔄 今すぐ同期",
    settings_cloud_change_password: "🔑 パスワード変更",
    settings_cloud_logout: "🚪 ログアウト",
    settings_cloud_synced: "🟢 同期済み",
    settings_cloud_syncing: "🔄 同期中...",
    settings_cloud_sync_failed: "⚠️ 同期失敗",
    settings_cloud_offline: "⚪ 未ログイン",
    settings_cloud_last_sync: "最終同期:",
    settings_cloud_never: "未同期",
    toast_login_success: "✅ ログインしました！",
    toast_register_success: "✅ アカウントを作成しました！必要に応じてメールをご確認ください。",
    toast_logout_success: "👋 ログアウトしました。",
    toast_reset_sent: "📧 パスワード再設定メールを送信しました！受信トレイや迷惑メールをご確認ください。",
    toast_password_updated: "✅ パスワードを更新しました！",


    // ── FAB ──
    fab_tooltip: "支出を追加",

    // ── Transaction Form Modal ──
    form_new_expense: "+ 新しい支出",
    form_edit_tx: "✏️ 取引を編集",
    form_type_expense: "🔴 支出",
    form_type_income: "🟢 収入",
    form_name_expense: "支出名 *",
    form_name_income: "収入名 *",
    form_name_ph: "例: ランチ",
    form_amount: "金額 *",
    form_category: "カテゴリ",
    form_wallet: "💳 ウォレット",
    form_add_detail: "＋ 詳細を追加",
    form_hide_detail: "− 詳細を隠す",
    form_date: "日付",
    form_note: "メモ",
    form_optional: "任意",
    form_note_ph: "例: チームとのランチ...",
    form_tags: "タグ",
    form_tags_ph: "#節約 #緊急 #定期",
    form_recurring: "🔁 毎月の定期請求",
    form_recurring_enable: "繰り返しを有効化",
    form_recurring_desc: "同じ日付で毎月自動記録",
    form_cancel: "キャンセル",
    form_save: "保存 ✓",
    form_delete_tx: "🗑️ 取引を削除",

    // ── Speed Dial FAB & Add Choice ──
    add_choice_title: "＋ 支出を追加",
    add_choice_manual: "✍️ 手動入力",
    add_choice_ai: "🧠 AIプロンプト（テキスト/レシート/収入）",
    speed_dial_manual: "手動入力",
    speed_dial_ai: "AIパーサー",
    speed_dial_camera: "カメラ / レシート",

    // ── AI Import Modal ──
    ai_title: "🧠 AIインポート（プロンプト生成）",
    ai_desc: "AI（Gemini/ChatGPT）用のプロンプトを生成し、JSONの結果をここに貼り付けて自動記録 — ウォレット、残高、通貨換算を完備。",
    ai_mode_text: "テキスト/音声",
    ai_mode_receipt: "レシート写真",
    ai_mode_income: "収入/振替",
    ai_input_label: "取引を説明してください",
    ai_input_ph: "例: ローソンでコーヒー500円とおにぎり150円を購入",
    ai_wallet_label: "対象ウォレット（推奨）",
    ai_generate_btn: "📋 プロンプト生成＆コピー",
    ai_json_label: "AIのJSON結果を貼り付け",
    ai_process_btn: "🔍 JSONを処理",
    ai_result_label: "結果",
    ai_prompt_rule: "8. 支出と収入の項目名や説明を分析し、簡単な言葉にして日本語に翻訳してください。",
    ai_total: "🧾 合計",
    ai_auto_process_btn: "✨ 自動処理 (Gemini API)",
    ai_loading: "⏳ 処理中... お待ちください",
    ai_upload_receipt: "📷 レシート写真を選択",
    ai_reset: "リセット",
    ai_save: "✅ 保存",
    ai_from_wallet: "送金元ウォレット",
    ai_to_wallet: "送金先ウォレット",

    // ── Quick Confirm Modal ──
    qc_edit_amount: "金額が違う場合は編集",
    qc_save: "⚡ 今すぐ記録",

    // ── Shortcut Manager Modal ──
    sc_manager_title: "✏️ ショートカット管理",
    sc_add_new: "＋ 新しいショートカットを追加",
    sc_new_title: "＋ 新しいショートカット",
    sc_edit_title: "✏️ ショートカットを編集",
    sc_icon: "アイコン",
    sc_icon_ph: "または絵文字を入力...",
    sc_name: "ショートカット名 *",
    sc_name_ph: "例: ランチ",
    sc_amount: "デフォルト価格 *",
    sc_category: "カテゴリ",
    sc_delete: "🗑️ ショートカットを削除",
    sc_edit_btn: "✏️ 編集",
    sc_empty: "ショートカットがありません",
    sc_add_btn: "ショートカット追加",

    // ── Wallet Modal ──
    wallet_add_title: "➕ ウォレットを追加",
    wallet_edit_title: "✏️ ウォレットを編集",
    wallet_name: "ウォレット名 *",
    wallet_name_ph: "例: GoPay, JPY Cash",
    wallet_currency: "通貨",
    wallet_icon: "アイコン",
    wallet_initial: "初期残高",
    wallet_save: "保存 ✓",
    wallet_delete: "削除",
    wallet_cancel: "キャンセル",
    wallet_empty: "ウォレットがありません",
    wallet_balance: "残高",
    wallet_all: "💳 すべて",

    // ── Delete Confirm Modal ──
    modal_delete_title: "取引を削除しますか？",
    modal_delete_subtitle: "この操作は元に戻せません。",
    modal_delete_cancel: "キャンセル",
    modal_delete_confirm: "削除",

    // ── Common ──
    common_cancel: "キャンセル",
    common_save: "保存 ✓",
    common_delete: "削除",

    // ── Toast Messages ──
    toast_name_required: "名前は必須です！",
    toast_amount_positive: "金額は正の数でなければなりません！",
    toast_tx_updated: "✅ 取引を更新しました",
    toast_income_recorded: "💰 収入を記録しました",
    toast_expense_recorded: "✅ 支出を記録しました",
    toast_tx_deleted: "取引を削除しました",
    toast_invalid_amount: "無効な金額です！",
    toast_sc_name_required: "ショートカット名は必須です！",
    toast_sc_price_positive: "価格は正の数でなければなりません！",
    toast_sc_updated: "✅ ショートカットを更新しました",
    toast_sc_added: "✅ ショートカットを追加しました",
    toast_sc_deleted: "ショートカットを削除しました",
    toast_wallet_name_required: "ウォレット名は必須です！",
    toast_wallet_saved: "✅ ウォレットを保存しました！",
    toast_wallet_deleted: "🗑️ ウォレットを削除しました",
    toast_budget_saved: "✅ 予算を保存しました",
    toast_all_cleared: "すべてのデータを削除しました",
    toast_rate_invalid: "無効なレートです！",
    toast_rate_manual_saved: "✅ 手動レートを保存しました",
    toast_rate_fetched: "💹 レートを更新しました！",
    toast_rate_fetch_failed: "❌ レートの取得に失敗しました。接続を確認してください。",
    toast_rate_fetching: "🔄 最新レートを取得中...",
    toast_currency_switched: "に切り替えました",
    toast_sw_update: "🔄 アップデートがあります！最新版にリフレッシュしてください。",
    toast_app_installed: "アプリのインストールに成功しました！ 🎉",
    toast_tg_cred_required: "トークンとチャットIDは必須です！",
    toast_tg_saved: "✅ Telegram設定を保存しました",
    toast_tg_missing: "⚠️ BotトークンとチャットIDを入力してください！",
    toast_tg_sending: "📤 Telegramに送信中...",
    toast_tg_sent: "✅ バックアップをTelegramに送信しました！",
    toast_tg_fail: "❌ 失敗: ",
    toast_tg_fail_check: "トークン/チャットIDを確認",
    toast_tg_conn_error: "❌ 送信に失敗しました。接続を確認してください。",
    toast_backup_saved: "✅ バックアップを保存しました: ",
    toast_invalid_backup: "❌ SevnTrackerのバックアップファイルではありません！",
    toast_data_restored: "✅ からデータを復元しました: ",
    toast_import_success: "✅ 追加: ",
    toast_import_skip: " 件の取引... スキップされた重複: ",
    toast_file_corrupted: "❌ ファイルが無効または破損しています！",
    toast_ai_story_required: "まず内容を入力してください！",
    toast_ai_copied_receipt: "📋 プロンプトをコピーしました！新しく開いたGeminiにレシート写真を貼り付けてください。",
    toast_ai_copied_text: "📋 プロンプトをコピーしました！新しく開いたGeminiに貼り付けてください。",
    toast_sc_recorded: "記録しました",

    // ── AI Import Results ──
    ai_paste_first: "まずAIのJSON結果を貼り付けてください！",
    ai_invalid_json: "❌ 無効なJSON、フォーマットを確認してください",
    ai_empty_json: "❌ 空のJSON",
    ai_expense_result: "🧾 支出",
    ai_discount_info: "ℹ️ 割引{amount}を検出（情報のみ、別の行として記録されません）",
    ai_income_result: "💰 収入",
    ai_transfer_result: "🔁 ウォレット振替",
    ai_unrecognized_type: "❌ transaction_typeが認識されません（EXPENSE/INCOME/TRANSFERのいずれかである必要があります）",
    ai_select_min_one: "⚠️ 少なくとも1つのアイテムを選択してください！",
    ai_select_wallet: "⚠️ 先に対象ウォレットを選択してください！",
    ai_invalid_amount: "⚠️ 無効な金額",
    ai_expenses_saved: "件の支出を保存しました！",
    ai_income_saved: "💰 収入を保存しました！",
    ai_select_both_wallets: "⚠️ 送金元と送金先のウォレットを選択してください！",
    ai_same_wallet: "⚠️ 送金元と送金先のウォレットは同じにできません",
    ai_transfer_saved: "🔁 ウォレット振替を保存しました！",
    ai_via_import: "AIインポート経由",
    ai_tax_service: "税金 / サービス料",
    ai_default_item: "アイテム",
    ai_default_income: "収入",
    ai_default_transfer: "ウォレット振替",

    // ── Confirm Dialogs ──
    confirm_delete_sc: "このショートカットを削除しますか？",
    confirm_delete_wallet: "このウォレットはいくつかの取引で使用されています。それでも削除しますか？",
    confirm_clear_all: "すべてのデータを削除しますか？この操作は元に戻せません！",
    confirm_delete_tx: "は完全に削除されます。",
    confirm_no_undo: "この操作は元に戻せません。",
    confirm_restore: "現在のデータは置き換えられます。先に現在のデータをエクスポートしてください。",
    confirm_restore_title: "からデータを復元: ",

    // ── Misc / Date ──
    date_today: "今日、",
    months_short: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    months_long: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    days_short: "日,月,火,水,木,金,土",

    // ── Exchange Rate ──
    rate_realtime: "🟢 リアルタイム",
    rate_manual: "🟡 手動",
    rate_updated: "更新日: ",
    rate_loading: "⏳ 読み込み中...",
    rate_refresh_btn: "🔄 更新",

    // ── Theme ──
    theme_light: "ライトモード",
    theme_dark: "ダークモード",

    // ── Budget Status ──
    budget_over: "🔴 予算超過",
    budget_remaining: "✅ 予算残高",
    budget_set_prompt: "💰 予算を設定しましょう",
    budget_set_link: "/ 予算設定 ⚙️",

    // ── Backup Banner ──
    backup_never: "バックアップをお忘れなく〜 まだデータが保存されていません。",
    backup_days_ago: "バックアップをお忘れなく〜 もう{days}日経ちました。",

    // ── Telegram Backup ──
    tg_backup_caption: "📦 SevnTracker バックアップ",
    tg_backup_tx_count: "件の取引",

    // ── AI Prompt Mode Labels ──
    ai_mode_a_label: "📝 支出を説明（テキスト/音声入力）",
    ai_mode_a_ph: "例: ローソンでコーヒー500円とおにぎり150円を購入",
    ai_mode_a_hint: "① 取引内容を入力 ② プロンプト生成＆コピー（Geminiが自動で開きます） ③ 貼り付け ④ JSON結果を下に貼り付け。",
    ai_mode_b_label: "レシートの追加説明（任意）",
    ai_mode_b_ph: "任意、例: 今日の昼のローソンのレシート",
    ai_mode_b_hint: "① プロンプトをコピー（Geminiが自動で開きます） ② 貼り付け + レシート写真をアップロード ③ JSON結果を下に貼り付け。",
    ai_mode_c_label: "収入/振替を説明",
    ai_mode_c_ph: "例: 給料200000円がJPY Cashに入金 / JPY CashからGopayに5000円振替",
    ai_mode_c_hint: "収入（給料、ボーナス、キャッシュバック）やウォレット間の振替に最適。コピー後にGeminiが自動で開きます。",

    // ── Receipt Scan Animation Modal ──
    receipt_scan_anim_title: "レシート解析中...",
    receipt_scan_anim_desc: "店舗名、日付、品目、合計金額を自動解析しています。",
    receipt_scan_time_label: "⏱️ 処理時間:",
    receipt_scan_status_label: "⚡ ステータス:",
    receipt_scan_status_prep: "準備中...",
    receipt_scan_status_analyzing: "レシート解析中...",
    receipt_scan_status_optimizing: "検出を最適化中...",
    receipt_scan_cancel_btn: "キャンセル",
    receipt_scan_done_toast: "✨ {secs}秒で完了しました！",
  }
};

let currentLang = localStorage.getItem('app_lang') || 'id';

function t(key) {
  const langDict = translations[currentLang] || translations['id'];
  return langDict[key] || translations['id'][key] || key;
}

function getMonthsShort() {
  return t('months_short').split(',');
}

function getMonthsLong() {
  return (t('calendar_months') || t('months_long')).split(',');
}

function getDaysShort() {
  return (t('calendar_days') || t('days_short')).split(',');
}

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    applyTranslations();
    // Re-render dynamic content
    if (typeof renderAll === 'function') renderAll();
  }
}

function applyTranslations() {
  // Apply to all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('data-i18n-placeholder')) {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
      }
    }

    // Use innerHTML if the text contains HTML tags, otherwise use textContent
    if (translation.includes('<') || translation.includes('&')) {
      el.innerHTML = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Apply to all elements with data-i18n-placeholder
  const phElements = document.querySelectorAll('[data-i18n-placeholder]');
  phElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Apply to all elements with data-i18n-title
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });

  // Update the language select dropdown
  const langSelect = document.getElementById('setting-language-select');
  if (langSelect) {
    langSelect.value = currentLang;
  }
}

// Initial application of translations on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});
