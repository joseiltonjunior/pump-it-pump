import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '@routes/index';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

export const TabNavigation = () => {
  const navigation = useNavigation<StackNavigationProps>();

  return (
    <View className="flex-row justify-between bg-[#111d27] px-6 pb-6 pt-1">
      <TouchableOpacity
        activeOpacity={0.6}
        className="items-center p-4"
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={22} color={colors.white} />
        <Text className="font-nunito-regular text-sm color-white">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        className="items-center p-4"
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="calendar" size={22} color={colors.white} />
        <Text className="font-nunito-regular text-sm color-white">Warkout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        className="items-center p-4"
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="person" size={22} color={colors.white} />
        <Text className="font-nunito-regular text-sm color-white">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
