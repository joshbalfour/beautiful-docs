import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import StyleWrapper from './components/StyleWrapper'
import Sidebar from './components/Sidebar'

import { LangsProvider } from './components/LangsContext'

import { store, persistor } from './store'

const Content = styled.div`
	position: absolute;
	top: 0;
	left: 220px;
	left: var(--sidebar-width);
	bottom: 0;
	right: 0;
	box-sizing: border-box;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	outline: none!important;
	overflow-x: hidden;

	@media screen and (min-width: 1680px) {
		& {
			left:280px;
			left: var(--sidebar-width);
		}
	}
`

const Wrapper = ({ children, nav, logoComponent, user, langs, onRequestChangeUser }) => (
	<LangsProvider value={langs}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				
					<StyleWrapper>
						<Router>
							<Sidebar nav={nav} logo={logoComponent} user={user} onRequestChangeUser={onRequestChangeUser} />
							<Content>
								{children}
							</Content>
						</Router>
					</StyleWrapper>
			</PersistGate>
		</Provider>
	</LangsProvider>
)

export default Wrapper
