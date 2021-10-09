import React from 'react';
import Messages from './components/Messages';

import Layout from './layout';
import Pages from './pages';

export default function App() {
	return (
		<Layout>
			<Messages />
			<Pages />
		</Layout>
	);
}
