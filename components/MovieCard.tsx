import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  title,
  vote_average,
  release_date,
  poster_path,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-48 rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-white text-sm mt-2 font-semibold"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row justify-start items-center gap-x-1">
          <Text className="text-white text-base font-semibold">
            {Math.round(vote_average) / 2}
            <Image source={icons.star} className="w-3 h-3" />
          </Text>
        </View>

        <View className="flex-row justify-between items-center gap-x-1">
          <Text className="text-light-300 text-xs font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-light-300 text-xs font-medium mt-1">Movie</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
