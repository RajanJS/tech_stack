/**
 * Created by rajanmaharjan on 7/18/17.
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';

import {CardSection} from './common';
import {connect} from 'react-redux';

import * as actions from '../actions';

import stylesImport from '../styles/styles';

const styles = StyleSheet.create(stylesImport());

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {

        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text >{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const {cardSectionTitle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={cardSectionTitle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
};

export default connect(mapStateToProps, actions)(ListItem);