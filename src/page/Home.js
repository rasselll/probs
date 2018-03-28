/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
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
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="Lectures" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} lec={categories[i].lec} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'Introduction',
    image: 'http://nothorrendous.com/wp-content/uploads/2013/05/writing.jpg',
    lec: 'lecTwo'

  },
  {
    id: 2,
    title: 'Vocabulary',
    image: 'https://tr2.cbsistatic.com/hub/i/r/2017/08/09/6aaa9abe-2f1a-4220-a58c-33aadbaf18fa/resize/770x/8ca788212840dcdff2dea859939b67cd/istock-505595136.jpg',
    lec: 'category'
  },
  {
    id: 3,
    title: 'Nouns',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg',
    lec: 'lecTwo'
  },
  {
    id: 4,
    title: 'Tenses',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg',
    lec: 'lecTwo'
  },
    {
    id: 5,
    title: 'Rubbish',
    image: 'https://thumbs.dreamstime.com/b/boring-maths-bored-schoolboy-lying-floor-looking-colorful-abacus-waist-up-studio-shot-isolated-white-39817292.jpg',
     lec: 'lecTwo'
  }
];
