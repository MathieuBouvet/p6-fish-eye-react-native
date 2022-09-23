import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import HeaderBar from "./components/HeaderBar";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: "fade",
          header: (props) => <HeaderBar {...props} />,
          headerStyle: {
            backgroundColor: "orange",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Nos Photographes",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Test}
          options={{
            title: "Détails",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
