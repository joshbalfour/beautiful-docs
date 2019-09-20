import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'

import logos from './LangLogos'

import { langSelector } from '../store/selectors'
import actionTypes from '../store/actionTypes'
import CodeBlock from './CodeBlock'
import { LangsConsumer } from './LangsContext'
import ClickToCopy, { StyledClickToCopy } from './ClickToCopy'

const { LANG_SET } = actionTypes

const Container = styled.div`
	box-shadow: 0 0 0 1px rgba(0,0,0,.07);
	box-shadow: var(--shadow--keyline);
	border-radius: 8px;
	border-radius: var(--border-radius-8);
`

const TopBar = styled.div`
	background: none;
	padding: 10px 12px;
	padding: 10px var(--sp12);
	font-weight: 500;
	font-size: 12px;
	font-size: var(--font12);
	color: #4f566b;
	color: var(--gray600);
	letter-spacing: .01em;
`

const Title = styled.div`
	color: #697386;
	color: var(--example-response-topbar-color);
	font-size: 12px;
	font-size: var(--font12);
	font-weight: 500;
	text-transform: uppercase;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
`

const Langs = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-end;
	overflow: hidden;
`

const Lang = styled.a`
	padding: 8px;
	padding: var(--sp8);
	width: 64px;
	width: var(--sp64);
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-bottom: 2px solid transparent;

	${props => props.isActive && css`
		border-bottom: 2px solid #7dabf8;
		border-bottom: 2px solid var(--blue300);
	`}
`

const LangIcon = styled.div`
	display: flex;
	justify-content: center;
`

const LangName = styled.div`
	font-size: 12px;
	font-size: var(--font12);
	line-height: 18px;
	line-height: var(--font12-lineHeight);
	font-weight: 500;
	text-align: center;
	margin-top: 8px;
	margin-top: var(--sp8);
	color: #697386;
	color: var(--gray500);

	:active {
		color: #2a2f45;
		color: var(--gray800)
	}
`

const Install = styled.div`
	background: #f7fafc;
	background: var(--example-response-bg);
	border-top: 1px solid #e3e8ee;
	border-top: 1px solid var(--gray100);
	border-bottom-left-radius: 8px;
	border-bottom-left-radius: var(--border-radius-8);
	border-bottom-right-radius: 8px;
	border-bottom-right-radius: var(--border-radius-8);
`

const InstallClientLibrary = styled.div`

	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 12px;
	padding-top: var(--sp12);

	padding-bottom: 12px;
	padding-bottom: var(--sp12);

`

const CodeContainer = styled.div`
	overflow-x: hidden;
	position: relative;
	width: 100%;
`

const CodeFade = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 64px;
	width: var(--sp64);
	box-shadow: inset -64px 0 32px -32px #f7fafc;
	box-shadow: inset -64px 0 32px -32px var(--gray50);
`

const InstallLinks = styled.div`
	flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    padding: 0 8px;
    padding: 0 var(--sp8);
	margin-left: auto;

	color: #556cd6;

	${StyledClickToCopy} {
		color: #556cd6;

		padding: 0;
	}
	
	a {
		cursor: pointer;
		display: flex;
		padding: 0;
		padding-right: 8px;
		padding-right: var(--sp8);
		font-size: 12px;
		line-height: 18px;
		font-weight: 600;
		letter-spacing: .33px;
		text-transform: uppercase;
		color: #556cd6;

		:hover {
			color: #3d4eac;
			color: var(--blue600);
		}
	}
`

const InstallBlock = ({ lang }) => (
	<Install>
		<InstallClientLibrary>
			<CodeContainer>
				<CodeBlock lang="bash" forceLight code={lang.installCmd} style={{ minHeight: 18 }} />
				<CodeFade />
			</CodeContainer>
			<InstallLinks>
				<a href={`https://github.com/${lang.repo}`} target="_blank" rel="noopener noreferrer">
					<svg style={{ width: 16, height: 16, marginRight: 'var(--sp4)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
						<path fillRule="evenodd" clipRule="evenodd" d="M18 1.4C9 1.4 1.7 8.7 1.7 17.7c0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.5c0 .4.3.9 1.1.8 6.5-2.2 11.1-8.3 11.1-15.5C34.3 8.7 27 1.4 18 1.4z" fill="currentColor"></path>
					</svg> {lang.repo}
				</a>
				<ClickToCopy text={lang.installCmd} />
			</InstallLinks>
		</InstallClientLibrary>
	</Install>
)

const SelectClientLibrary = () => {
	const currentLang = useSelector(langSelector)
	const dispatch = useDispatch()
	const setLanguage = lang => dispatch({ type: LANG_SET, lang })

	return (
		<LangsConsumer>
			{langs => (
				<Container>
					<TopBar>
						<Title>Client libraries</Title>
					</TopBar>
					<Langs>
						{langs.map(({ key, name }) => (
							<Lang key={key} isActive={key === currentLang} onClick={() => setLanguage(key)}>
								<LangIcon>
									{logos[key]()}
								</LangIcon>
								<LangName>{name}</LangName>
							</Lang>
						))}
					</Langs>
					<InstallBlock lang={langs.find(l => l.key === currentLang)} />
				</Container>
			)}
		</LangsConsumer>
	)
}

export default SelectClientLibrary