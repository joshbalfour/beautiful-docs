import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
`

const Switcher = styled.div`
	flex-shrink: 0;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-left: var(--sp20);
    padding-right: 20px;
    padding-right: var(--sp20);
    vertical-align: middle;
    align-self: flex-end;
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
`

const SwitcherIcon = styled.div`
	flex-shrink: 0;
	height: 28px;
	width: 28px;
	border-radius: 50%;
	box-shadow: 0 2px 5px 0 rgba(60,66,87,.1), 0 1px 1px 0 rgba(0,0,0,.07);
	background-color: #fff;
	position: relative;
	overflow: visible;

	background-size: cover;
	background-repeat: no-repeat;
	
	${props => props.src && css`
		background-image: url('${props.src}');
	`}
`

const SwitcherText = styled.div`
	flex-shrink: 1;
    flex-basis: 100%;
    margin-left: 8px;
    margin-left: var(--sp8);
    overflow: hidden;
`

const Name = styled.div`
	font-size: 13px;
    font-size: var(--font13);
    line-height: 20px;
    line-height: var(--font13-lineHeight);
    font-weight: 500;
    color: #697386;
    color: var(--gray500);
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

const Version = styled.div`
	font-family: Menlo,Consolas,monospace;
    font-family: var(--base-monospaceFont);
    font-size: 12px;
    color: #a3acb9;
    color: var(--gray300);
`

const SignIn = styled.a`
	font-size: 14px;
    flex-shrink: 0;
`

const AccountSwitcher = ({ name, detail, imageUrl, onClick }) => (
	<Wrapper onClick={onClick}>
		<Switcher>
			{name ? (
				<>
					<SwitcherIcon src={imageUrl} />
					<SwitcherText>
						<Name>{name}</Name>
						<Version>{detail}</Version>
					</SwitcherText>
				</>
			) : (
				<SignIn>Sign In →</SignIn>
			)}
		</Switcher>
	</Wrapper>
)

export default AccountSwitcher