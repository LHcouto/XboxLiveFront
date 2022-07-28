import { ButtonHTMLAttributes } from 'react';
import * as S from './style'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const SaveButton = ({...ButtonType}:ButtonType) => {

  return (
    <S.Button {...ButtonType}>
      <strong>SALVAR</strong>
    </S.Button>
    
  )
}

export default SaveButton;