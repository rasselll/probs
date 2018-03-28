/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage, Alert, TouchableHighlight, StyleSheet } from 'react-native';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col, Text as NBText} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-af-video-player'
import PropTypes from 'prop-types';
//import ReactPlayer from 'react-player'

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';
import LightVideo from "../video/video.mp4"


//const input = document.querySelector('https://your-url.com/video.mp4')
//const url = URL.createObjectURL('https://your-url.com/video.mp4')

export default class Category extends Component {

  constructor(props) {
    super(props);

    this.state = {   
isFullScreen: false,
      items: []
    };

        onFullScreen = fullScreen => {
    this.setState({
      isFullScreen: fullScreen
    });
  }
    
 

  }


  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      // If you're using stack navigators, you can hide the header bar like so
      header,
      // If you're using the tab navigators, you can hide the tab bar like so
      tabBarVisible,
    }
  }




    onFullScreen(fullScreen) {

   
    }

  componentWillMount() {
    var products = [
    {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '223$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 2, title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 10, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 15, title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_100,y_50/v1500465308/pexels-photo-500034_uvxwcq.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 11, title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 22, title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 100, title: 'Black Pearl Earrings', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_center,h_250/v1500465307/pexels-photo-262226_kbjbl3.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 215, title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 12, title: 'Mirror Sunglasses', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250/v1500465307/pexels-photo-488541_s0si3h.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 29, title: 'White Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    {id: 16, title: 'Tie', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: products});
  }

  render() {
    const {isFullScreen} = this.state;


    var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },
  imageContainer: {
    height:50,
    width: 50,
    borderRadius: 64
  },
  image: {
    height:50,
    width: 50,
    borderRadius: 64
  },
  imageContainer2: {

  }
});


    var left = (
      <Left style={{flex:1}}>
      <Button onPress={() => this._sideMenuDrawer.open()} transparent>
      <Icon name='ios-menu-outline' />
      </Button>
      </Left>
      );
    var right = (
      <Right style={{flex:1}}>
      <Button onPress={() => Actions.search()} transparent>
   
      </Button>
      <Button onPress={() => Actions.cart()} transparent>
  
      </Button>
      </Right>
      );

//<ReactPlayer playing url={url} />
      
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
       
      <Container style={{backgroundColor: '#fdfdfd'}}>

      <Video url={'http://techslides.com/demos/sample-videos/small.mp4'}
      rotateToFullScreen
      lockPortraitOnFsExit
      onFullScreen={status => this.onFullScreen(status)}
      style={{flex: this.state.flexSize}}/>

      <Content>


            <View style={{marginTop: 15, padding: 15, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
            <View style = {{ flexDirection:'row', paddingBottom: 10,}}>
            <TouchableHighlight style={ styles.imageContainer }>
            <Image style={ styles.image } source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
       </TouchableHighlight> 
              <Text style={{marginBottom: 10, color: 'black', alignItems: 'center', paddingLeft: 15, paddingTop: 9, flex: 1, fontSize: 20 }}>Description</Text>
              </View>
              <View/>
              <Text style={{fontSize: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo facilisis semper. Sed in odio luctus, 
              pharetra mauris ac, fringilla augue. Suspendisse augue quam, 
              porta at diam non, pharetra dictum tortor. {"\n"} {"\n"}Phasellus fringilla erat vel lorem consequat maximus. Nulla et diam ante. Vestibulum lobortis dolor non nisl elementum rutrum eu egestas tortor. Maecenas quis diam in nisi tempor tempor. Ut tempus, erat auctor tincidunt aliquam, metus velit lacinia arcu, in pulvinar neque tortor nec odio. Nullam sed convallis tellus. Etiam facilisis egestas varius.

{"\n"}Phasellus ullamcorper mi elit. Nullam at libero elit. {"\n"}Mauris blandit posuere mi, sed finibus dolor dignissim id. Nunc mauris arcu, eleifend ac gravida vitae, luctus eu nulla. Proin at erat congue nulla efficitur imperdiet et a turpis. Donec felis diam, malesuada ac varius sit amet, elementum eu magna. Curabitur fringilla facilisis erat vel elementum. Vestibulum laoreet venenatis ex a viverra. Quisque quis purus at nibh auctor tempor sit amet nec tortor. Donec fringilla non felis eget mattis. Sed neque velit, tristique tempus lectus volutpat, tempor bibendum felis. Quisque malesuada sapien at purus tincidunt feugiat.
              </Text>
         <Grid style={{marginTop: 15}}>
              <Col size={3}>
                <Button block onPress={() => Actions.quiz()} style={{backgroundColor: Colors.navbarBackgroundColor}}>
                  <Text style={{color: "#fdfdfd", marginLeft: 5}}>Add to cart</Text>
                </Button>
              </Col>
              <Col>
              <Button block onPress={null} icon transparent style={{backgroundColor: '#fdfdfd'}}>
                <Icon style={{color: Colors.navbarBackgroundColor}} name='ios-heart' />
              </Button>
              </Col>
            </Grid>
            </View>
        </Content>
      </Container>
      </SideMenuDrawer>
      );

  }



  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
          <Product key={stateItems[i].id} product={stateItems[i]} />
          <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
          );
      }
      else {
        items.push(
          <Grid key={i}>
          <Product key={stateItems[i].id} product={stateItems[i]} />
          <Col key={i+1} />
          </Grid>
          );
      }
    }
    return items;
  }



}

