export const firebaseConfig = {
  apiKey: "AIzaSyAWa7cC5HG-SqwGVuu0AfdVdwqn3uM1XU8",
  authDomain: "bakery-cute-2022.firebaseapp.com",
  projectId: "bakery-cute-2022",
  storageBucket: "bakery-cute-2022.appspot.com",
  messagingSenderId: "933131075800",
  appId: "1:933131075800:web:a5e37a91249e4e389d17ad"
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://bakery-cute.vercel.app/',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'https://bakery-cute.vercel.app/login',
};