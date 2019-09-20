import React, { useState } from 'react'
import styled from 'styled-components'

const StyledFeedbackWidget = styled.p`
	margin-top: 32px;
	margin-top: var(--sp32);
	color: #697386;
	color: var(--gray500);
	font-weight: 500;
`

const Input = styled.input`
	box-shadow: 0 0 0 1px rgba(50,50,93,.16),0 0 0 1px rgba(50,151,211,0),0 0 0 2px rgba(50,151,211,0),0 1px 1px rgba(0,0,0,.08);
	font-size: 14px;
	border-radius: 8px;
	border-radius: var(--border-radius-8);
	line-height: 26px;
	height: 26px;
	width: 250px;
	padding: 4px;
	padding: var(--sp4);
	border: 0;
	box-sizing: border-box;
	margin-right: 4px;
	margin-right: var(--sp4);
	color: #2a2f45;
	color: var(--gray800);

	padding: 4px 8px;
    padding: var(--sp4) var(--sp8);

	:focus {
		box-shadow: 0 0 0 1px rgba(50,50,93,0),0 0 0 1px rgba(50,151,211,.2),0 0 0 2px rgba(50,151,211,.25),0 1px 1px rgba(0,0,0,.08);
		outline: 0;
	}
`

const Text = styled.span`
	line-height: 20px;
`

const Button = styled.span`
	height: 20px;
	height: var(--sp20);
	width: 16px;
	width: var(--sp16);
	margin-left: 8px;
	margin-left: var(--sp8);
	color: #556cd6;
	color: var(--blue500);
	cursor: pointer;

	:active, :focus, :hover {
		color: #6c8eef;
		color: var(--blue400)
	}
`

const FeedbackWidget = () => {
	const [hitYes, setHitYet] = useState(false)
	const [hitNo, setHitNo] = useState(false)
	const [hitSend, setHitSend] = useState(false)
	const showDefault = !hitYes && !hitNo && !hitSend

	let children

	if (showDefault) {
		children = (
			<>
				<Text className="csat-widget-text">Was this section helpful?</Text>
				<Button onClick={() => setHitYet(true)}>Yes</Button>
				<Button onClick={() => setHitNo(true)}>No</Button>
			</>
		)
	}

	if (hitYes || hitSend) {
		children = `Thank you for helping improve our documentation. If you need help or have any questions, please consider contacting support.`
	}

	if (hitNo) {
		children = (
			<>
				<Input placeholder="How could this section be better?" />
				<Button onClick={() => {
					setHitSend(true)
				}}>Send</Button>
			</>
		)
	}

	return (
		<StyledFeedbackWidget>
			{children}
		</StyledFeedbackWidget>
	)
}

export default FeedbackWidget