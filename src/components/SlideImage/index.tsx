import React, {useState} from 'react';

import {SlideImageProps} from './slideImage.type';
import * as S from './styles';

export const SlideImage = ({images}: SlideImageProps) => {
  const [mainImage, setMainImage] = useState(0);

  const renderOptionsImages = () => {
    return (
      <S.OptionWrapper>
        {images.map((img, index) => (
          <S.OptionImage
            key={index}
            onPress={() => setMainImage(index)}
            isImageMain={index === mainImage}>
            <S.SmallImage source={{uri: `${img}`}} />
          </S.OptionImage>
        ))}
      </S.OptionWrapper>
    );
  };

  return (
    <S.SlideImage testID="slideImage">
      <S.MainImage source={{uri: `${images[mainImage]}`}} />
      {renderOptionsImages()}
    </S.SlideImage>
  );
};
