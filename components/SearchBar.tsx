import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
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
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white ml-2"
      />
    </View>
  );
};

export default SearchBar;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTk4YzkzNjdjY2QyZGNiZjE3Yjc0Mjk2MjVmYmIxZiIsIm5iZiI6MTcwODg3NDMyMi45MTEsInN1YiI6IjY1ZGI1YTUyODI2MWVlMDE2MmMyNWYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dEjRIjKpDgfhk8IhDwPnIaWa1TqWjChgovMu0x4nFMw

// API_KEY=0998c9367ccd2dcbf17b7429625fbb1f
