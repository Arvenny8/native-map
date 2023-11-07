import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Icon } from "react-native-paper";
import LayoutRoomMale from "../components/LayoutRoomMale";
import LayoutRoomFeMale from "../components/LayoutRoomFeMale";
import LayoutRoomDisabled from "../components/LayoutRoomDisabled";

export default function MapDetail() {
  let [selectbutton, setselectbutton] = useState(1);
  return (
    <>
      <View style={{ height: "100%", backgroundColor: "#22272B" }}>
        <View
          style={{
            height: "30%",
            justifyContent: "space-evenly",
            paddingHorizontal: 100 / 3,
            paddingVertical: 100 / 5,
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              height: "70%",
            }}
          >
            <Text variant="headlineSmall" style={{ color: "#FBBB00" }}>
              ซอฟต์แวร์ ปาร์ค
            </Text>
            <Text style={{ color: "#D3D3D3" }}>ห้องน้ำสะอาด</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <Text style={{ color: "#D3D3D3" }}>4.9</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon source="star" color="#FFC107" size={20}></Icon>
                <Icon source="star" color="#FFC107" size={20}></Icon>
                <Icon source="star" color="#FFC107" size={20}></Icon>
                <Icon source="star" color="#FFC107" size={20}></Icon>
                <Icon source="star" color="#FFC107" size={20}></Icon>
              </View>
              <Text style={{ color: "#D3D3D3" }}>(12)</Text>
              <Icon
                source={require("../assets/Group.png")}
                color="white"
                paddingTop={20}
                size={11}
              ></Icon>
              <Icon
                source={require("../assets/disabled.png")}
                color="white"
                paddingTop={20}
                size={11}
              ></Icon>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "30%",
            }}
          >
            <Button
              buttonColor="black"
              mode="outlined"
              textColor="white"
              style={{
                borderRadius: 10,
                borderColor: selectbutton == 1 ? "yellow" : "white",
              }}
              onPress={() => setselectbutton(1)}
              labelStyle={{ fontSize: 16, marginHorizontal: 12 }}
            >
              <Icon source="ellipse" fontSize={20} color="#00C200" />
              <Icon source="human-male" color="white" fontSize={15} />
              <Text style={{ color: "#D3D3D3" }}>ชาย</Text>
            </Button>
            <Button
              buttonColor="black"
              mode="outlined"
              textColor="white"
              style={{
                borderRadius: 10,
                borderColor: selectbutton == 2 ? "yellow" : "white",
              }}
              onPress={() => setselectbutton(2)}
              labelStyle={{ fontSize: 16, marginHorizontal: 12 }}
            >
              <Icon source="ellipse" fontSize={20} color="#FFD500" />
              <Icon source="human-female" color="white" fontSize={20} />
              <Text style={{ color: "#D3D3D3" }}>หญิง</Text>
            </Button>
            <Button
              buttonColor="black"
              mode="outlined"
              textColor="white"
              style={{
                borderRadius: 10,
                borderColor: selectbutton == 3 ? "yellow" : "white",
              }}
              onPress={() => setselectbutton(3)}
              labelStyle={{ fontSize: 16, marginHorizontal: 12 }}
            >
              <Icon source="ellipse" fontSize={20} color="#FF4B26" />
              <Icon source={"human-wheelchair"} color="white" fontSize={20} />
              <Text style={{ color: "#D3D3D3" }}>ผู้พิการ</Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            height: "70%",
          }}
        >
          {selectbutton == 1 ? (
            <LayoutRoomMale />
          ) : selectbutton == 2 ? (
            <LayoutRoomFeMale />
          ) : (
            <LayoutRoomDisabled />
          )}
        </View>
      </View>
    </>
  );
}
