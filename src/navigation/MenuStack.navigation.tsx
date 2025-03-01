import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Slide01} from '../screns/Slide01';
import { Slide02 } from '../screns/Slide02'

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={Slide01}/>
            <Stack.Screen name="Slide2" component={Slide01}/>
        </Stack.Navigator>
    );
}
