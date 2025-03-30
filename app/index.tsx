import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary">
      {/* Background Image */}
      <Image source={images.bg} className="absolute z-0 w-full h-full" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ minHeight: "100vh", paddingBottom: 10 }}
      >
        {/* Logo */}
        <Image source={icons.logo} className="w-12 h-12 mb-10 mx-auto" />

        {/* Search Bar */}
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for movies"
        />

        {/* Loading Indicator */}
        {moviesLoading ? (
          <View className="mt-10 self-center">
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : moviesError ? (
          <Text className="text-red-500 mt-5">
            Error: {moviesError?.message}
          </Text>
        ) : (
          <View className="mt-5">
            {/* Latest Movies Section */}
            <Text className="text-lg mb-3 text-white">Latest Movies</Text>
            {/* Movie list would go here */}
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
