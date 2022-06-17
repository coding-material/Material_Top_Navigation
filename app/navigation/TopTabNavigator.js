import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ExpoIcon from '../components/ExpoIcon';
import navigationPath from '../config/navigationPath';
import Screen from '../config/Screen';
import {
  Friends,
  Home,
  Marketplace,
  Menu,
  Notifications,
  Watch,
} from '../screens';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Screen>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
            elevation: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'dodgerblue',
            height: 2.85,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          },
        }}
      >
        <Tab.Screen
          name={navigationPath.Home}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='home' focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationPath.Friends}
          component={Friends}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='account-supervisor' focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationPath.Watch}
          component={Watch}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='youtube-tv' focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationPath.Marketplace}
          component={Marketplace}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='family-tree' focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationPath.Notifications}
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='bell' focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationPath.Menu}
          component={Menu}
          options={{
            tabBarIcon: ({ focused }) => (
              <ExpoIcon name='menu' focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </Screen>
  );
}
