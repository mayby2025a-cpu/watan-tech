خطوات التشغيل:
1) console.firebase.google.com: أنشئ مشروعًا (خطة Spark المجانية) > أضف Web app وانسخ الإعدادات إلى public/firebase-config.js
2) فعّل Firestore Database (لا تفعّل Storage).
3) Authentication > Sign-in method > فعّل Email/Password، ثم Users > Add user (حساب الأدمن الوحيد) وانسخ UID.
4) الصق UID في firestore.rules مكان: ضع_هنا_UID_الأدمن
5) ضع اللوغو الرسمي في public/assets/logo.png وعدّل ألوان :root في public/style.css من ألوانه.
6) npm i -g firebase-tools && firebase login && firebase init (اختر Hosting + Firestore واحتفظ بالملفات الحالية) ثم:
   firebase deploy
لوحة الإدارة: /admin.html
