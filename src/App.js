import React from 'react';
import Message from './components/Message';

import Layout from './layout';
import Pages from './pages';

export default function App() {
	return (
		<Layout>
			<Message />
			<Pages />
		</Layout>
	);
}
