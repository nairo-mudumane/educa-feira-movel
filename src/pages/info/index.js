import React from 'react';
import BgWhite from '../../layout/wrappers/BgWhite';
import Body from '../../layout/wrappers/Body';
import Main from '../../layout/wrappers/Main';
import Title from '../../layout/wrappers/Title';
import InfoBody from './InfoBody';
import InfoTitle from './InfoTitle';

export default function Info() {
  return (
    <Main>
      <Body>
        <Title title="Sabia que ..." />
        <BgWhite>
          <InfoTitle title="Lorem ipsu" />
          <InfoBody
            body="Aliqua aute reprehenderit exercitation in excepteur. Ex labore ex sit mollit proident eiusmod amet. Pariatur exercitation proident fugiat exercitation id nostrud. Nisi mollit amet Lorem est ad deserunt labore mollit occaecat ut nisi nisi.

Cillum id elit pariatur esse elit eiusmod ex. Reprehenderit nisi veniam esse enim pariatur laboris eu. Eiusmod proident incididunt veniam amet duis exercitation proident ullamco qui exercitation ullamco excepteur. Nulla labore non anim velit irure. Do aliquip eu minim culpa tempor magna duis aute tempor amet veniam amet cupidatat pariatur.

Dolor elit enim pariatur proident ea. Tempor proident velit sit aute sit incididunt. Ullamco anim nulla qui aute exercitation. Non irure pariatur esse laboris do sunt nulla officia cillum commodo irure reprehenderit culpa. Adipisicing cillum Lorem duis Lorem proident elit ad ea reprehenderit minim ex. Sint ea sint velit Lorem labore ad do tempor. In id id occaecat voluptate nostrud.

Culpa id commodo eu occaecat. Cupidatat dolor magna exercitation sint commodo consectetur in. Incididunt sunt culpa fugiat labore ex amet eu deserunt. Aute adipisicing dolor nulla et quis reprehenderit."
          />
        </BgWhite>
      </Body>
    </Main>
  );
}
