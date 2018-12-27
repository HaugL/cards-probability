import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { TouchableHighlight, Text, StyleSheet, Modal, View } from 'react-native'
import CardSelectorModal from './CardSelectorModal'


export default class CardSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.cardBase} onPress={ this.launchModal }>
          { this.renderCardDetails() }
        </TouchableHighlight>

        <CardSelectorModal 
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
        />
      </View>
    )
  }

  launchModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = (cardFace, cardSuite) => {
    if(cardFace && cardSuite){
      
    }

    this.setState({ modalOpen: false })
  }

  renderCardDetails = () => {
    return (
      <View>
        <Text style={styles.cardLeftText}>10</Text>
        <Text style={styles.cardCenterText}>◆</Text>
        <Text style={styles.cardRightText}>10</Text>
      </View>
    )
  }
}

// ♠
// ♥
// ♣
// ◆

CardSelector.propTypes = {
  value: ImmutablePropTypes.map,
  setValue: PropTypes.func.isRequired,
  styles: PropTypes.object
};

const styles = StyleSheet.create({
  cardBase: {
    borderRadius: 6,
    borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 75,
    height: 100,
    // marginLeft: 'auto',
    // marginRight: 'auto'
  },
  cardLeftText: {
    marginTop: 5,
    marginLeft: 5,
    textAlign: 'left',
  },
  cardRightText: {
    marginTop: 15,
    textAlign: 'right',
    marginRight: 5
  },
  cardCenterText: {
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
  },
  modalContainer: {
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  }
})