import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Images from '../../utils/Image';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <LinearGradient colors={['#f8a4c8', '#a78bfa', '#60a5fa']} className="flex-1">
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
        <View className="flex-1 items-center justify-center">

          <View className="items-center mb-6">
            <Image
              source={Images.logo}
              className="w-28 h-28 rounded-full border-4 border-white bg-white"
              resizeMode="contain"
            />
          </View>

          <View className="bg-white w-full rounded-3xl p-7 shadow-lg">
            <Text className="text-2xl font-bold text-gray-800 mb-1">Create Account 🛍️</Text>
            <Text className="text-sm text-gray-400 mb-6">Sign up to get started</Text>

            <CustomTextInput
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
            />
            <CustomTextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <CustomTextInput
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <CustomButton title="Register" onPress={handleRegister} loading={loading} />

            <Text
              className="text-center mt-5 text-gray-500 text-sm"
              onPress={() => navigation.navigate('Login')}
            >
              Already have an account?{' '}
              <Text className="text-purple-400 font-bold">Login</Text>
            </Text>
          </View>

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default RegisterScreen;