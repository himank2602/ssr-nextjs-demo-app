import React from 'react';

import Layout from '../components/MyLayout'
const DefaultOnSSR = () => (<span></span>);

class NoSSR extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      canRender: false
    };
  }

  componentDidMount() {
    this.setState({ canRender: true });
  }

  render() {
    const { children, onSSR = <DefaultOnSSR /> } = this.props;
    const { canRender } = this.state;

    // return canRender ? children : onSSR;
    return (
      <Layout>

        <h2>
          This section is only client-side rendered.
        </h2>

      </Layout>

    )
  }
}

export default NoSSR;