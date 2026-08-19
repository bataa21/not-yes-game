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
