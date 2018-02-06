var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.array.isRequired
  },
 
  render: function() {
    return (
      <ul className={'contactList'}>{contacts}</ul>
    );
  }
});