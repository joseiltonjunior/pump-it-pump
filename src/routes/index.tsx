import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Home } from '@screens/home';
import { Warkout } from '@screens/warkout';

export type RootStackParamList = {
  Home: undefined;
  Warkout: { name: string };
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteParamsProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#111d27' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Warkout" component={Warkout} />
    </Stack.Navigator>
  );
}
