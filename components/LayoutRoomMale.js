import { View, StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-paper";
import React from "react";
import { setCustomText } from "react-native-global-props";
const BTN1 = () => (
  <Button
    style={{
      borderWidth: 1,
      borderColor: "#FFFFFF",
      borderRadius: 0,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
    buttonColor="red"
  >
    <Icon
      color="white"
      size={15}
      source={require("../assets/user3.png")}
    ></Icon>
  </Button>
);
const BTN = () => (
  <Button
    style={{
      flex: 1,
      borderWidth: 1,
      borderColor: "#FFFFFF",
      borderRadius: 0,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Icon
      color="#00C200"
      size={15}
      source={require("../assets/toilet-paper4.png")}
    ></Icon>
  </Button>
);
export default function LayoutRoomMale() {
  const customTextProps = {
    style: {
      fontFamily: "kanitLight",
    },
  };
  setCustomText(customTextProps);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1D2022",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <Text variant="bodyLarge" style={{ color: "white" }}>
        ทางเข้า
      </Text>
      <Icon size={15} color="white" source={"arrow-down-bold"}></Icon>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1D2022",
          width: 300,
          height: 300,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            flex: 4,
            borderWidth: 1,
            borderColor: "#FFFFFF",
            alignItems: "stretch",
          }}
        >
          <BTN />
          <BTN />

          <BTN1 />
          <BTN />
        </View>
        <View
          style={{
            // borderWidth: 1,
            borderColor: "#FFFFFF",
            flex: 2,
            borderBottomWidth: 2,
            alignItems: "stretch",
          }}
        ></View>
        <View
          style={{
            alignItems: "stretch",
            flex: 4,
          }}
        >
          <View
            style={{
              flex: 2,
              borderTopWidth: 2,
              borderRightWidth: 2,
              borderColor: "#FFFFFF",
            }}
          ></View>
          <View
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
          >
            <BTN />
            <BTN1 />
          </View>
        </View>
      </View>
      <Text variant="bodyLarge" style={{ color: "white" }}>
        สถานะล่าสุด
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
