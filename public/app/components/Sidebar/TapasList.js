import React from 'react';
import TapasListItem from '../TapasListItem/TapasListItem';

export default class TapasList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topped: true
    };

    this.boundOnScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.scrollEl.addEventListener('scroll', this.boundOnScroll);
  }

  componentWillUnmount() {
    this.scrollEl.removeEventListener('scroll', this.boundOnScroll);
  }

  onScroll(evt) {
    this.setState({
      topped: evt.target.scrollTop === 0,
    });
  }

  list() {
    return this.props.tapas.map((tapa, idx) => {
      return <TapasListItem key={idx} tapa={tapa} />
    });
  }

  render() {
    const containerClass = this.state.topped
      ? 'scroll-container'
      : 'scroll-container-untopped';

    return (
      <div className={this.props.styles['list']}>
        <div className={this.props.styles[containerClass]} ref={el => this.scrollEl = el}>
          {this.list()}
        </div>
      </div>
    );
  }
}
