

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Base from '../screens/Base';


export const screenNames = {
    Base: 'Base',
}

export const AppNavigator = createStackNavigator(
    {
        [screenNames.Base]: {
            screen: Base,
        }
    }, {
        initialRouteName: screenNames.Base,
        mode: 'modal',
    }
);

export default createAppContainer(AppNavigator);