// الصق هنا إعدادات تطبيق الويب من Firebase Console > Project settings > Your apps
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  appId: "YOUR_APP_ID"
};
// UID حساب المسؤول الرئيسي (نفس القيمة الموضوعة في firestore.rules). للواجهة فقط، والحماية الفعلية في القواعد.
export const ownerUid = "ضع_هنا_UID_الأدمن";
