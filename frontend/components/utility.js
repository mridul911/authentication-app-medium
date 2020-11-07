import AsyncStorage from '@react-native-community/async-storage';
export default class Utility {

    static async saveToken(token) {
        try {
            await AsyncStorage.setItem('token',token);
        } catch (error) {
            console.log(error);
        }
    }
    static async savemod(mod) {
        try {
            await AsyncStorage.setItem('mod', mod);
        } catch (error) {
            console.log(error);
        }
    }
    static async saveusername(username) {
        try {
            await AsyncStorage.setItem('userName', username);
        } catch (error) {
            console.log(error);
        }
    }
    static async delToken() {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('mod');
            await AsyncStorage.setItem('userName');
        } catch (error) {
            console.log(error);
        }
    }
}