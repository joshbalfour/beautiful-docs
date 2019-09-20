import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { LangsConsumer } from './LangsContext'

import { langSelector } from '../store/selectors'
import actionTypes from '../store/actionTypes'
const { LANG_SET } = actionTypes

const Select = styled.div`
	position: relative;

	select {
		position: static;
		z-index: 1;
		display: block;
		margin: 0;
		width: 100%;
		padding: 4px 28px 4px 8px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: transparent;
		border: 0;
		border-radius: 4px;
		color: #4f566b;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		outline: 0;
		white-space: nowrap;
	}
`

const SelectArrows = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 2;
    color: inherit;
	pointer-events: none;
	
	svg {
	    fill: currentColor;
	}
`

const StyledLangSwitcher = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	flex-shrink: 0;

	${Select} select {
		color: #c1c9d2;
		color: var(--base-gray200);
		text-align: right;
		text-align-last: right;
		font-size: 12px;
		font-size: var(--font12)
	}

	${SelectArrows} {
		color: #c1c9d2;
		color: var(--base-gray200);
	}
`

const LangSwitcher = (props) => {
	const currentLang = useSelector(langSelector)
	const dispatch = useDispatch()
	const setLanguage = lang => dispatch({ type: LANG_SET, lang })

	return (
		<LangsConsumer>
			{langs => (
				<StyledLangSwitcher>
					<Select>
						<div>
							<select value={currentLang} onChange={e => setLanguage(e.target.value)}>
								{(props.langs || langs).map(lang => <option key={lang.key} value={lang.key}>{lang.name}</option>)}
							</select>
							<SelectArrows>
								<svg style={{ width: 12, height: 12 }} height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.591 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.41 9.992L8 13.583zm0-3.984L8 2.417 4.409 6.008a1 1 0 1 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z" fillRule="evenodd" />
								</svg>
							</SelectArrows>
						</div>
					</Select>
				</StyledLangSwitcher>
			)}
		</LangsConsumer>
	)
}
export default LangSwitcher