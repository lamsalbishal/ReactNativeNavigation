import { Navigation } from "react-native-navigation";
import SplashScreen from "./src/Pages/SplashScreen";
import { RegisterScreen } from "./src/Navigation/RegisterScreen";

RegisterScreen();


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'red',
      style: 'light',
    },
    layout: {
      orientation: ['portrait'],
    },
    animations: {
      push: {
        enabled: false,
      },
      pop: {
        enabled: false,
      },
    },
    topBar: {
      backButton: {
        title: 'Back',
        showTitle: false,
      },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SplashScreen',
            },
          },
        ],
      },
    },
  });
});