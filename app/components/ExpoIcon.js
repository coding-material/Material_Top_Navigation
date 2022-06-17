import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ExpoIcon({ name, focused }) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={26}
      focused={focused}
      color={focused ? 'dodgerblue' : 'gray'}
    />
  );
}
