import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../styles1/colors';

const Stars = (props) => {
  const { votes, size, color } =   props;
  const stars = () => {
    const starsNumber = parseInt(votes);
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Icon
          key={`star-${i}`}
          name="star"
          size={size}          
          color={starsNumber > i ? color : colors.gray02}
          style={styles.star}
        />,
      );
    }
    return starElements;
  }

  	
  	return (
    <View style={styles.wrapper}>
      <View style={styles.stars}>
        {stars()}
        {votes ? (
          <Text style={styles.votesNumber}>
            {votes}
          </Text>
        ) : null}
      </View>
    </View>
  	);
}

// Stars.propTypes = {
//   votes: PropTypes.number.isRequired,
//   size: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };

export default Stars;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 1,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesNumber: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
    marginLeft: 3,
  },
});
