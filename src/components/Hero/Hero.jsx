import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../UI/Button/Button';
import * as categoriesActions from '../../Redux/categories/categories-actions'
import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';
import {useSelector, useDispatch} from 'react-redux'

const Hero = ({elementRef}) => {

const [value, setValue]= useState('')

const dispatch = useDispatch();

const listOfCategories = useSelector(state => state.categories.categories).map(category => category.category)

const handlerSubmit = (e, value) => {
  e.preventDefault();

  const newCategory = value.trim().toLowerCase().split(' ').join('');

  const selectedCategory = listOfCategories.find( category => category.toLowerCase() === newCategory);

  if(selectedCategory){
    dispatch(categoriesActions.selectCategory(selectedCategory));
    window.scrollTo(
      elementRef.getBoundingClientRect().x,
      elementRef.getBoundingClientRect().y,
    )
  } else {
    return alert('Categoría no encontrada')
  }

}

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title' style={{ fontFamily:'cursive' ,color:' #ff5b5be8'} }>¿Qué categoria estas buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
          value={value}
          onChange={e => setValue(e.target.value)}
          type='text' placeholder='Ej.Suspiro de monja'/>
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button onClick={e => handlerSubmit(e, value)} radius='10'>Buscar</Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://www.pngall.com/wp-content/uploads/7/Bakery-Transparent.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
