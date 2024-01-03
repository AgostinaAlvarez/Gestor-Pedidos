import React from 'react';
import { StatusBar, View, Animated, Easing, StyleSheet } from 'react-native';

class CircleLoader extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.circle, { transform: [{ rotate: spin }] }]}
        />
      </View>
    );
  }
}

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <CircleLoader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'gray',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    animationDuration: '0.5s',
  },
});
