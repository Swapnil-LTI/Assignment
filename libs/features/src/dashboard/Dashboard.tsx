import React from 'react';
import { View, Text } from 'react-native';

export interface DashboardProps {
}

export function Dashboard(props: DashboardProps) {
  return (
    <View>
      <Text className="text-blue-600 text-3xl font-bold underline sm:text-blue-600 md:text-red-600">Hello from Tailwind</Text>
      <Text>Welcome to Dashboard!</Text>
    </View>
  );
}

export default Dashboard;
