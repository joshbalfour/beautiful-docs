import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import DarkModeSwitch from './DarkModeSwitch'
import AccountSwitcher from './AccountSwitcher'

const LogoText = styled.span`
	color: var(--gray800);
`

const Logo = ({children}) => <LogoText>{children}</LogoText>

let vhash = window.location.hash

const Container = styled.div`
	width: 220px;
	width: var(--sidebar-width);
	height: 100%;
	position: relative;
	background: #fff;
	background: var(--white);
	box-shadow: inset -1px 0 0 0 #e3e8ee;
	box-shadow: -1px 0 0 0 var(--gray100) inset;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 3;
`

const Header = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 80px;
	height: var(--header-height);
	width: 220px;
	width: var(--sidebar-width);
	z-index: 5;

	display: flex;
	flex-direction: column;
	justify-content: center;
`

const HeaderRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const LogoContainer = styled.div`
	padding: 16px;
	padding: var(--sp16);
	height: 100%;

	@media screen and (min-width: 1680px) {
   		padding-left: 24px;
		padding-left: var(--sp24);
	}
`

const Nav = styled.nav.attrs({ role: 'navigation' })`
	top: 0px;
	top: var(--header-height);
	bottom: 52px;
	bottom: var(--footer-height);
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	overflow-x: auto;
	position: absolute;
	width: 96%;
	padding-top: 12px;
	padding-top: var(--sp12);
`

const NavHeading = styled.h5`
	text-transform: uppercase;
	color: #a3acb9;
	color: var(--gray300);
	margin: 0;
	padding-left: 16px;
	padding: var(--sp16) 0 var(--sp12) var(--sp16);
	padding-top: 16px;
	padding-bottom: 12px;
	font-size: 12px;
	cursor: pointer;
	font-weight: 600;
	letter-spacing: .01em;

	@media screen and (min-width: 1680px) {
		padding-left: 24px;
		padding-left: var(--sp24);
		padding-right: 24px;
    	padding-right: var(--sp24);
	}
`

const NavItems = styled.ul`
	padding: 0;
	padding-bottom: 12px;
	padding-bottom: var(--sp12);
`

const StyledNavLink = styled(NavLink)`
	&& {
		display: block;
		margin: 0;
		margin-top: 2px;
		margin-top: var(--sp2);
		padding: 4px 16px;
		padding: var(--sp4) var(--sp16);
		font-weight: 500;
		font-size: 14px;
		font-size: var(--font14);
		line-height: 20px;
		cursor: pointer;

		text-decoration: none;


		color: #697386 !important;
		color: var(--gray500) !important;


		:hover {
			color: #131f41 !important;
			color: var(--blue900) !important;
		}

		${props => props.selected && css`
			color: #556cd6 !important;
			color: var(--blue500) !important;
			font-weight: 500;
			background: #f5fbff;
			background: var(--blue50);
			border-top-right-radius: 8px;
			border-top-right-radius: var(--border-radius-8);
			border-bottom-right-radius: 8px;
			border-bottom-right-radius: var(--border-radius-8);
			margin-right: 12px;
			margin-right: var(--sp12);

			:hover {
				color: #556cd6;
				color: var(--blue500);
			}
		`}

		@media screen and (min-width: 1680px) {
			padding-left: 24px;
			padding-left: var(--sp24);
			padding-right: 24px;
			padding-right: var(--sp24);
		}
	}
`

const Footer = styled.div`
	position: absolute;
    bottom: 0;
    left: 0;
    width: 220px;
    width: var(--sidebar-width);
    height: 52px;
    height: var(--footer-height);
    border-top: 1px solid #e3e8ee;
	border-top: 1px solid var(--gray100);

	width: 280px;
	width: var(--sidebar-width);
`

const Sidebar = ({ nav, logo, user = {}, onRequestChangeUser }) => {
	const [hash, setHash] = useState(vhash)

	useEffect(() => {
		// window.onhashchange and adding event listener for hashchange didn't work :(
		setInterval(() => {
			if (vhash !== window.location.hash) {
				vhash = window.location.hash
				setHash(vhash)
			}
		}, 500)
	}, [])

	return (
		<Container>
			<Header>
				<HeaderRow>
					<LogoContainer>
						<a href="/" style={{ marginTop: 2 }}>
							<Logo>{logo}</Logo>
						</a>
					</LogoContainer>
					<DarkModeSwitch />
				</HeaderRow>
			</Header>

			<Nav>
				{nav.map(section => (
					<div key={section.title || 'root'}>
						{section.title && <NavHeading>{section.title}</NavHeading>}
						<NavItems>
							{section.items.map(item => (
								<li key={item.key}>
									<StyledNavLink
										selected={hash === item.key}
										to={'/'+item.key}
										smooth
										isActive={() => {
											return window.location.hash === item.key
										}}
									>
										{item.name}
									</StyledNavLink>
								</li>
							))}
						</NavItems>
					</div>
				))}
			</Nav>
			<Footer>
				<AccountSwitcher {...user} onClick={onRequestChangeUser} />
			</Footer>
		</Container>
	)
}

export default Sidebar