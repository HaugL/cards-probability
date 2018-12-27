import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Button, Picker, StyleSheet, Modal, View, TouchableHighlight } from 'react-native'
import { getColorFromSuite } from '../utils/suite'


export default class CardSelectorModal extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      face: "2",
      suite: "◆"
    };
  }

  render() {

    const {
      isOpen,
      onRequestClose
    } = this.props

    const {
      face, 
      suite
    } = this.state

    return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={isOpen}
          onRequestClose={onRequestClose}
      >
        <View style={styles.modalContainer}>
          <View style={ styles.closeButtonContainer }>
            <Button title='Back' onPress={() => onRequestClose(undefined, undefined)}/>
          </View>
          <Text style={styles.pickerLabel}>Select Face & Suite</Text>
          <View style={ styles.pickerContainer }>
            <Picker
              style={styles.picker}
              onValueChange={this.onFaceSelect}
              selectedValue={this.state.face}
            >
              { ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].map(val => {
                return <Picker.Item label={val} value={val} key={val}/>
              }) }
            </Picker>
            <Picker
              style={styles.picker}
              onValueChange={ this.onSuiteSelect }
              selectedValue={this.state.suite}
            >
              { ["◆", "♥" , "♣", "♠"].map(val => {
                return <Picker.Item 
                  color={getColorFromSuite(val)} 
                  label={val} 
                  value={val} 
                  key={val}
                />
              }) }
            </Picker>
          </View>
          <TouchableHighlight style={styles.submitButton} onPress={ () => onRequestClose(face, suite) }>
            <Text style={{color: getColorFromSuite(suite), ...styles.submitButtonText}}>
              Submit {face} {suite}
            </Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }

  onFaceSelect = (itemValue, itemIndex) => {
    this.setState({ face: itemValue })
  }

  onSuiteSelect = (itemValue, itemIndex) => {
    this.setState({ suite: itemValue })
  }
}

CardSelectorModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 100,
  },
  closeButtonContainer: {
    alignItems: 'flex-start'
  },
  pickerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  picker: {
    height: 50, 
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100
  },
  pickerLabel: {
    textAlign: 'center',
    fontSize: 20
  },
  submitButton: {
    backgroundColor: '#DCDCDC',
    height:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250
  },
  submitButtonText: {
    fontSize: 30,
  }
})