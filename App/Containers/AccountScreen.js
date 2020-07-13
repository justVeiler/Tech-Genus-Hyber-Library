import React from "react";
import { ScrollView } from "react-native";
import AccountScreenInfoList from "../Components/AccountScreenInfoList";
import AccountScreenHeader from "../Components/AccountScreenHeader";

export default function AccountScreen() {
  console.log("ACCOUNT SCREEN");
  return (
    <ScrollView style={{ flex: 1 }}>
      <AccountScreenHeader />
      <AccountScreenInfoList />
    </ScrollView>
  );
}
