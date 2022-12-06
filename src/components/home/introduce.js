import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="introduce" className="block introduceBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Introduce</h2>
            <p>Geographic information system</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Woocommerce Tutorial"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/watch?v=vJAQHA5XQWI&list=PL3MO67NH2XxLAFn3jc7gOhXLD9YFx-oew&ab_channel=IntroductiontoGeographicInformationSystems"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;