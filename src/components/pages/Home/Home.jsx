import React from 'react';
import ParentComponent from '../../ParentComponent';

import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <ParentComponent />
  </div>
);

export default Home;
