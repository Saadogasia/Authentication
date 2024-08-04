import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "./config";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handlesignout = () => {
    auth
      .signOut()
      .then(navigation.replace("login"))
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Welcome: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handlesignout}>
        <Text style={styles.buttontext}>Sign out </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "dodgerblue",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttontext: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
