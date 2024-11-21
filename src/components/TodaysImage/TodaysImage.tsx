import React, { FC } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PostImage, RootStackParams, DetailScreenNavigationProp } from "../../types";

//I did a reusable
//Typing each routes
// type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">;

//FC = Functional Component
const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  // const { navigate } = useNavigation<PostImageNavigationProps>();
  const { navigate } = useNavigation<DetailScreenNavigationProp>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };


  return (
    < View style={styles.container} >
      {
        url !== undefined ?
          <Image source={{ uri: url }} style={styles.image} />
          :
          null
      }
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      {/* <View style={styles.buttonContainer}>
          <Button title="Ver" />
        </View> */}
      <TouchableOpacity onPress={handleViewPress} style={styles.buttonContainer}>
        <Text style={{ fontSize: 18, color: "#FFF" }}>Ver</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C449D",
    marginVertical: 18,
    marginHorizontal: 24,
    borderRadius: 30,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 30
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonContainer: {
    width: 150,
    padding: 5,
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#5564eb",
    borderRadius: 7,
  },
});

export default TodaysImage;