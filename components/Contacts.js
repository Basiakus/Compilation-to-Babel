var Contacts = React.createClass({

	render: function() {
		var contacts = this.props.items.map(function(contact) {
			return (<Contact item={contact} key={contact.id}></Contact>)
		});

		return (
			<ul className={'contactList'}>{contacts}</ul>
		);
	}
});