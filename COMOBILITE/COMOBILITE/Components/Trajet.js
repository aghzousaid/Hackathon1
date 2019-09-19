import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements'
import { getTrajetsFromApi } from '../API/Api';



export default class TrajetScreen extends React.Component {

  constructor(props) {
    super(props)
  
 
    this.state = {
      trajets: [],
    }
  }


  componentDidMount() {
    getTrajetsFromApi().then(data => {
      this.setState({
        trajets: data,
      })
    })
  }


renderItem = ({ item }) => (
  <ListItem
    title={item.id}
    subtitle={item.départ}
    rigthSubtitle={item.départ}
    
    leftAvatar={{
      source: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
       && { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
      title: item.départs
    }}
  />
)

    render() {
      getTrajetsFromApi().then(data => {
        this.setState({
          trajets: data,
        })
      })
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.trajets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this.renderItem}
          />
        </View>

      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 40
  },
});