import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import script from './script';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <ul className={styles.squares} />
      <script src="script.js" />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
