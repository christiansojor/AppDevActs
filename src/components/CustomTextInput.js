import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  errorMessage,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="mb-4 w-full">
      {label && (
        <Text className="text-sm font-semibold text-gray-700 mb-1">{label}</Text>
      )}
      <View className={`flex-row items-center border rounded-xl px-3 bg-gray-50 ${errorMessage ? 'border-red-400' : 'border-gray-200'}`}>
        <TextInput
          className="flex-1 py-3 text-sm text-gray-800"
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Text className="text-purple-400 font-semibold text-sm">
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text className="text-red-400 text-xs mt-1">{errorMessage}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;