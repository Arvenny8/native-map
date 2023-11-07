// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import MapScreen from './screen/MapScreen';



const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    kanitLight: require("./assets/fonts/Kanit-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const fontConfig = {
    fontFamily: "kanitLight",
  };
  //react-nativepaper
  const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
  };

  //react-native
  const customTextProps = {
    style: {
      ...fontConfig,
    },
  };
  setCustomText(customTextProps);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="MapDetail" component={MapDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
