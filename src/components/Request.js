import React, { useContext } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import CodeBlock from './CodeBlock'
import LangSwitcher from './LangSwitcher'
import ClickToCopy from './ClickToCopy'
import MethodExample from './MethodExample'
import LangsContext from './LangsContext'

import { langSelector } from '../store/selectors'

const TopBarButton = styled.div`
	display: flex;
	align-items: center;
`

const Spacer = styled.div`
	height: 12px;
	height: var(--sp12);
	border-left: 1px solid #e3e8ee;
	border-left: 1px solid var(--base-gray100);
	opacity: .2;
	margin-right: -1px;
`

const RequestCopy = styled(ClickToCopy)`
	padding: 8px;
    padding: var(--sp8);
    color: #a4cdfe;
    color: var(--base-blue200);
    border-radius: 8px;
    border-radius: var(--border-radius-8);
`

const Prompt = ({ code, langs }) => (
	<>
		<LangSwitcher langs={langs} />
		<TopBarButton>
			<Spacer />
			<div>
				<div>
					<RequestCopy text={code} />
				</div>
			</div>
		</TopBarButton>
	</>
)

const RequestCodeBlock = styled(CodeBlock)`
	padding-top: var(--sp12);
	padding-bottom: var(--sp8);
`

const Request = (props) => {
	const { title, code, withPrompt } = props
	const langs = useContext(LangsContext)
	let lang = useSelector(langSelector)

	let codeStr
	let language

	if (typeof code === 'string') {
		codeStr = code
		language = props.lang || 'bash'
	} else {
		codeStr = code[lang]
		language = langs.find(l => l.key === lang).language || lang

		if (!codeStr) {
			lang = Object.keys(code)[0]
			codeStr = Object.values(code)[0]
			language = langs.find(l => l.key === lang).language || lang
		}
	}

	return (
		<MethodExample
			title={title}
			code={codeStr}
			prompt={withPrompt && <Prompt langs={langs.filter(l => !!code[l.key])} />}
			dark
		>
			<RequestCodeBlock code={codeStr} lang={language} />
		</MethodExample>
	)
}

export default Request