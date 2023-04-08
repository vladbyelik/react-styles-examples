import React from 'react';

import styles from './NewStylesExamples.module.scss';

class NewStylesExamples extends React.Component {
  render() {
    return (
      <div className={styles['new-styles-container']}>
        <h3 className={styles['new-styles-container__title']}>
          NewStylesExamples
        </h3>
      </div>
    )
  }
}

export default NewStylesExamples;