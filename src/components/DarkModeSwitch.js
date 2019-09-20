import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import actionTypes from '../store/actionTypes'
import { darkModeSelector } from '../store/selectors'

const DarkModeButton = styled.button`
	&& {
		position: relative;
		margin-right: 16px;
		margin-right: var(--sp16);
		width: 30px;
		margin: 16px;
		margin: var(--sp16);

		@media screen and (min-width: 1680px) {
			margin-right: 24px;
			margin-right: var(--sp24);
		}
	}
`

const Track = styled.div`
	position: absolute;
	border-radius: 16px;
	border-radius: var(--sp16);
	background: #e3e8ee;
	background: var(--gray100);
	height: 12px;
	height: var(--sp12);
	left: 0;
	right: 0;
	margin-top: 3px;

	${props => props.darkMode && css`
		background: #212d63;
		background: var(--blue100);
	`}
`

const Icon = styled.div`
	transition: transform .2s;
	transform: scaleX(1) scaleY(1) rotate(0deg);
	position: absolute;
`

const LightModeIcon = styled(Icon)`
	color: #efc078;
	color: var(--yellow200);
`

const DarkModeIcon = styled(Icon)`
	color: #7dabf8;
	color: var(--blue300);
`

const Knob = styled.div`
	position: relative;
	background: #fff;
	background: var(--white);
	border-radius: 100%;
	box-shadow: 0 0 0 1px rgba(0,0,0,.07),0 1px 3px 0 rgba(59,65,94,.1);
	box-shadow: var(--shadow--keyline),0 1px 3px 0 var(--shadow-ambientColor);
	width: 18px;
	width: calc(var(--sp16) + var(--sp2));
	height: 18px;
	height: calc(var(--sp16) + var(--sp2));
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform .2s,background .2s;

	svg {
		fill: currentColor;
	}

	${props => props.darkMode && css`
		box-shadow: 0 0 0 1px #2f3d89;
		box-shadow: 0 0 0 1px var(--blue200);
		transform: translateX(12px);
		transform: translateX(var(--sp12));
	`}

	${props => props.toggling && css`
		${props.darkMode ? css`
			${LightModeIcon} {
				transform: scaleX(0) scaleY(0) rotate(90deg);
			}
		` : css`
			${DarkModeIcon} {
				transform: scaleX(0) scaleY(0) rotate(-90deg);
			}
		`}
	`}

	${props => props.darkMode ? css`
		${LightModeIcon} {
			transform: scaleX(0) scaleY(0) rotate(90deg);
		}
	` : css`
		${DarkModeIcon} {
			transform: scaleX(0) scaleY(0) rotate(-90deg);
		}
	`}
`

const { DARKMODE_TOGGLE } = actionTypes

const DarkModeSwitch = () => {
	const [toggling, setToggling] = useState(false)
	const dispatch = useDispatch()
	const darkMode = useSelector(darkModeSelector)

	return (
		<>
			<DarkModeButton type="button" onClick={() => {
					setToggling(true)
					dispatch({ type: DARKMODE_TOGGLE })
					setTimeout(() => {
						setToggling(false)
					}, 300)
				}}>
				<Track darkMode={darkMode} />
				<Knob darkMode={darkMode} toggling={toggling}>
					<LightModeIcon>
						<svg style={{ width: 12, height: 12 }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.828 5.243L2.343 3.757a1 1 0 0 1 1.414-1.414l1.486 1.485a5.027 5.027 0 0 0-1.415 1.415zM7 3.1V1a1 1 0 1 1 2 0v2.1a5.023 5.023 0 0 0-2 0zm3.757.728l1.486-1.485a1 1 0 1 1 1.414 1.414l-1.485 1.486a5.027 5.027 0 0 0-1.415-1.415zM12.9 7H15a1 1 0 0 1 0 2h-2.1a5.023 5.023 0 0 0 0-2zm-.728 3.757l1.485 1.486a1 1 0 1 1-1.414 1.414l-1.486-1.485a5.027 5.027 0 0 0 1.415-1.415zM9 12.9V15a1 1 0 0 1-2 0v-2.1a5.023 5.023 0 0 0 2 0zm-3.757-.728l-1.486 1.485a1 1 0 0 1-1.414-1.414l1.485-1.486a5.027 5.027 0 0 0 1.415 1.415zM3.1 9H1a1 1 0 1 1 0-2h2.1a5.023 5.023 0 0 0 0 2zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fillRule="evenodd"></path>
						</svg>
					</LightModeIcon>
					<DarkModeIcon>
						<svg style={{ width: 12, height: 12 }} viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.914 0a6.874 6.874 0 0 0-1.26 3.972c0 3.875 3.213 7.017 7.178 7.017.943 0 1.843-.178 2.668-.5C15.423 13.688 12.34 16 8.704 16 4.174 16 .5 12.41.5 7.982.5 3.814 3.754.389 7.914 0z" fillRule="evenodd" fill="currentColor"></path>
						</svg>
					</DarkModeIcon>
				</Knob>
			</DarkModeButton>
		</>
	)
}

export default DarkModeSwitch