import React, { useEffect } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { useSelector } from 'react-redux'

const DisplayHeader = () => {
	const edition = useSelector(state => state.session.edition)
	return (
		<Segment inverted>
			<Menu inverted pointing secondary id="header" >
				<Menu.Item>
					{edition && `${edition} Edition`}
				</Menu.Item>
				<Menu.Item
					name="main-header"
					id="main-header"
					position="right"
				>
					<Icon name="sidebar" size="large"></Icon>
				</Menu.Item>
			</Menu>
		</Segment>

	);
};

export default DisplayHeader;
