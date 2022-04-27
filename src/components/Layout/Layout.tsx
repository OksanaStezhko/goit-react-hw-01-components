import React from 'react';
import Container from '../Container/Container';

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => <Container>{children}</Container>;

export default Layout;
