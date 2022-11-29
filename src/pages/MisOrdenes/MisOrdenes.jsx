import React from 'react';
import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';
import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';

const MisOrdenes = () => {
  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src='http://restauranteelmirador.net/wp-content/uploads/2018/03/div-02.png'
        alt=''
      />
    </>
  );
};

export default MisOrdenes;
