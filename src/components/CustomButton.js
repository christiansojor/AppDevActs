import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const CustomButton = ({ title, onPress, loading = false, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      className={`w-full py-4 rounded-xl items-center justify-center mt-2 ${
        disabled || loading ? 'bg-gray-300' : 'bg-purple-400'
      }`}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white text-base font-bold">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;