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
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

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
        //  contentContainerStyle={{ minHeight: "100vh", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-12 mb-10 mx-auto" />

        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for movies"
        />

        {/* Trending Movies Section */}

        {trendingMovies && (
          <View className="mt-10">
            <Text className="text-lg mb-3 text-white font-bold">
              Trending Movies
            </Text>

            <FlatList
              horizontal
              data={trendingMovies}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 26 }}
              renderItem={({ item, index }) => (
                <TrendingCard movie={item} index={index} />
              )}
              className="mb-4 mt-3"
              keyExtractor={(item) => item?.movie_id.toString()}
              ItemSeparatorComponent={() => <View className="w-4" />}
            />
          </View>
        )}

        {/* Loading Indicator */}
        {moviesLoading || trendingLoading ? (
          <View className="mt-10 self-center">
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : moviesError || trendingError ? (
          <Text className="text-red-500 mt-5">
            Error: {moviesError?.message || trendingError?.message}
          </Text>
        ) : (
          <View className="mt-5">
            {/* Latest Movies Section */}
            <Text className="text-lg mb-3 text-white">Latest Movies</Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : `latest-${index}`
              }
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
