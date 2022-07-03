/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Icon from '../Icon';
import Shadow from '../Shadow';
import Text from '../Text';

import {Container, Content} from './styles';
import {EmptyProps} from './types';

const Empty = ({title}: EmptyProps) => {
  return (
    <Container>
      <Shadow>
        <Content>
          <Icon icon="emptyBox" size={100} />
          {!!title && <Text typography="body2">{title}</Text>}
        </Content>
      </Shadow>
    </Container>
  );
};

export default Empty;
