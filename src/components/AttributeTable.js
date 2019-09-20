import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const LinkSvg = () => (
	<svg style={{ width: 16, height: 16 }} width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
		<g fillRule="evenodd">
			<path d="M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773a2.46 2.46 0 0 1 .14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z"></path>
			<path d="M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122a1.495 1.495 0 0 1-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z"></path>
		</g>
	</svg>
)

const Plus = () => (
	<svg style={{ width: 10, height: 10 }} height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0z" fillRule="evenodd" fill="currentColor"></path>
	</svg>
)

const ListGroup = styled.ul`
	list-style: none;
    padding: 0;
    margin: 0;
`

const MethodListGroup = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

const StyledExpandIcon = styled.span`
	transition: all .2s ease;
	display: inline-block;
	transform: rotate(0deg);
	transform-origin: center;
	margin-right: 6px;

	${props => props.isExpanded && css`
		transform: rotate(45deg);
	`}

	> div {
		color: #697386;
		color: var(--gray500);
	}
`

const ExpandIcon = ({ isExpanded }) => (
	<StyledExpandIcon isExpanded={isExpanded}>
		<div>
			<Plus />
		</div>
	</StyledExpandIcon>
)

const ShowChildren = ({ parentName, children }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<MethodList isChild isExpanded={expanded}>
			<Title isChild isExpanded={expanded} onClick={() => setExpanded(!expanded)}>
				<ExpandIcon isExpanded={expanded} />
				{!expanded ? 'Show' : 'Hide'} child attributes
			</Title>

			{expanded && children && (
				<ListGroup>
					{children.map(item => (
						<Item
							id={item.id}
							{...item}
							parentName={parentName}
						/>
					))}
				</ListGroup>
			)}
		</MethodList>
	)
}

const Description = styled.p`
	&& {
		font-size: 14px;
		font-size: var(--font14);
		line-height: 22px;
		line-height: var(--font14-lineHeight);
		margin-top: 4px;
		margin-top: var(--sp4);

		p {
			margin-top: 8px;
			margin-top: var(--sp8)
		}
	}
`

const DescriptionAndChildren = styled.div`
	@media screen and (min-width: 1680px) {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
`

const Type = styled.span`
	color: #8792a2;
	color: var(--gray400);
	font-size: 12px;
	font-weight: 500;
	margin: 0;
	margin-right: 4px;
	margin-right: var(--sp4);

	${MethodListGroup} & {
		margin: 2px 0;
	}
`

const Badge = styled.span`
	font-size: 10px;
	letter-spacing: .12px;
	font-weight: 600;
	text-transform: uppercase;
`

const ParentName = styled.span`
	color: #8792a2;
	color: var(--gray400);
`

const Name = styled.span`
	font-weight: 600;
	color: #3c4257;
	color: var(--gray700);
	font-size: 13px;
	margin-right: 4px;
	margin-right: var(--sp4);
	font-family: Menlo,Consolas,monospace;
	font-family: var(--base-monospaceFont);
`

const AnchorLink = styled.div`
	opacity: 0;
	position: absolute;
	top: 0;
	left: -20px;
	padding-right: 4px;
	padding-right: var(--sp4);
	isolation: isolate;
	color: #067ab8;
	color: var(--cyan500);
	background: #fff;
	background: var(--white);
	border-radius: 50%;
	transition: transform .2s;
`

const ItemLabel = styled.h3`
	display: flex;
	font-size: 12px;
	margin: 0;
	align-items: baseline;
	flex-wrap: wrap;
	position: relative;

	padding-top: 4px !important;
	padding-top: var(--sp4) !important;

	${props => !props.isChild && css`
		margin-top: 4px;
		margin-top: var(--sp4);
		margin-bottom: 4px;
		margin-bottom: var(--sp4);
		width: 12em;
		padding-right: 8px;
		padding-right: var(--sp8);
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		word-break: break-word;
	`}

	:hover {
		${AnchorLink} {
			opacity: 1;
		}
	}
`

const ListItem = styled.li`
	&& {
		display: flex;
		flex-direction: column;

		padding: 12px;
		padding: var(--sp12);

		border-bottom: 1px solid #e3e8ee;
		border-bottom: 1px solid var(--gray100);

		:last-child {
			border-bottom: none
		}

		${props => !props.isChild && css`
			display: flex;
			border-bottom: none;
			padding: 16px 0;
			padding: var(--sp16) 0;
			flex-wrap: wrap;
			flex-direction: row;

			padding-top: 16px;
			padding-top: var(--sp16);
			padding-bottom: 15px;
			padding-bottom: calc(var(--sp16) - 1px);
		`}
	}
`

const Item = ({ name, parentName, type, description, id, badge, children }) => (
	<ListItem isChild={!!parentName} id={`${parentName ? `${parentName}-` : ''}${id}`}>
		<ItemLabel isChild={!!parentName}>
			<a href={`#${parentName ? `${parentName}-` : ''}${id}`}>
				<AnchorLink>
					<LinkSvg />
				</AnchorLink>
			</a>
			<Name isChild={!!parentName}>
				<ParentName>{parentName && `${parentName}.`}</ParentName>
				{name}
			</Name>
			{badge && (
				<Badge>{badge}</Badge>
			)}
			<Type>{type}</Type>
		</ItemLabel>
		<DescriptionAndChildren>
			<Description>
				<span>{description}</span>
			</Description>
			<div />
			{children && (
				<ShowChildren
					parentName={name}
					children={children}
				/>
			)}
		</DescriptionAndChildren>
	</ListItem>
)

const MethodList = styled.div`
	margin-top: 32px;
	margin-top: var(--sp32);

	${props => props.isChild && css`
		margin-top: 0;
		border: 1px solid #e3e8ee;
		border: 1px solid var(--gray100);
		border-radius: 16px;
		border-radius: var(--sp16);
		margin-top: 8px;
		margin-top: var(--sp8);
		display: inline-block;
		margin-right: auto;
		transition: all .2s ease;
	`}

	${props => props.isExpanded && css`
		width: 100%;	
	`}
`
const Title = styled.h5`
	color: #a3acb9;
	color: var(--gray300);
	text-transform: uppercase;
	margin-top: 20px;
	margin-top: var(--sp20);
	padding-bottom: 12px;
	padding-bottom: var(--sp12);
	border-bottom: 1px solid #e3e8ee;
	border-bottom: 1px solid var(--gray100);
	font-size: 12px;
	font-weight: 500;
	user-select: none;
	margin-bottom: 0;

	${MethodListGroup} & {
		margin-top: 0;
		margin-bottom: 0;
		width: 100%;
		color: #697386;
		color: var(--gray500);
		border-bottom: none;
		display: inline-block;
		padding: 6px 10px;
		cursor: pointer;
		text-transform: none;
		font-size: 13px;

		:hover {
			color: #2a2f45;
			color: var(--gray800);
		}
	}

	${props => props.isExpanded && css`
		border-bottom: 1px solid #e3e8ee !important;
		border-bottom: 1px solid var(--gray100) !important;
	`}

	${props => props.isChild && css`
		cursor: pointer;
	`}
`

const AttributeTable = ({ title = 'Attributes', attributes }) => (
	<MethodList>
		<Title>{title}</Title>
		<MethodListGroup>
			{attributes && attributes.map(item => <Item key={item.id} id={item.id} {...item} />)}
		</MethodListGroup>
	</MethodList>
)

export default AttributeTable