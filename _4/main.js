function start() {
  class Bookmark extends React.Component {
    constructor(props) {
      super(props);
      console.log("Bookmark component created");
    }
    static defaultProps = {
      description: "Unknown"
    };
    static propTypes = {
      descrption: PropTypes.number
    };
    title = this.props.title;
    titleStyle = {
      color: "Red"
    };
    render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
        style: this.titleStyle
      }, this.title), /*#__PURE__*/React.createElement("a", {
        href: this.props.href
      }, this.props.description), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          this.title = this.title + "-CHANGED";
          this.setState({});
        }
      }, "Click me"));
    }
  }
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Bookmarks"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Bookmark, {
    title: "Etherient",
    href: "https://www.etherient.com",
    description: "The home page of Etherient"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "Frank's Site",
    href: "https://www.zammetti.com",
    description: "The web home of Frank W Zammetti"
  }))), document.getElementById("mainContainer"));
}
