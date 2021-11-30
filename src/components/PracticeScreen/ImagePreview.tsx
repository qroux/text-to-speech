import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

interface ImagePreviewProps {
  img: any;
}

const ImagePreview = ({ img }: ImagePreviewProps) => {
  return img ? <Image source={{ uri: img }} style={styles.image} /> : null;
};

export default ImagePreview;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginBottom: 20,
    marginTop: 20,
  },
});
