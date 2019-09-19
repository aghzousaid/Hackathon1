import React from 'react';
import { Text, StyleSheet, View , Button, ScrollView, TextInput, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux'
import { getFromApi } from '../API/Api'
import { Input } from 'react-native-elements'

export default class ChercherScreen extends React.Component {

    constructor(props) {
        super(props)
        this.searchedTextDepart = ""
        this.searchedTextArrivee = ""
     
        this.state = {
          trajets: [],
          isVisible : true
        }
      }



      
    _declarerTrajet(){
      
        if (this.searchedTextDepart.length > 0 && this.searchedTextArrivee.length > 0) {
            this.setState({ isLoading: true })
            getFromApi(this.searchedTextDepart, this.searchedTextArrivee).then(data => {
                
                this.setState({
                  trajets: [ ...this.state.trajets, ...data.results ],
                  isLoading: false
                })
            })
           
          }
        
    }



  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }


    _searchTextDepartChanged(text){
        this.searchedTextDepart = text
    }
    _searchTextArriveeChanged(text){
        this.searchedTextArrivee = text
    }



    render() {
      return (
       

        <ScrollView style={{paddingTop: 450,paddingLeft : 70, paddingRight : 70}}>
       
                <TextInput  placeholder='Départ' onChangeText={(text) => this._searchTextDepartChanged(text)}/>
                <TextInput placeholder='Arrivée' onChangeText={(text) => this._searchTextArriveeChanged(text)}/>
                <View style={{margin:7}} />
                <Button 
                        onPress={() => this._declarerTrajet()}
                        title="Déclarer"
                    />
                
                 {this._displayLoading()}
        </ScrollView>
      );
    }
}


const styles = StyleSheet.create({
  
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })