import React, { Component } from "react";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./Styles/AddButtonCameraStyle";
import images from "../Images/images";
import Camera from "./ImagePicker";
import ImagePicker from "react-native-image-picker";
import ImagePicking from '../Containers/ImagePicking';

export default class AddButtonCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

  handlePress = () => {
    // const { navigation } = this.props;
    const options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);
      const { uri } = response;
      // console.log("URI", uri);
      navigate("ImagePicking", { uri: uri });
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          filePath: response,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.button]}>
          <TouchableOpacity
            underlayColor={"#7f58ff"}
            onPress={this.handlePress.bind(this)}>
            <Image source={images.plus} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
