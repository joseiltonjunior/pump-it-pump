import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProps, RootStackParamList } from '@routes/index';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

export function TabNavigation() {
  const navigation = useNavigation<StackNavigationProps>();
  const route = useRoute();

  const tabs: {
    name: keyof RootStackParamList;
    icon: keyof typeof FontAwesome5.glyphMap;
  }[] = [
    { name: 'Home', icon: 'home' },
    { name: 'Warkout', icon: 'dumbbell' },
    { name: 'Calendar', icon: 'calendar' },
  ];

  return (
    <View className="flex-row justify-between border-t border-gray-700 bg-[#111d27] px-6 pb-6 pt-1">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          activeOpacity={0.6}
          className="items-center p-4"
          onPress={() => navigation.navigate(tab.name)}
        >
          <FontAwesome5
            name={tab.icon}
            size={22}
            color={route.name === tab.name ? '#feab42' : colors.gray[500]}
          />
          <Text className="font-nunito-regular text-sm color-white">{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
