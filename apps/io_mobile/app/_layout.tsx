import { Provider } from '@org/provider';
import { Stack } from 'expo-router';


export default function Root(){
  return (
    <Provider>
      <Stack screenOptions={{headerShown:false}}/>
    </Provider>
  )
}