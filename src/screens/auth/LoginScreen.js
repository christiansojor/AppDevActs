import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import Images from '../../utils/Image';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
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
            <Text className="text-2xl font-bold text-gray-800 mb-1">Welcome Back 👋</Text>
            <Text className="text-sm text-gray-400 mb-6">Login to your account</Text>

            <CustomTextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <CustomTextInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <CustomButton title="Login" onPress={handleLogin} loading={loading} />

            <Text
              className="text-center mt-5 text-gray-500 text-sm"
              onPress={() => navigation.navigate('Register')}
            >
              Don't have an account?{' '}
              <Text className="text-purple-400 font-bold">Register</Text>
            </Text>
          </View>

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;