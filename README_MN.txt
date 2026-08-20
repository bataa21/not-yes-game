МӨН БИШ — PWA V9.3 FINAL ICON

Файлууд:
- index.html
- manifest.json
- service-worker.js
- icons/
- sounds/

1) Өөрийн 4 MP3 дуугаа sounds/ хавтас руу хуул.
2) Энэ бүх хавтсыг нэг дор server-ээр ажиллуул.
   Windows CMD:
   python -m http.server 8080 --bind 0.0.0.0
3) iPhone Safari:
   http://ТАНЫ-PC-IP:8080/index.html
4) Share → Add to Home Screen.
5) ӨМНӨХ "Мөн биш" Home Screen icon-оо эхлээд устгаад шинэ icon-оор дахин нэм.

Анхаарах:
- iPhone standalone Home Screen mode-д apple-mobile-web-app-capable=yes нэмэгдсэн.
- manifest.json display=standalone.
- Service Worker нь HTTPS эсвэл localhost зэрэг secure context дээр offline cache ажиллуулна.
  LAN-ийн энгийн http://192.168... хаяг дээр Service Worker ажиллахгүй байж болно.


ШИНЭ ICON:
- Цэнхэр NOT / YES / Мөн биш icon
- iPhone: icons/icon-180.png
- PWA: icons/icon-192.png, icons/icon-512.png

iPhone дээр хуучин хар M icon харагдвал:
1. Home Screen дээрх хуучин Мөн биш icon-оо Delete Bookmark / Remove from Home Screen хийнэ.
2. Safari дээр хуудсаа дахин ачаална.
3. Share → Add to Home Screen хийнэ.


V9.5 — SMART INSTALL BUTTON
============================

Шинэ:
- Android / Chrome дээр PWA install боломжтой үед "📲 Суулгах" товч гарна.
- Товч дарахад Chrome-ийн native Install dialog гарна.
- iPhone / iPad дээр "📲 Суулгах" товч дарахад Safari → Share → Add to Home Screen заавар гарна.
- App аль хэдийн standalone суусан үед "Суулгах" товч автоматаар харагдахгүй.
- Offline audio хэвээр: correct / wrong / combo / record MP3 бүгд cache-д орно.

GitHub дээр шинэчлэх:
1. index.html-ийг солих
2. service-worker.js-ийг солих
3. Commit changes
4. GitHub Pages deployment дууссаны дараа browser/PWA-г интернеттэй үед нэг удаа нээх


V9.6 — MN / EN LANGUAGE SUPPORT
================================
- Монгол / English хэл солих товч нэмсэн.
- Сонгосон хэл localStorage-д хадгалагдана.
- MN: Мөн / Биш
- EN: MATCH / NO MATCH
- English app title: Not Yes
- Өнгөний үгс: Red / Green / Blue / Yellow / White
- Practice, Statistics, Achievements, Settings, results, install help бүгд хоёр хэлтэй.
- Smart Install болон offline audio хэвээр.
- Cache: mon-bish-v9-6-mn-en


V9.6.2 — FINAL POLISH
=====================
- Pre-game үед Цаг / Best аль аль нь "—".
- Top bar-ийн Statistics icon-ийг авсан.
- Statistics-ийг Settings дотор оруулсан.
- English Practice-complete popup-ийн гарчиг "Practice" болсон.
- Practice-complete X товч хэвээр.


V9.6.4 — NAME STANDARDIZATION
=============================
- Монгол нэрийг бүх UI дээр “Мөн Биш” гэж нэг мөр болгосон.
- English нэр “Not Yes” хэвээр.
- manifest name / short_name шинэчлэгдсэн.
- Smart Install, MN/EN, Statistics-in-Settings, offline audio хэвээр.


V9.7 — SMART UPDATE SYSTEM
==========================
- Суулгасан PWA шинэ Service Worker илрүүлэхэд update popup харуулна.
- MN: “Шинэчлэлт боломжтой” / “Дараа” / “Шинэчлэх”
- EN: “Update available” / “Later” / “Update”
- “Шинэчлэх” дарахад шинэ worker идэвхжиж app reload хийнэ.
- Тоглоом нээгдэхэд болон background-оос буцаж ирэхэд update шалгана.
- localStorage дахь score/statistics/settings-ийг update код өөрчлөхгүй.


V9.7.1 — SMART UPDATE FIX
=========================
- install event дээрх automatic self.skipWaiting() removed.
- Update popup хэрэглэгчийн сонголтыг хүлээнэ.
- “Дараа / Later” -> popup хаагдана, хуучин хувилбар үргэлжилнэ.
- “Шинэчлэх / Update” -> SKIP_WAITING -> шинэ worker идэвхжинэ -> app reload.


V9.7.2 — STABLE PWA NAME
========================
- manifest name: “Мөн Биш”
- manifest short_name: “Мөн Биш”
- English UI title remains “Not Yes” when EN is selected.
- Smart Update System from V9.7.1 remains unchanged.
- This avoids treating “Мөн Биш · Not Yes” as a new installed-app branding name.
