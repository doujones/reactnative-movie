import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import MoviePoster from '../components/MoviePoster'

const movies = [
  {
    "title": "Friday the 13th",
    "description": "Jason Voorhees wakes up",
    "imageUrl": "https://picsum.photos/600/600",
    "category":{
      "title": "Action"
    }
  }
]

export default function HomeScreen(props){
  const {navigation} = props;
  return (
    <View style={styles.container}>
    <FlatList
    data={movies}
    keyExtractor={(item, index) => index.toString()}
    numColumns={2}
    contentContainerStyle={styles.scrollContent}
    renderItem={({item, index}) => (
    <MoviePoster
    movies={item}
    onPress={() => Navigation.navigate('Detail', {movies: item})}
    />
    )}
    />
  </View>
  )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingTop: 10
  }
})