import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    toolbar: {
        width:'100%',
        height:56,
        backgroundColor:'#1685c5',
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent:"space-between"
    },
    toolbarLeft : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:'100%',
        marginLeft:16
    },
    toolbarText :{
        color:'white',
        fontSize:22,
        marginLeft:32
    },
    logo : {
        width:260,
        height:120,
    },
    textInput : {
        width:'100%',
        backgroundColor:"#17233c",
        height:48,
        borderRadius:48
    },
    arrowBackIcon : {
        width:24,
        height:24
    },
    menuIcon: {
        width:24,
        height:24,
        marginRight:16
    },
    mainContent : {
        height:"100%",
        backgroundColor:'#1a2b46',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingTop:32,
        paddingLeft:16,
        paddingRight:16
    },
    inputContainer : {
        width:'100%',
        backgroundColor:"#17233c",
        borderRadius:48,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        height:48,
        paddingLeft:10,
        marginTop:16,
    },
    input : {
        paddingHorizontal:10,
        fontSize:16,
        height:48,
        width:'90%',
        color:'white'
    },
    signupButton : {
        width:'100%',
        height:48,
        backgroundColor:'#1685c5',
        borderRadius:32,
        marginTop:16,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText : {
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    },
    signupWithFacebookButton : {
        width:'100%',
        height:48,
        borderRadius:32,
        marginTop:8,
        alignItems:"center",
        justifyContent:"center",
    },
    spacer: {
        width:'100%',
        height:64
    },
    rememberMeCheckboxIcon : {
        flexDirection:"row",
        width:'100%',
        marginLeft:10
    },
    rememberMeText : {
        marginLeft:10,
        color:'#fff'
    }


})
