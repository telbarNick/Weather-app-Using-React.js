import React from 'react';
import Layout from './hoc/Layout';
import Weather from './components/Weather';

class App extends React.Component {
  render () {
    return (
      <div className="App">
          <Layout>
              <Weather />
          </Layout>
      </div>
    );
  }
}

export default App;
