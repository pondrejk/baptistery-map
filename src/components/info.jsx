import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Panel extends React.Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }

  handleCloseModal() {
    store.closeInfo();
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <section className="modal-card-body">
            <p className="has-text-primary title is-4">
              Christian baptisteries - interactive map
            </p>
            <p>
              The purpose of this application is to visualise unique dataset of
              christian baptisteries that was prepared as a part of a bachelor
              thesis ...
            </p>
            <p>Displayed are only baptisteries that ...</p>
            <p>
              User has two possibilities to filter displayed baptisteries - ...
            </p>
            <p />
            <svg height="300" width="600">
              <text x="30" y="150" fontFamily="Verdana" fontSize="35">
                Legend will be here...
              </text>
            </svg>
            <p className="has-text-centered">
              <a
                onClick={this.handleCloseModal}
                className="has-text-centered button is-medium is-primary"
              >
                Continue...
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default Panel;