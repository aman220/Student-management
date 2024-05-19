import Toast from "react-native-toast-message";


const showToast = (type : string, text:string) => {
  Toast.show({
    type: type,
    text1: text,
    visibilityTime: 2000,
    autoHide: true,
    position: 'top',
  });
};

export default showToast;