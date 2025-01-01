import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'solito/router';

/* eslint-disable-next-line */
export interface LandingProps {
}

export function Landing(props: LandingProps) {
  const router  = useRouter();
  return (
    <View>
      <Text>Welcome to Landing!</Text>
      <Text onPress={()=>{ router.push('/dashboard')}}>Redirect To Dashboard</Text>
    </View>
  );
}

export default Landing;
