import React from "react";
import CustomButton from "../FORM/CustomButton";
import { addItemToCart } from "../../redux/actions/cartActions";

import { connect } from "react-redux";

import "./collection_item.scss";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collectionStyles';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;
  
    return (
      <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);