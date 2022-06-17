import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './app/navigation/TopTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
