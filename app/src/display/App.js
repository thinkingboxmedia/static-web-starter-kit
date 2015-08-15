import React from 'react';

/**
 * Application component
 */
export default class App extends React.Component {

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div>
        App
      </div>
    );
  }
}

React.render(<App />, document.getElementById("app"))
