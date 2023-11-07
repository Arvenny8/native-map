import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.main}>
      {/* ///////////////////// Top ///////////////////////*/}
      <View style={styles.top}>
        <Image
          source={require("../assets/logothong.png")}
          style={{ width: 193.791, height: 136.423 }}
        />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 33.581,
              color: "#FFBE00",
              fontFamily: "Chonburi",
            }}
          >
            ทอง
          </Text>
          <Text style={{ fontSize: 33.581, color: "#FFF" }}>ก้อน</Text>
        </View>
      </View>

      {/* Bot */}
      <View style={styles.bot}>
        <View>
          <Text style={{ marginTop: 41, color: "white", fontSize: 20 }}>
            เข้าสู่ระบบด้วย
          </Text>
        </View>

        {/* Icon */}
        <View style={styles.icon}>
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: "#FFF",
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: "#4267b2",
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: "#39cd00",
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/line.png")}
              style={{ width: 32, height: 32 }}
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={{
            width: 350,
            height: 60,
            borderRadius: 16,
            borderColor: "#BBB",
            borderWidth: 1,
            borderStyle: "solid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#D3D3D3", fontSize: 20 }}>
            เข้าสู่ระบบในฐานะบุคคลทั่วไป
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={{
            width: 350,
            height: 60,
            borderRadius: 16,
            backgroundColor: "#FBBB00",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#22272B" }}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#22272B",
    fontFamily: "Chonburi-Regular",
  },

  top: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  bot: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    display: "flex",
    gap: 30,
    backgroundColor: "#1D2022",
  },

  icon: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  btn: {
    backgroundColor: "red",
    color: "red",
  },
});
