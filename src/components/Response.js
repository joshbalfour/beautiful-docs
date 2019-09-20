import React from 'react'
import styled from 'styled-components'

import CodeBlock from './CodeBlock'
import MethodExample from './MethodExample'

const Padding = styled.div`
	&& {
		> p {
			margin: 0;
			padding: 12px 20px;
			padding: var(--sp12) var(--sp20)
		}	
	}
`

const ResponseCodeBlock = styled(CodeBlock).attrs({ lang: 'json', forceLight: true })`
	margin-top: var(--sp12);
	margin-bottom: var(--sp12);
`

const MethodExampleResponse= ({ title, code, children }) => {
	return (
		<MethodExample title={title}>
			<Padding>
				{code && (
					<ResponseCodeBlock code={code} />
				)}
				{children}
			</Padding>
		</MethodExample>
	)
}

export default MethodExampleResponse