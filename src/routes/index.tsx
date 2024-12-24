import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Calendar } from '@screens/Calendar';
import { Home } from '@screens/Home';
import { Warkout } from '@screens/Warkout';

export type RootStackParamList = {
  Home: undefined;
  Warkout: undefined;
  Calendar: undefined;
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteParamsProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Warkout"
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
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
}
