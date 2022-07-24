import * as S from './style'

interface cardProps {
  profile: {
    title: string;
    imageUrl: string;
    gameId?: string;
    favoriteGameId?: string;
    userId: string;
  }
} 


const Card = ({ profile }: cardProps) => {
  return (
    <S.ProfilesItem>
      <S.ProfilesItemImage src={profile.imageUrl}  alt="Imagem do profile"/>


      <div>
        <h2>{profile.title}</h2>
        
        
      </div>
      </S.ProfilesItem>
  )
}

export default Card;