export interface KeyFeaturesTypes {
    image: string;
    title: string;
    description: string;
}

interface CoverImageProps {
    thumbImage: string;
    cardImage: string;
    wishImage: string;
    inGameImage: string;
}
export interface CharacterProps {
    linkDetail: string;
    nameCharacter: string;
    colorCharacter: string;
    elementElectro: string;
    price: number;
    coverImage: CoverImageProps;
    description: string;
}