import react from 'react';
import {View, Text} from 'native-base';

const MyName = (props)=>{
    return(
        <View>
            <Text>
                Hi, {props.MyName} !!!
            </Text>
        </View>
    );

}
export default MyName;