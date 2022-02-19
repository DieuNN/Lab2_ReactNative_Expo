import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./sign_up.screen.styles";
import Icon from 'react-native-dynamic-vector-icons'

export function SignUpScreen() {
    return (
        <View style={{flex: 1}}>
            <View>
                <View style={styles.toolbar}>
                    <View style={styles.toolbarLeft}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/arrow_back.png')} style={styles.arrowBackIcon}/>
                        </TouchableOpacity>
                        <Text style={styles.toolbarText}>Sign up</Text>
                    </View>
                    <View>
                        <Icon type={'MaterialIcons'} name={'menu'} size={24} color={'#fff'} style={{marginRight: 16}}/>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainContent}>
                        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                        <View style={styles.inputContainer}>
                            <Icon type={"MaterialIcons"} name={'people'} size={20} color={'#c0c0c0'}/>
                            <TextInput
                                style={styles.input}
                                placeholder={"Enter your username"}
                                placeholderTextColor={'#c0c0c0'}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon type={"MaterialIcons"} name={'email'} size={20} color={'#c0c0c0'}/>
                            <TextInput
                                style={styles.input}
                                placeholder={"Enter your email"}
                                placeholderTextColor={'#c0c0c0'}
                                maxLength={20}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon type={"MaterialIcons"} name={'lock'} size={20} color={'#c0c0c0'}/>
                            <TextInput
                                style={styles.input}
                                placeholder={"Enter your password"}
                                placeholderTextColor={'#c0c0c0'}
                                maxLength={20}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon type={"MaterialIcons"} name={'lock-open'} size={20} color={'#c0c0c0'}/>
                            <TextInput
                                style={styles.input}
                                placeholder={"Re-type your password"}
                                placeholderTextColor={'#c0c0c0'}
                                maxLength={20}
                            />
                        </View>
                        <View style={styles.signupButton}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </View>
                        <View style={styles.signupWithFacebookButton}>
                            <Text style={styles.buttonText}>Sign up with Facebook</Text>
                        </View>
                        <View style={styles.spacer}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
