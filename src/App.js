
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
import React, { Component } from 'react';
 
import { StyleSheet, View, WebView, Platform } from 'react-native';
 
export default class App extends Component<{}> {
 
  render() {
    return (
 
        <View style={{ height: 300 }}>
 
            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/dFKhWe2bBkM' }}
            />
 
        </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
  
});





























// import React,{Component} from 'react';
// import {StyleSheet} from 'react-native';
// import Video from 'react-native-video';
// import intro from './intro.mp4';
// // Within your render function, assuming you have a file called
// // "background.mp4" in your project. You can include multiple videos
// // on a single screen if you like.
//  export default class App extends Component{
//   render(){
//     return(
// <Video source={intro}   // Can be a URL or a local file.
//        ref={(ref) => {
//          this.player = ref
//        }}                                      // Store reference
//        onBuffer={this.onBuffer}                // Callback when remote video is buffering
//        onError={this.videoError}               // Callback when video cannot be loaded
//        style={styles.backgroundVideo} />
//     );
//   }
//  } 

 
// // Later on in your styles..
// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
