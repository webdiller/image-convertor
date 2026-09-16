const translations = {
  en: {
    brandSub: 'Privacy Policy',
    updated: 'Last updated:',
    title: 'Privacy Policy',
    lead:
      'This Privacy Policy explains how the Image Converter browser extension (“the Extension”) handles information when you use it.',
    s1Title: '1. Who we are',
    s1Body:
      'Image Converter is a browser extension that converts and edits images locally in your browser. Contact: eugenefromrus@gmail.com.',
    s2Title: '2. Summary',
    s2Li1:
      'Image conversion and editing run on your device. Files are not uploaded to our servers.',
    s2Li2: 'We do not operate a backend that receives your images for processing.',
    s2Li3:
      'Preferences and a temporary work session may be stored locally in the browser.',
    s2Li4: 'We do not sell personal data.',
    s3Title: '3. Data we process',
    s3aTitle: '3.1 Images you choose to convert',
    s3aBody:
      'When you select images (file picker, drag-and-drop, or context menu on a page image), those files are processed locally for conversion, resize, rotation, format change, and preview. Processed results stay on your device unless you download or share them yourself.',
    s3bTitle: '3.2 Local settings and session',
    s3bBody:
      'The Extension may store settings such as language, output format, quality, processing mode, and download behavior using browser storage APIs. It may also keep a temporary local work session (source and result image data in IndexedDB, up to a size limit) so your queue can be restored if the popup closes. This data remains in your browser profile.',
    s3cTitle: '3.3 What we do not collect',
    s3cBody:
      'The Extension does not create user accounts, and it does not intentionally collect your name, payment details, precise location, or browsing history for analytics or advertising. We do not use third-party analytics SDKs in the Extension for this purpose.',
    s4Title: '4. Permissions and why they are used',
    s4Li1: 'storage — save preferences and a temporary local work session.',
    s4Li2:
      'contextMenus — add a right-click action on images to open them in the converter.',
    s4Li3:
      'activeTab — work with the active tab when you start conversion from the page context.',
    s4Li4:
      'scripting — limited fallback to obtain an image from the page when converting via the context menu (for example if a direct URL fetch is blocked).',
    s4Li5:
      'Host access (http/https) — fetch the image URL you selected via the context menu so it can be converted locally. This is not used to scrape pages or sell browsing data.',
    s4Note:
      'The Extension packages its scripts and WebAssembly codecs with the install. It does not execute remote code downloaded from arbitrary websites as application logic.',
    s5Title: '5. Sharing and third parties',
    s5Body:
      'We do not sell your images or personal information. Images are not sent to our servers for conversion. Browser vendors (for example Google Chrome) may process extension install and update data under their own policies when you use their store and browser.',
    s6Title: '6. Retention',
    s6Body:
      'Local settings remain until you clear extension data or uninstall the Extension. Temporary work-session images are kept only for local restore and may expire or be cleared when you empty the queue. Compare sessions used for side-by-side preview are temporary.',
    s7Title: '7. Your choices',
    s7Li1: 'Clear the file queue inside the Extension.',
    s7Li2: 'Remove extension storage via browser settings, or uninstall the Extension.',
    s7Li3: 'Contact us at eugenefromrus@gmail.com with privacy questions.',
    s8Title: '8. Children’s privacy',
    s8Body:
      'The Extension is not directed at children under 13, and we do not knowingly collect personal information from children.',
    s9Title: '9. Changes',
    s9Body:
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the Extension after an update means you accept the revised policy.',
    s10Title: '10. Contact',
    s10Body: 'Questions about this Privacy Policy: eugenefromrus@gmail.com.',
    footer:
      '© Image Converter. All processing described here is designed to stay on your device.',
  },
  ru: {
    brandSub: 'Политика конфиденциальности',
    updated: 'Обновлено:',
    title: 'Политика конфиденциальности',
    lead:
      'Эта Политика конфиденциальности объясняет, как расширение Image Converter («Расширение») обрабатывает информацию при использовании.',
    s1Title: '1. Кто мы',
    s1Body:
      'Image Converter — браузерное расширение для локальной конвертации и редактирования изображений. Контакт: eugenefromrus@gmail.com.',
    s2Title: '2. Кратко',
    s2Li1:
      'Конвертация и редактирование выполняются на вашем устройстве. Файлы не загружаются на наши серверы.',
    s2Li2: 'У нас нет серверной части, которая принимает ваши изображения для обработки.',
    s2Li3:
      'Настройки и временная рабочая сессия могут храниться локально в браузере.',
    s2Li4: 'Мы не продаём персональные данные.',
    s3Title: '3. Какие данные обрабатываются',
    s3aTitle: '3.1 Изображения, которые вы выбираете',
    s3aBody:
      'Когда вы выбираете изображения (диалог файлов, drag-and-drop или контекстное меню по картинке на странице), они обрабатываются локально: конвертация, изменение размера, поворот, формат и превью. Результаты остаются на устройстве, пока вы сами их не скачаете или не отправите.',
    s3bTitle: '3.2 Локальные настройки и сессия',
    s3bBody:
      'Расширение может сохранять язык, формат, качество, режим обработки и поведение скачивания через API хранилища браузера. Также может храниться временная локальная сессия (исходники и результаты в IndexedDB в пределах лимита), чтобы очередь восстановилась после закрытия popup. Данные остаются в профиле браузера.',
    s3cTitle: '3.3 Что мы не собираем',
    s3cBody:
      'Расширение не создаёт аккаунты и намеренно не собирает имя, платёжные данные, точную геолокацию или историю браузинга для аналитики или рекламы. Сторонние analytics SDK для этих целей не используются.',
    s4Title: '4. Разрешения и зачем они нужны',
    s4Li1: 'storage — сохранение настроек и временной локальной сессии.',
    s4Li2:
      'contextMenus — пункт в контекстном меню по изображениям для открытия в конвертере.',
    s4Li3:
      'activeTab — работа с активной вкладкой при запуске конвертации со страницы.',
    s4Li4:
      'scripting — ограниченный запасной способ получить изображение со страницы через контекстное меню (например, если прямой fetch URL заблокирован).',
    s4Li5:
      'Доступ к хостам (http/https) — загрузка URL изображения, выбранного через контекстное меню, для локальной конвертации. Не используется для сбора страниц или продажи данных о браузинге.',
    s4Note:
      'Скрипты и WebAssembly-кодеки поставляются вместе с установкой. Расширение не выполняет удалённый код с произвольных сайтов как логику приложения.',
    s5Title: '5. Передача третьим лицам',
    s5Body:
      'Мы не продаём изображения и персональные данные. Изображения не отправляются на наши серверы для конвертации. Производители браузеров (например, Google Chrome) могут обрабатывать данные установки и обновлений по своим правилам при использовании магазина и браузера.',
    s6Title: '6. Срок хранения',
    s6Body:
      'Локальные настройки хранятся, пока вы не очистите данные расширения или не удалите его. Временные изображения сессии нужны только для локального восстановления и могут истечь или удалиться при очистке очереди. Сессии сравнения для превью временные.',
    s7Title: '7. Ваши действия',
    s7Li1: 'Очистить очередь файлов внутри Расширения.',
    s7Li2: 'Удалить данные расширения в настройках браузера или удалить Расширение.',
    s7Li3: 'Написать на eugenefromrus@gmail.com по вопросам конфиденциальности.',
    s8Title: '8. Дети',
    s8Body:
      'Расширение не предназначено для детей младше 13 лет, и мы сознательно не собираем их персональные данные.',
    s9Title: '9. Изменения',
    s9Body:
      'Мы можем обновлять эту Политику. Дата «Обновлено» сверху меняется при правках. Продолжая пользоваться Расширением после обновления, вы принимаете новую редакцию.',
    s10Title: '10. Контакты',
    s10Body: 'Вопросы по Политике конфиденциальности: eugenefromrus@gmail.com.',
    footer:
      '© Image Converter. Описанная обработка рассчитана на выполнение на вашем устройстве.',
  },
  de: {
    brandSub: 'Datenschutzrichtlinie',
    updated: 'Zuletzt aktualisiert:',
    title: 'Datenschutzrichtlinie',
    lead:
      'Diese Datenschutzrichtlinie erklärt, wie die Browser-Erweiterung Image Converter („die Erweiterung“) Informationen verarbeitet, wenn Sie sie nutzen.',
    s1Title: '1. Wer wir sind',
    s1Body:
      'Image Converter ist eine Browser-Erweiterung zur lokalen Konvertierung und Bearbeitung von Bildern. Kontakt: eugenefromrus@gmail.com.',
    s2Title: '2. Kurzfassung',
    s2Li1:
      'Konvertierung und Bearbeitung laufen auf Ihrem Gerät. Dateien werden nicht auf unsere Server hochgeladen.',
    s2Li2:
      'Wir betreiben kein Backend, das Ihre Bilder zur Verarbeitung empfängt.',
    s2Li3:
      'Einstellungen und eine temporäre Arbeitssitzung können lokal im Browser gespeichert werden.',
    s2Li4: 'Wir verkaufen keine personenbezogenen Daten.',
    s3Title: '3. Welche Daten wir verarbeiten',
    s3aTitle: '3.1 Bilder, die Sie konvertieren',
    s3aBody:
      'Wenn Sie Bilder auswählen (Dateidialog, Drag-and-drop oder Kontextmenü auf einem Seitenbild), werden sie lokal verarbeitet: Konvertierung, Größenänderung, Drehen, Format und Vorschau. Ergebnisse bleiben auf Ihrem Gerät, bis Sie sie selbst herunterladen oder weitergeben.',
    s3bTitle: '3.2 Lokale Einstellungen und Sitzung',
    s3bBody:
      'Die Erweiterung kann Sprache, Ausgabeformat, Qualität, Verarbeitungsmodus und Download-Verhalten über Browser-Storage speichern. Sie kann auch eine temporäre lokale Arbeitssitzung (Quell- und Ergebnisbilder in IndexedDB bis zu einem Limit) behalten, damit die Warteschlange nach dem Schließen des Popups wiederhergestellt werden kann. Diese Daten bleiben in Ihrem Browserprofil.',
    s3cTitle: '3.3 Was wir nicht erheben',
    s3cBody:
      'Die Erweiterung erstellt keine Benutzerkonten und erhebt absichtlich keine Namen, Zahlungsdaten, präzisen Standort oder Browserverlauf für Analytics oder Werbung. Es werden keine Drittanbieter-Analytics-SDKs zu diesem Zweck verwendet.',
    s4Title: '4. Berechtigungen und Zweck',
    s4Li1: 'storage — Speichern von Einstellungen und einer temporären lokalen Sitzung.',
    s4Li2:
      'contextMenus — Rechtsklick-Aktion auf Bildern, um sie im Konverter zu öffnen.',
    s4Li3:
      'activeTab — Arbeit mit dem aktiven Tab, wenn Sie die Konvertierung aus dem Seitenkontext starten.',
    s4Li4:
      'scripting — begrenzter Fallback, um ein Bild von der Seite über das Kontextmenü zu erhalten (z. B. wenn ein direkter URL-Abruf blockiert ist).',
    s4Li5:
      'Host-Zugriff (http/https) — Abruf der per Kontextmenü gewählten Bild-URL zur lokalen Konvertierung. Nicht zum Scrapen von Seiten oder Verkauf von Browserdaten.',
    s4Note:
      'Skripte und WebAssembly-Codecs werden mit der Installation ausgeliefert. Die Erweiterung führt keinen Remote-Code von beliebigen Websites als Anwendungslogik aus.',
    s5Title: '5. Weitergabe und Dritte',
    s5Body:
      'Wir verkaufen Ihre Bilder oder personenbezogenen Daten nicht. Bilder werden nicht zur Konvertierung an unsere Server gesendet. Browserhersteller (z. B. Google Chrome) können Installations- und Update-Daten nach eigenen Richtlinien verarbeiten, wenn Sie deren Store und Browser nutzen.',
    s6Title: '6. Aufbewahrung',
    s6Body:
      'Lokale Einstellungen bleiben, bis Sie Erweiterungsdaten löschen oder die Erweiterung deinstallieren. Temporäre Sitzungsbilder dienen nur der lokalen Wiederherstellung und können ablaufen oder beim Leeren der Warteschlange gelöscht werden. Vergleichssitzungen für die Vorschau sind temporär.',
    s7Title: '7. Ihre Optionen',
    s7Li1: 'Dateiiwarteschlange in der Erweiterung leeren.',
    s7Li2:
      'Speicher der Erweiterung in den Browsereinstellungen löschen oder die Erweiterung deinstallieren.',
    s7Li3: 'Kontakt unter eugenefromrus@gmail.com bei Datenschutzfragen.',
    s8Title: '8. Datenschutz von Kindern',
    s8Body:
      'Die Erweiterung richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von Kindern.',
    s9Title: '9. Änderungen',
    s9Body:
      'Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ ändert sich dann. Die weitere Nutzung der Erweiterung nach einer Aktualisierung bedeutet, dass Sie die geänderte Richtlinie akzeptieren.',
    s10Title: '10. Kontakt',
    s10Body: 'Fragen zu dieser Datenschutzrichtlinie: eugenefromrus@gmail.com.',
    footer:
      '© Image Converter. Die hier beschriebene Verarbeitung ist für die Ausführung auf Ihrem Gerät ausgelegt.',
  },
};

