import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage";

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({postImages}) =>{

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Últimos 5 Días</Text>
      <ScrollView style={styles.content}>
        {
          postImages?.map(postImage => (
            <PostImage key={`post-image-${postImage.title}`} {...postImage} />
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;