// Firebase（Firestore）の接続情報。「データベースと同期」で使います。
// 別の Firebase プロジェクト（別の Google アカウント）に切り替えるときは、このファイルの中身だけ書き換えます。
// 値は Firebase コンソールの「プロジェクトの設定 → マイアプリ → SDK の設定と構成（構成）」にある firebaseConfig をそのまま貼ってください。
// ここに書く値は公開されても問題ありません（データはルールと合言葉で守ります。README の「データベースと同期」）。
// apiKey と projectId が空のままなら、同期は使えない状態になります（ほかの機能はそのまま使えます）。
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
