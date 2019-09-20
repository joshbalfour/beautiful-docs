import React, { useState } from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

const Copied = styled.div`
	position: absolute;
	right: 5px;
	top: -27.5px;
	color: var(--blue500);
	text-transform: normal;
`

export const StyledClickToCopy = styled.button`
	&& {
		padding: 8px;
		padding: var(--sp8);
		color: #a4cdfe;
		color: var(--sail-blue200);
		border-radius: 8px;
		border-radius: var(--border-radius-8);
	
		cursor: pointer;
		pointer-events: auto;
		text-transform: uppercase;
		font-size: 12px;
		font-size: var(--font12);
		letter-spacing: .33px;
		font-weight: 600;
		position: relative;

		color: #a4cdfe;
		color: var(--base-blue200);
		border-radius: 8px;
		border-radius: var(--border-radius-8);
	}
`

const ClickToCopy = ({ text, className }) => {
	const [copied, setCopied] = useState(false)
	
	return (
		<StyledClickToCopy
			className={className}
			onClick={() => {
				copy(text)
				setCopied(true)
				setTimeout(() => {
					setCopied(false)
				}, 1500)
			}}
		>
			<svg style={{ width: 16, height: 16 }} width="20" height="20" viewBox="3 2 14 14" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.275 4.5h.325c.22 0 .4.18.4.4v10.2a.4.4 0 0 1-.4.4H5.4a.4.4 0 0 1-.4-.4V4.9c0-.22.18-.4.4-.4h1.485c.22 0 .4.18.4.4v1.647c0 .22.179.4.4.4h4.74a.4.4 0 0 0 .4-.4V4.9a.4.4 0 0 1 .4-.4h1.05zM11.6 3.953c.22 0 .4.18.4.4V5.6a.4.4 0 0 1-.4.4H8.4a.4.4 0 0 1-.4-.4V4.353c0-.22.18-.4.4-.4h.253a.4.4 0 0 0 .4-.4V3.4c0-.22.18-.4.4-.4h1.027c.22 0 .4.18.4.4v.153c0 .221.18.4.4.4h.32zM6.5 13c0 .268.223.5.499.5h2.702a.498.498 0 0 0 .499-.5c0-.268-.223-.5-.499-.5H6.999a.498.498 0 0 0-.499.5zm0-1.75c0 .268.222.5.496.5h5.608a.496.496 0 0 0 .496-.5c0-.268-.222-.5-.496-.5H6.996a.496.496 0 0 0-.496.5zm0-1.75c0 .268.226.5.506.5h4.688c.29 0 .506-.224.506-.5 0-.268-.226-.5-.506-.5H7.006a.497.497 0 0 0-.506.5z" fillRule="evenodd" fill="currentColor" />
			</svg>

			{copied && (
				<Copied>
					copied
				</Copied>
			)}
		</StyledClickToCopy>
	)
}

export default ClickToCopy