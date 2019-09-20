import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

const MethodAreaDivider = styled.div`
	height: 1px;
	margin-top: -1px;
	margin-left: auto;
	margin-right: auto;
	border-bottom: 1px solid #e3e8ee;
	border-bottom: 1px solid var(--gray100);
	width: calc(100% - 10vw);
	width: calc(100% - 5vw - 5vw);
	width: calc(100% - var(--method-area-padding) - var(--method-area-padding));
	max-width: calc(1200px + 5vw);
	max-width: calc(600px + 600px + 5vw);
	max-width: calc(var(--copy-max-width) + var(--example-max-width) + var(--method-area-padding));
`

export const Method = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	background: var(--white);

	${props => props.firstOfGroup && css`
		${MethodAreaDivider} {
			margin-left: 0;
			margin-right: 0;
			min-width: 100%;
		}
	`}

	:first-child > ${MethodAreaDivider} {
		display: none;
	}
`


const MethodArea = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: calc(1264px + 10vw);
	max-width: calc(600px + 600px + 5vw + 5vw + 32px + 32px);
	max-width: var(--content-max-width);
	padding: 5vw;
	padding: var(--method-area-padding);
`

const SectionWrapper = ({
	id, 
	children,
}) => {
	const [ref, inView] = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			window.history.replaceState('', '', '#'+id)
		}
	}, [inView, id])

	return (
		<Method id={id} ref={ref}>
			<MethodAreaDivider />
			<MethodArea>
				{children}
			</MethodArea>
		</Method>
	)
}

export default SectionWrapper