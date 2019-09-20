import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	margin-bottom: 24px;
	margin-bottom: var(--sp24);
`

const Title = styled.div`
	color: #1ea672;
	color: var(--green400);
	font-weight: 600;
	text-transform: uppercase;
	font-size: 12px;
`

const Text = styled.p`
	font-size: 14px;
	font-size: var(--font14);
	line-height: 22px;
	line-height: var(--font14-lineHeight);
	margin-top: 12px;
	margin-top: var(--sp12);
	color: #697386;
	color: var(--gray500);
`

const Tip = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Text>
			{children}	
		</Text>
	</Container>
)

export default Tip