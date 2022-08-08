import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitPage from './screens/InitPage';
import HomeScreen from './screens/HomeScreen';
import CallTaxi from './screens/CallTaxi';
import RouteMaker from './screens/RouteMaker';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import Notification from './screens/Notification';
import Profil from './screens/Profil';
import Wallet from './screens/Wallet';
import Settings from './screens/Settings';
import InitForgetPass from './screens/InitForgetPass';
import ResetPassword from './screens/ResetPassword';
import EditProfile from './screens/EditProfile';
import { View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
import CalendarScreen from './screens/CalendarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Profil" component={Profil} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="CallTaxi" component={CallTaxi} />
          <Stack.Screen name="RouteMaker" component={RouteMaker} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />

          <Stack.Screen name="InitPage" component={InitPage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="InitForgetPass" component={InitForgetPass} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>



  );
};

