import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1
    },
    imgLogo:{
        paddingTop:10,
        marginTop:30,
        marginLeft:10
    },
    backImg:{
        height:'80%',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    imgBtn:{
        width:100,
        height:100,
        marginBottom:50,
        zIndex:200
    }
});