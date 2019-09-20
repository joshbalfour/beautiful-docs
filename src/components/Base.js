import React from 'react'
import styled from 'styled-components'

import { Method } from './SectionWrapper'

export const LeftColumn = styled.div`
	&& {
		width: 35vw;
		width: var(--copy-width);
		max-width: 600px;
		max-width: var(--copy-max-width);
		margin-right: 5vw;
		margin-right: var(--method-area-padding);
		flex-shrink: 0;
		
		p a,p a:visited {
			color: #556cd6;
			color: var(--blue500);
			font-weight: 500
		}

		p a:active,p a:focus,p a:hover {
			color: #2a2f45;
			color: var(--gray800)
		}

		p li {
			list-style: disc outside none;
			list-style: initial;
			margin-left: 24px;
			margin-left: var(--sp24)
		}

		h1 {
			font-size: 24px;
			line-height: 40px;
			line-height: var(--section-header-line-height);
			letter-spacing: .63px;
			font-weight: 300;
			color: #2a2f45;
			color: var(--gray800);
			margin: 0;
			display: flex;
			align-items: baseline;
			flex-wrap: wrap
		}

		h2 {
			font-size: 18px
		}

		h2,h3 {
			font-weight: 300;
			color: #212d63;
			color: var(--blue800);
			padding-top: 24px;
			padding-top: var(--sp24)
		}

		h3 {
			font-size: 16px
		}
	}
`

export const MethodCopyTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;

	cursor: pointer;
`

export const Description = styled.div`
	${Method}:first-child & p:first-child {
		font-size: 16px;
		line-height: 25px;
		color: #697386;
		color: var(--gray500);
		margin-bottom: 24px;
		margin-bottom: var(--sp24);
	}
`

export const Title = ({ children }) => (
	<MethodCopyTitle>
		<h1>{children}</h1>
	</MethodCopyTitle>
)

export const RightColumn = styled.div`
	min-width: 300px;
	min-width: var(--example-min-width);
	padding-top: 60px;
	padding-top: calc(var(--section-header-line-height) + var(--sp20));
	flex-grow: 1;
	position: -webkit-sticky;
	position: sticky;
	align-self: flex-start;
	top: 0;

	max-width: 600px;
	max-width: var(--example-max-width);
`

export const Subsection = styled.div`
	margin-bottom: 32px;
	margin-bottom: var(--sp32);
	border-radius: 8px;
	border-radius: var(--border-radius-8);
	margin-left: 0;
`

