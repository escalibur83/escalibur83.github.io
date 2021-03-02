import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Landing, Inner } from './pages'

export const App = () => (
	<Router>
		<Switch>
			<Route path="/inner">
				<Inner />
			</Route>
			<Route path="/">
				<Landing />
			</Route>
		</Switch>
	</Router>
)
