import React from 'react';
import styles from './MainStylesExamples.module.css';

class MainStylesExamples extends React.Component {
  state = {
    isRed: true
  }

  render() {
    const titleStyles = {
      color: this.state.isRed ? 'red' : 'blue',
      fontSize: 30,
    }

    return (
      <div>
        MainStylesExamples

        <h2 style={titleStyles}>
          Inline styles example
        </h2>

        <p>
          <a href='#' className="App-link">
            Link for click
          </a>
        </p>

        <p>
          <a href='#' className={styles['link-styles']}>
            Link for module test examples
          </a>
        </p>
        
        <button 
          className={styles.button}
          onClick={() => this.setState({ isRed: !this.state.isRed })}
        >
          Click
        </button>
      </div>
    )
  }
}

export default MainStylesExamples;