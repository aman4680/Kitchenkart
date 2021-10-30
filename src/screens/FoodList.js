    import React, {Component} from 'react';
    import {View, Text, Button, TextInput, FlatList, SectionList, StyleSheet} from 'react-native';
    import Config from 'react-native-config';
    import beverageData from '../components/Data/BeverageData'
    import ListCard from '../components/ListCard';
    
    // Item = ({ title }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.title}>{title}</Text>
    //     </View>
    //   );

    class FoodList extends Component {
      constructor(props) {
        super(props)
      }

      state = {
        foods: [],
        query: ''
      };

      onChangeQuery = text => {
        this.setState({
          query: text,
        });
      }

      filterList = () => {
        const {query} = this.state;
        // const foods_response = await axios.get(`${BASE_URL}/foods?query=${query}`);

        this.setState({
          foods: '',
          query: '',
        });
      };

      viewItem = item => {
        this.props.navigation.navigate('FoodDetails', {
          item,
        });
      };

      renderFood = ({item}) => {
        return <ListCard item={item} viewItem={this.viewItem} />;
      };

      

      componentDidMount() {
        this.setState({
          foods : beverageData,
          query : ''
        })
      }

      render() {
        const {foods, query} = this.state;
        return (
          <View style={styles.wrapper}>
            <View style={styles.topWrapper}>
              <View style={styles.textInputWrapper}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={this.onChangeQuery}
                  value={query}
                  placeholder={'What are you craving for?'}
                />
              </View>
            
              <View style={styles.buttonWrapper}>
                <Button
                  onPress={() => this.filterList()}
                  title="Go"
                  color="#c53c3c"
                />
              </View>
            </View>

            <FlatList
              data={foods}
              renderItem={this.renderFood}
              contentContainerStyle={styles.list}
              // keyExtractor={item => item.id.toString()}
            />
          </View>
        );
      }
    }

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  topWrapper: {
    flexDirection: 'row',
    marginTop: 40
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 35,
    borderColor: '#5d5d5d',
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

export default FoodList