const email = 'eugenefromrus@gmail.com';

function withMailLinks(text) {
  return text.replaceAll(
    email,
    `<a href="mailto:${email}">${email}</a>`,
  );
}

function applyLanguage(lang) {
  const table = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    if (!key || !(key in table)) continue;
    const value = table[key];
    if (
      key === 's1Body' ||
      key === 's7Li3' ||
      key === 's10Body' ||
      key.startsWith('s4Li')
    ) {
      el.innerHTML = withMailLinks(value).replace(
        /^(storage|contextMenus|activeTab|scripting|Host access \(http\/https\)|Доступ к хостам \(http\/https\)|Host-Zugriff \(http\/https\))/,
        '<strong>$1</strong>',
      );
    } else {
      el.textContent = value;
    }
  }

  for (const btn of document.querySelectorAll('.lang-btn')) {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  }

  try {
    localStorage.setItem('ic-privacy-lang', lang);
  } catch {
    // ignore
  }
}

function detectLanguage() {
  try {
    const saved = localStorage.getItem('ic-privacy-lang');
    if (saved && translations[saved]) return saved;
  } catch {
    // ignore
  }
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('de')) return 'de';
  return 'en';
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang') || 'en';
    applyLanguage(lang);
  });
});

applyLanguage(detectLanguage());
