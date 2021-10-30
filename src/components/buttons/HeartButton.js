/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HeartButton = (props) => {
  const [ addedToFavorite, setAddedToFavorite ] = useState(false);
  const { color, selectedColor, onPress } = props;

  // useEffect(() => {
  //   setAddedToFavorite(addedToFavorite: props.selected)
  // }, [])

  const addToFavorite = () => {
    setAddedToFavorite(!addedToFavorite)
    onPress && onPress();
  }

//   useEffect( () => {
//     console.log(addedToFavorite);
// }, [addedToFavorite]);

  // 	const { color, selectedColor, onPress } = props;

    return (
      <TouchableOpacity
        onPress={addToFavorite}
      >
        <View>
          <Icon
            name={addedToFavorite ? 'heart' : 'heart-o'}
            color={addedToFavorite ? selectedColor : color}            
            size={25}            
          />

          {/* <Icon
            name="heart-o"
            size={18}
            color={color}
            style={[
              { display: addedToFavorite ? 'flex' : 'none' },
              styles.selectedColor,
            ]}
          /> */}
        </View>
      </TouchableOpacity>
    );
}

// HeartButton.propTypes = {
//   color: PropTypes.string.isRequired,
//   selectedColor: PropTypes.string.isRequired,
//   onPress: PropTypes.func,
// };

export default HeartButton;

const styles = StyleSheet.create({
  selectedColor: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
