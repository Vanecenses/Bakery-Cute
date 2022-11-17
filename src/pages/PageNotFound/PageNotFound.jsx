import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
        <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>¡Opss demaciada azucar!</FoundSubtitleStyled>
          <p>Parece que la página que buscás no existe o fue removida</p>
          <Link />
        </FoundTextStyled>
        <img
          src='https://cdn-icons-png.flaticon.com/512/4337/4337066.png'
          alt=''
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
