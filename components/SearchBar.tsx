import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar = ({ placeholder, value, onPress, onChangeText }: Props) => {
  return (
    <View className="flex flex-row items-center justify-center rounded-full px-5 py-4 w-full">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white ml-2"
      />
    </View>
  );
};

export default SearchBar;
