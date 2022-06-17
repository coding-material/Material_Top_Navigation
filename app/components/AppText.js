import { StyleSheet, Text } from 'react-native';

export default function AppText({ title }) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
});
