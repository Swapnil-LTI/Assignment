import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'solito/router';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

/* eslint-disable-next-line */
export interface LandingProps {
}

export function Landing(props: LandingProps) {
  const router  = useRouter();
  return (
    <View>
      <Text>Welcome to Landing!</Text>
      <Text onPress={()=>{ router.push('/dashboard')}}>Redirect To Dashboard</Text>
      <Calendar
        onDayPress={(day:any) => {
          console.log('selected day', day);
        }}
/>
    </View>
  );
}

export default Landing;
