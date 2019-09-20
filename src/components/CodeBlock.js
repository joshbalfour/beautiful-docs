import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


import { useSelector } from 'react-redux'

import { darkModeSelector } from '../store/selectors'


const StyledCodeBlock = styled.div`
	position: relative;
	box-sizing: content-box;
	max-height: calc(100vh - var(--sp32) - var(--sp32) - var(--sp32) - var(--sp32) - 85px);
`

const CodeBlockScroll = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	font-size: 13px;
	line-height: 19px;
	min-height: inherit;
	max-height: inherit;
	overflow-y: auto;
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
	flex-grow: 1;
	overflow-x: auto;
	margin: 0;
	height: 100%;
	color: #2a2f45;
	color: var(--syntax-default);
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	-moz-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
	padding: 0 12px;
	padding: 0 var(--sp12);
`

const Shell = styled.div`
    color: #c1c9d2;
	color: var(--gray200);
	user-select: none;
	margin-left: var(--sp12);
	margin-right: var(--sp4);
`

const CodeBlock = ({ className, lang, code = '', forceLight, style = {} }) => {
	const lineNums = code.split('\n').length
	const showLineNumbers = code.split('\n').length !== 1 || lang === 'json'
	const darkMode = useSelector(darkModeSelector)

	return (
		<StyledCodeBlock className={className} style={{ minHeight: lineNums > 2 ? 90 : 22, maxHeight: 'calc(100vh - 401px)', ...style }}>
			<CodeBlockScroll>
				{lang === 'bash' && <Shell>$</Shell>}
				<StyledSyntaxHighlighter
					language={lang || 'bash'}
					showLineNumbers={showLineNumbers}
					style={atelierSulphurpoolDark}
					lineNumberContainerStyle={{
						width: 'var(--sp32)',
						paddingRight: 'var(--sp2)'
					}}
					lineNumberStyle={{ opacity: 0.25 }}
					customStyle={{
						display: 'flex',
						background: 'none', 
						filter: forceLight ? (darkMode ? 'brightness(1.3)' : 'brightness(0.85)') : 'brightness(1.5)', 
						padding: undefined,
					}}
				>
					{code}
				</StyledSyntaxHighlighter>
			</CodeBlockScroll>
		</StyledCodeBlock>
	)
}
export default CodeBlock