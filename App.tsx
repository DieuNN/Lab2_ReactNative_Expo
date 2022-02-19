import {SafeAreaView, StatusBar} from "react-native";
import {SignUpScreen} from "./screens/sign_up/sign_up_.screen";
import {SignInScreen} from "./screens/sign_in/sign_in.screen";

export default function App() {
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar backgroundColor={"#0f5d8a"}/>
            <SignUpScreen/>
        </SafeAreaView>
    )
}
