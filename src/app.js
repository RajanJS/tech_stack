/**
 * Created by rajanmaharjan on 7/17/17.
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Provider} from 'react-redux';
import  {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

import stylesImport from './styles/styles';

const styles = StyleSheet.create(stylesImport());

const App = () => {
    const {mainContainerStyle} = styles;

    return (
        <Provider store={createStore(reducers)}>
            <View style={mainContainerStyle}>
                <Header headerText="Text Stack"/>
                <LibraryList/>
            </View>
        </Provider>
    );
};

export default App;