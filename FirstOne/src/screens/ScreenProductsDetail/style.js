import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
       // borderStyle:1,
        paddingTop:10
      },
      rightContainer: {
        flex: 1
      },
      title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "left"
      },
      year: {
        textAlign: "left"
      },
      thumbnail: {
        width: 150,
        height: 100,
        margin:5
      },
      list: {
      }
});