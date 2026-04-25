import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../app/action';

const products = [
  { id: '1', name: 'Sneakers', price: '$89.99', emoji: '👟' },
  { id: '2', name: 'Jacket', price: '$129.99', emoji: '🧥' },
  { id: '3', name: 'Bag', price: '$59.99', emoji: '👜' },
  { id: '4', name: 'Sunglasses', price: '$39.99', emoji: '🕶️' },
  { id: '5', name: 'Watch', price: '$199.99', emoji: '⌚' },
];

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      <View className="bg-white px-6 pt-14 pb-5 shadow-sm flex-row items-center justify-between">
        <View>
          <Text className="text-2xl font-bold text-gray-800">Hello, Shopper 👋</Text>
          <Text className="text-sm text-gray-400 mt-1">Find something you love</Text>
        </View>
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-purple-400 px-4 py-2 rounded-xl"
        >
          <Text className="text-white font-bold text-sm">Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white flex-row items-center justify-between px-5 py-4 rounded-2xl mb-3 shadow-sm border border-gray-100">
            <View className="flex-row items-center gap-4">
              <Text className="text-3xl">{item.emoji}</Text>
              <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
            </View>
            <Text className="text-base font-bold text-purple-400">{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;