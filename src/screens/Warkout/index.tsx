import { Container } from '@components/Container';
import { WarkoutItem } from '@components/WarkoutItem';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface warkoutDataProps {
  initialData: Date;
  endDate: Date;
  title: string;
  personalName: string;
  crefPersonal: string;
  warkouts: {
    title: string;
    warkout: {
      title: string;
      series: number;
      repetitions: string;
    }[];
  }[];
}

interface warkoutTodayDataProps {
  title: string;
  warkout: {
    title: string;
    series: number;
    repetitions: string;
  }[];
}

const warkoutData = {
  initialData: '10/12/2024',
  endDate: '21/01/2025',
  title: 'Vida ativa',
  personalName: 'Jonh Doe',
  crefPersonal: '00000-z/pe',
  warkouts: [
    {
      title: 'a',
      warkout: [
        {
          title: 'mobilidade de ombro com bastão',
          series: 2,
          repetitions: '7-2',
        },
        {
          title: 'supino vertical fechado',
          series: 4,
          repetitions: '6+6',
        },
        {
          title: 'supino reto com halteres',
          series: 4,
          repetitions: '7-12',
        },
        {
          title: 'desenvolvimento alternado com halteres',
          series: 4,
          repetitions: '12/10/08/06',
        },
        {
          title: 'running',
          series: 1,
          repetitions: '10 min',
        },
      ],
    },
  ],
};

export function Warkout() {
  const [warkoutToday, setWarkoutToday] = useState<warkoutTodayDataProps>();

  useEffect(() => {
    const filterWarkout = warkoutData.warkouts.find((item) => item.title === 'a');

    setWarkoutToday(filterWarkout);
  }, []);

  return (
    <Container title="Warkout">
      <View className="h-80 items-center bg-gray-800 pt-4">
        <View className="rounded-xl bg-white p-4">
          <View className="flex-row gap-2">
            <Text className="w-fit rounded-2xl border border-[#feab42] px-4 font-nunito-bold text-lg color-[#feab42]">
              Início {warkoutData.initialData}
            </Text>
            <Text className="w-fit rounded-2xl border border-[#feab42] px-4 font-nunito-bold text-lg color-[#feab42]">
              Vencimento {warkoutData.endDate}
            </Text>
          </View>
          <Text className="uppercase">{warkoutData.title}</Text>
          <View className="flex-row gap-2">
            <Text className="uppercase">{warkoutData.personalName}</Text>
            <Text className="uppercase">{warkoutData.crefPersonal}</Text>
          </View>
        </View>
      </View>
      <View className="px-4">
        <View>
          <FlatList
            data={warkoutToday?.warkout}
            keyExtractor={(item) => item.title}
            className="h-96"
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-[0.5px] bg-gray-500" />}
            renderItem={({ item }) => (
              <WarkoutItem
                key={item.title}
                title={item.title}
                series={item.series}
                repetitions={item.repetitions}
              />
            )}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          className="items-center justify-center rounded bg-[#feab42] py-4"
        >
          <Text className="font-nunito-bold text-lg uppercase color-white">go</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
