import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MenuStack } from './MenuStack.navigation';

export default function navigation(){
    return(
        <NavigationContainer>
            <MenuStack/>
        </NavigationContainer>
    );
}