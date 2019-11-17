import * as React from 'react';

import { Container } from 'semantic-ui-react';

import './styles.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const Page: React.FC<IProps> = ({ children }) => {
  return <Container className="page">{children}</Container>;
};

export { Page };
