import React from 'react'
import styled from 'styled-components'

import MethodExample from './MethodExample'

const Table = styled.table`
	table-layout: fixed;
	width: 100%;
	background-clip: padding-box;

	tr td, tr th {
		display: table-cell;
		padding: 9px 20px;
		font-size: 13px;
		vertical-align: top
	}

	tr td.table-row-property, tr th.table-row-property {
		width: 175px;
		font-weight: 600;
		text-align: right
	}

	tr:first-child td, tr:first-child th {
		padding-top: 16px
	}

	tr:last-child td, tr:last-child th {
		padding-bottom: 16px
	}

	th {
		width: 175px;
		font-weight: 600;
		text-align: right;
	}
`

const MethodExampleTable= ({ title, data }) => {
	return (
		<MethodExample title={title}>
			<Table>
				<tbody>
					{data.map((item, i) => (
						<tr key={i}>
							<th>{item[0]}</th>
							<td>{item[1]}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</MethodExample>
	)
}

export default MethodExampleTable