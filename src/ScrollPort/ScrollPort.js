import React from "react";
import classNames from "classnames";
import { debounce } from "lodash";
import { getItemsToShow } from "./util";

export default class extends React.PureComponent {
  static defaultProps = {
    itemsPerPage: 10
  };

  state = {
    itemFrom: 0,
    itemTo: 0
  };

  totalChildren = 0;
  itemHeight = 0;
  ref = React.createRef();

  init() {
    this.ref.current.classList.add('init');
    this.itemHeight = this.ref.current.clientHeight;
    this.totalChildren = React.Children.count(this.props.children);
    this.ref.current.classList.remove('init');
    this.setItemsToShow();
  }

  setItemsToShow = () => {
    const { itemFrom, itemTo } = getItemsToShow(this.ref.current.clientHeight,
      this.itemHeight, this.props.itemsPerPage, this.totalChildren,
      this.ref.current.scrollTop);
    if (itemFrom !== this.state.itemFrom || itemTo !== this.state.itemTo) {
      this.setState({ itemFrom, itemTo });
    }
  }

  __handleScroll = debounce(this.setItemsToShow, 50);

  componentDidUpdate() {
    this.setItemsToShow();
  }

  componentDidMount() {
    this.init();
    this.ref.current.addEventListener('scroll', this.__handleScroll);
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener('scroll', this.__handleScroll);
  }

  renderSpacer = (itemsTotal) =>
    <div className='spacer' style={{height: itemsTotal * this.itemHeight}} />;

  renderChildren = () =>
    React.Children.toArray(this.props.children).slice(
      this.state.itemFrom,
      this.state.itemTo + 1
    );

  render() {
    return (
      <div
        className={classNames("scroll-port", this.props.className)}
        ref={this.ref}
      >
        {this.renderSpacer(this.state.itemFrom - 0) }
        {this.renderChildren()}
        {this.renderSpacer(this.totalChildren - this.state.itemTo - 1)}
      </div>
    );
  }
}
