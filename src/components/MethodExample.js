import React from 'react'
import styled, { css } from 'styled-components'

const Body = styled.section`	
	overflow: hidden;
	border-radius: 8px;
	border-radius: var(--border-radius-8);
	color: #3c4257;
	color: var(--gray700);
`

const TopBarTitle = styled.div`
	color: #697386;
	color: var(--example-response-topbar-color);
	

    color: #a3acb9;
	color: var(--example-request-topbar-color);
	
    font-size: 12px;
    font-size: var(--font12);
    font-weight: 500;
    text-transform: uppercase;
    -webkit-user-select: none;
    user-select: none;
	pointer-events: none;
`

const TopBar = styled.div`
	background: #e3e8ee;
	background: var(--example-response-topbar-bg);
	padding: 10px 12px;
	padding: 10px var(--sp12);
	font-weight: 500;
	font-size: 12px;
	font-size: var(--font12);
	color: #4f566b;
	color: var(--gray600);
	letter-spacing: .01em;

	display: flex;
	align-items: center;
	
	${props => props.hasPrompt && css`
		padding: var(--sp4);

		${TopBarTitle} {
			color: var(--example-request-topbar-color);
			padding: var(--sp8);
			padding-left: var(--sp12);
		}
	`}
`

const StyledMethodExample = styled.div`
	border-radius: 8px;
	border-radius: var(--border-radius-8);
	box-shadow: 0 0 0 1px rgba(0,0,0,.07);
	box-shadow: var(--shadow--keyline);

	margin-bottom: 12px;
	margin-bottom: var(--sp12);
	background: #f7fafc;
	background: var(--example-response-bg);

	${props => props.dark && css`
		background: var(--example-request-bg);

		${TopBar} {
			background: var(--example-request-topbar-bg);

			border-top-right-radius: var(--border-radius-8);
			border-top-left-radius: var(--border-radius-8);
		}
	`}
`

const MethodExample = ({ title, prompt, className, dark, children }) => (
	<StyledMethodExample dark={dark} className={className}>
		<TopBar hasPrompt={!!prompt}>
			<TopBarTitle>{title}</TopBarTitle>
			{prompt}
		</TopBar>
		<Body>
			{children}
		</Body>
	</StyledMethodExample>
)

export default MethodExample