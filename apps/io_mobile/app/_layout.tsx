import { Provider } from '@org/provider';
import { Stack, Slot } from 'expo-router';
import { verifyInstallation } from 'nativewind';


export default function Root(){
  verifyInstallation();
  return (
    <Provider>
      <Stack screenOptions={{headerShown:false}}/>
    </Provider>
  )
}