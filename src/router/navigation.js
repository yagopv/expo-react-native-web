import { Platform } from 'react-native';

export function navigate(props, dest) {
  console.log(Platform);
  if (Platform.OS === 'web') {
    if (dest === 'back') {
      props.history.goBack();
    } else {
      props.history.push(dest);
    }
  } else {
    if (dest === 'back') {
      props.navigation.goBack();
    } else {
      props.navigation.navigate(dest);
    }
  }
}
