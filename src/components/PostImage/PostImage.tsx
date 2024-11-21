import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PostImage as PostImageTypes, DetailScreenNavigationProp } from "../../types";


const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<DetailScreenNavigationProp>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity onPress={handleViewPress}
        style={styles.buttonContainer}
      >
        <Text style={{ fontSize: 14, color: "#FFF" }}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122771",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "#FFF",
  },
  buttonContainer: {
    backgroundColor: "#5564eb",
    width: 80,
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
});

export default PostImage;