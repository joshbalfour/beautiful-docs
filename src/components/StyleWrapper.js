import React from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'

import { darkModeSelector } from '../store/selectors'

const globals = css`
	* {
		box-sizing: border-box;
		word-wrap: break-word;
		-webkit-font-smoothing: antialiased
	}

	h1,h2,h3,h4,h6,li,ol,p,ul {
		margin: 0;
		padding: 0;
		font-weight: inherit;
		font-size: inherit
	}

	li {
		list-style: none
	}

	input {
		outline: none;
		border: 0;
		box-sizing: border-box;
		bottom: 0
	}

	p {
		font-size: 14px;
		font-size: var(--font14);
		line-height: 22px;
		line-height: var(--font14-lineHeight);
		color: #4f566b;
		color: var(--gray600);
		margin-bottom: 0;
		margin-top: 20px;
		margin-top: var(--sp20)
	}

	code,pre {
		font-family: Menlo,Consolas,monospace;
		font-family: var(--base-monospaceFont);
		margin: 0
	}

	kbd {
		display: inline-block;
		font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
		font-family: var(--base-baseFont);
		color: #3c4257;
		color: var(--gray700);
		background: #2a2f45;
		background: var(--inline-code-background);
		border: 1px solid rgba(0,0,0,.05);
		border: 1px solid var(--inline-code-keylineColor);
		border-bottom-color: rgba(0,0,0,.1);
		border-radius: 4px;
		border-radius: var(--border-radius-4);
		box-shadow: inset 0 -1px 0 #e3e8ee;
		box-shadow: inset 0 -1px 0 var(--gray100);
		vertical-align: middle;
		padding: 3px 5px;
		min-width: 2em;
		margin-left: 2px;
		margin-right: 2px
	}

	a,a:active,a:focus,a:hover,a:visited {
		text-decoration: none;
		outline: 0;
		cursor: pointer;

		color: #556cd6;
    	color: var(--blue500);
    	font-weight: 500;
	}

	a:active, a:focus, a:hover {
		color: #212d63;
		color: var(--blue800);
	}

	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		cursor: pointer;
		background: transparent;
		text-decoration: none;
		border: none;
		display: inline-block;
		border: 0;
		padding: 0
	}

	button:focus {
		outline: 0
	}

	button::-moz-focus-inner {
		border: 0;
		padding: 0
	}

	option {
		color: #000;
		color: initial
	}

	& {
		font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
		font-family: var(--base-baseFont);
		overflow-x: hidden;
		max-width: 100%;
		background: #fff;
		background: var(--white)
	}
`

/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
const normalize = css`
	& {
		font-family: sans-serif; /* 1 */
		-ms-text-size-adjust: 100%; /* 2 */
		-webkit-text-size-adjust: 100%; /* 2 */
		margin: 0;
	}
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
	}
	
	
	audio,
	canvas,
	progress,
	video {
		display: inline-block; /* 1 */
		vertical-align: baseline; /* 2 */
	}
	

	
	audio:not([controls]) {
		display: none;
		height: 0;
	}
	
	
	[hidden],
	template {
		display: none;
	}
	
	
	a {
		background-color: transparent;
	}
	
	
	a:active,
	a:hover {
		outline: 0;
	}
	
	
	abbr[title] {
		border-bottom: 1px dotted;
	}
	
	
	b,
	strong {
		font-weight: bold;
	}
	
	
	dfn {
		font-style: italic;
	}
	
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	
	mark {
		background: #ff0;
		color: #000;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	
	sup {
		top: -0.5em;
	}
	
	sub {
		bottom: -0.25em;
	}
	
	img {
		border: 0;
	}
	
	svg:not(:root) {
		overflow: hidden;
	}
	
	figure {
		margin: 1em 40px;
	}
	
	hr {
		box-sizing: content-box;
		height: 0;
	}

	pre {
		overflow: auto;
	}
	
	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	
	button,
	input,
	optgroup,
	select,
	textarea {
		color: inherit; /* 1 */
		font: inherit; /* 2 */
		margin: 0; /* 3 */
	}
	
	button {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	html input[type="button"], /* 1 */
	input[type="reset"],
	input[type="submit"] {
		-webkit-appearance: button; /* 2 */
		cursor: pointer; /* 3 */
	}
	
	button[disabled],
	html input[disabled] {
		cursor: default;
	}
	
	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}
	
	
	
	input {
		line-height: normal;
	}

	
	input[type="checkbox"],
	input[type="radio"] {
		box-sizing: border-box; /* 1 */
		padding: 0; /* 2 */
	}
	
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}
	
	input[type="search"] {
		-webkit-appearance: textfield; /* 1 */
		box-sizing: content-box; /* 2 */
	}
	
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	fieldset {
		border: 1px solid #c0c0c0;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}

	legend {
		border: 0; /* 1 */
		padding: 0; /* 2 */
	}

	textarea {
		overflow: auto;
	}
	
	optgroup {
		font-weight: bold;
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	td,
	th {
		padding: 0;
	}
`

const globalVars = css`
	--base-fontSet--latin:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue","Ubuntu";
	--base-fontSet--monospace:"Menlo","Consolas";
	--base-baseFont:var(--base-fontSet--latin),sans-serif;
	--base-monospaceFont:var(--base-fontSet--monospace),monospace;
	--base-fontSet--ja-JP:"Hiragino Sans","Yu Gothic UI","Meiryo UI","Hiragino Kaku Gothic ProN";
	--base-baseFont--ja-JP:var(--base-fontSet--latin),var(--base-fontSet--ja-JP),sans-serif;
	--base-monospaceFont--ja-JP:var(--base-fontSet--monospace),var(--base-fontSet--ja-JP),monospace;
	--base-fontSet--zh-Hans:"PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","Microsoft JhengHei";
	--base-baseFont--zh-Hans:var(--base-fontSet--latin),var(--base-fontSet--zh-Hans),sans-serif;
	--base-monospaceFont--zh-Hans:var(--base-fontSet--monospace),var(--base-fontSet--zh-Hans),monospace;
	
	--base-gray50:#f7fafc;
	--base-gray100:#e3e8ee;
	--base-gray200:#c1c9d2;
	--base-gray300:#a3acb9;
	--base-gray400:#8792a2;
	--base-gray500:#697386;
	--base-gray600:#4f566b;
	--base-gray700:#3c4257;
	--base-gray800:#2a2f45;
	--base-gray900:#1a1f36;
	--base-blue50:#f5fbff;
	--base-blue100:#d6ecff;
	--base-blue200:#a4cdfe;
	--base-blue300:#7dabf8;
	--base-blue400:#6c8eef;
	--base-blue500:#556cd6;
	--base-blue600:#3d4eac;
	--base-blue700:#2f3d89;
	--base-blue800:#212d63;
	--base-blue900:#131f41;
	--base-cyan50:#edfdfd;
	--base-cyan100:#c4f1f9;
	--base-cyan200:#7fd3ed;
	--base-cyan300:#4db7e8;
	--base-cyan400:#3a97d4;
	--base-cyan500:#067ab8;
	--base-cyan600:#075996;
	--base-cyan700:#06457a;
	--base-cyan800:#093353;
	--base-cyan900:#042235;
	--base-green50:#efffed;
	--base-green100:#cbf4c9;
	--base-green200:#85d996;
	--base-green300:#33c27f;
	--base-green400:#1ea672;
	--base-green500:#09825d;
	--base-green600:#0e6245;
	--base-green700:#0d4b3b;
	--base-green800:#0b3733;
	--base-green900:#082429;
	--base-yellow50:#fcf9e9;
	--base-yellow100:#f8e5b9;
	--base-yellow200:#efc078;
	--base-yellow300:#e5993e;
	--base-yellow400:#d97917;
	--base-yellow500:#bb5504;
	--base-yellow600:#983705;
	--base-yellow700:#762b0b;
	--base-yellow800:#571f0d;
	--base-yellow900:#3a1607;
	--base-orange50:#fffaee;
	--base-orange100:#fee3c0;
	--base-orange200:#f8b886;
	--base-orange300:#f5925e;
	--base-orange400:#e56f4a;
	--base-orange500:#c44c34;
	--base-orange600:#9e2f28;
	--base-orange700:#7e1e23;
	--base-orange800:#5d161b;
	--base-orange900:#420e11;
	--base-red50:#fff8f5;
	--base-red100:#fde2dd;
	--base-red200:#fbb5b2;
	--base-red300:#fa8389;
	--base-red400:#ed5f74;
	--base-red500:#cd3d64;
	--base-red600:#a41c4e;
	--base-red700:#80143f;
	--base-red800:#5e1039;
	--base-red900:#420828;
	--base-purple50:#fff8fe;
	--base-purple100:#fce0f6;
	--base-purple200:#f0b4e4;
	--base-purple300:#e28ddc;
	--base-purple400:#c96ed0;
	--base-purple500:#a450b5;
	--base-purple600:#7b3997;
	--base-purple700:#5b2b80;
	--base-purple800:#401d6a;
	--base-purple900:#2d0f55;
	--base-violet50:#f8f9fe;
	--base-violet100:#e6e6fc;
	--base-violet200:#c7c2ea;
	--base-violet300:#b0a1e1;
	--base-violet400:#9c82db;
	--base-violet500:#8260c3;
	--base-violet600:#61469b;
	--base-violet700:#4b3480;
	--base-violet800:#352465;
	--base-violet900:#1f184e;
	--base-spacing0:0;
	--base-spacing2:2px;
	--base-spacing4:4px;
	--base-spacing8:8px;
	--base-spacing12:12px;
	--base-spacing16:16px;
	--base-spacing20:20px;
	--base-spacing24:24px;
	--base-spacing32:32px;
	--base-spacing48:48px;
	--base-spacing64:64px;
	--base-input-fontSize:14px;
	--base-input-fontSize--jumbo:16px;
	--base-input-fontSize--small:13px;
	--base-input-lineHeight:20px;
	--base-input-lineHeight--jumbo:28px;
	--base-input-lineHeight--small:16px;
	--base-border-radius:4px;
	--base-shadow-keyColor:rgba(0,0,0,.07);
	--base-shadow-ambientColor:rgba(var(--base-gray700),0.1);
	--base-shadow--keyline:0 0 0 1px var(--base-gray100);
	--base-shadow--small:0 2px 5px 0 var(--base-shadow-ambientColor),0 1px 1px 0 var(--base-shadow-keyColor);
	--base-shadow--medium:0 7px 14px 0 var(--base-shadow-ambientColor),0 3px 6px 0 var(--base-shadow-keyColor);
	--base-shadow--large:0 15px 35px 0 var(--base-shadow-ambientColor),0 5px 15px 0 var(--base-shadow-keyColor);
	--base-shadow--extraLarge:0 50px 100px 0 var(--base-shadow-ambientColor),0 15px 35px 0 var(--base-shadow-ambientColor),0 5px 15px 0 var(--base-shadow-keyColor);
	--base-shadow-input:0 0 0 1px rgba(var(--base-gray700),0.16),0 1px 1px rgba(0,0,0,.08);
	--base-shadow-input--focus:0 0 0 1px rgba(var(--base-cyan500),0.2),0 0 0 2px rgba(var(--base-cyan500),0.25),0 1px 1px rgba(0,0,0,.08);
	--base-shadow-input--invalid:0 0 0 1px rgba(var(--base-red500),0.5),0 1px 1px rgba(0,0,0,.08);
	--base-z-index-contextualLayer:300;
	--base-z-index-toastLayer:300;
	--base-z-index-contextualLayer-in-modal:400;
	--base-svg-modal-top-arrow:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMjEgOSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjODg5OEFBIiBmaWxsLW9wYWNpdHk9Ii4xIiBkPSJNMSA5LjA5MmgxOWwtNi40MDItNi43NGMtMS43MTctMS44MDYtNC40ODUtMS44LTYuMTk2IDBMMSA5LjA5M3pNMjAuMzQyIDhsLTYuMDItNi4zMzZjLTIuMTA4LTIuMjItNS41MzgtMi4yMTgtNy42NDUgMEwuNjU4IDhoMTkuNjg0eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik03LjQwMiAyLjM1M2MxLjcxMS0xLjgwMSA0LjQ4LTEuODA3IDYuMTk2IDBMMjAgOS4wOTNIMWw2LjQwMi02Ljc0eiIvPjwvZz48L3N2Zz4=";
	--shadow-ambientColor:rgba(59,65,94,.1);
	--shadow-keylineColor:rgba(0,0,0,.07);
	--shadow--keyline:0 0 0 1px var(--shadow-keylineColor);
	--shadow--small:0 2px 5px 0 var(--shadow-ambientColor),0 1px 1px 0 var(--shadow-keylineColor);
	--shadow--medium:0 7px 14px 0 var(--shadow-ambientColor),0 3px 6px 0 var(--shadow-keylineColor);
	--shadow--large-gentle:0 15px 35px 0 var(--shadow-ambientColor);
	--shadow--large:0 15px 35px 0 var(--shadow-ambientColor),0 5px 15px 0 var(--shadow-keylineColor);
	--shadow--xsmall:0 1px 3px 0 var(--shadow-ambientColor);
	--border-radius-4:4px;
	--border-radius-8:8px;
	--header-height:80px;
	--sidebar-top-fade-height:50px;
	--footer-height:calc(28px + var(--sp12) + var(--sp12));
	--sidebar-width:220px;
	--content-width:calc(100vw - var(--sidebar-width));
	--method-area-padding:5vw;
	--example-width:40vw;
	--example-min-width:300px;
	--example-max-width:600px;
	--copy-width:calc(var(--example-width) - var(--method-area-padding));
	--copy-max-width:600px;
	--content-max-width:calc(var(--example-max-width) + var(--copy-max-width) + var(--method-area-padding) + var(--method-area-padding) + var(--sp32) + var(--sp32));
	--section-header-line-height:40px;
	--white:#fff;
	--gray50:var(--base-gray50);
	--gray100:var(--base-gray100);
	--gray200:var(--base-gray200);
	--gray300:var(--base-gray300);
	--gray500:var(--base-gray500);
	--gray600:var(--base-gray600);
	--gray700:var(--base-gray700);
	--gray800:var(--base-gray800);
	--gray900:var(--base-gray900);
	--blue50:var(--base-blue50);
	--blue100:var(--base-blue100);
	--blue200:var(--base-blue200);
	--blue300:var(--base-blue300);
	--blue400:var(--base-blue400);
	--blue500:var(--base-blue500);
	--blue600:var(--base-blue600);
	--blue700:var(--base-blue700);
	--blue800:var(--base-blue800);
	--blue900:var(--base-blue900);
	--cyan50:var(--base-cyan50);
	--cyan100:var(--base-cyan100);
	--cyan200:var(--base-cyan200);
	--cyan300:var(--base-cyan300);
	--cyan400:var(--base-cyan400);
	--cyan500:var(--base-cyan500);
	--cyan600:var(--base-cyan600);
	--cyan700:var(--base-cyan700);
	--cyan800:var(--base-cyan800);
	--cyan900:var(--base-cyan900);
	--green50:var(--base-green50);
	--green100:var(--base-green100);
	--green200:var(--base-green200);
	--green300:var(--base-green300);
	--green400:var(--base-green400);
	--green500:var(--base-green500);
	--green600:var(--base-green600);
	--green700:var(--base-green700);
	--green800:var(--base-green800);
	--green900:var(--base-green900);
	--orange50:var(--base-orange50);
	--orange100:var(--base-orange100);
	--orange200:var(--base-orange200);
	--orange300:var(--base-orange300);
	--orange400:var(--base-orange400);
	--orange500:var(--base-orange500);
	--orange600:var(--base-orange600);
	--orange700:var(--base-orange700);
	--orange800:var(--base-orange800);
	--orange900:var(--base-orange900);
	--violet50:var(--base-violet50);
	--violet100:var(--base-violet100);
	--violet200:var(--base-violet200);
	--violet300:var(--base-violet300);
	--violet400:var(--base-violet400);
	--violet500:var(--base-violet500);
	--violet600:var(--base-violet600);
	--violet700:var(--base-violet700);
	--violet800:var(--base-violet800);
	--violet900:var(--base-violet900);
	--red50:var(--base-red50);
	--red100:var(--base-red100);
	--red200:var(--base-red200);
	--red300:var(--base-red300);
	--red400:var(--base-red400);
	--red500:var(--base-red500);
	--red600:var(--base-red600);
	--red700:var(--base-red700);
	--red800:var(--base-red800);
	--red900:var(--base-red900);
	--yellow50:var(--base-yellow50);
	--yellow100:var(--base-yellow100);
	--yellow200:var(--base-yellow200);
	--yellow300:var(--base-yellow300);
	--yellow400:var(--base-yellow400);
	--yellow500:var(--base-yellow500);
	--yellow600:var(--base-yellow600);
	--yellow700:var(--base-yellow700);
	--yellow800:var(--base-yellow800);
	--yellow900:var(--base-yellow900);
	--syntax-default:var(--blue50);
	--syntax-punctuation:var(--gray400);
	--syntax-comment:var(--gray200);
	--syntax-meta:var(--gray300);
	--syntax-operator:var(--blue200);
	--syntax-keyword:var(--blue200);
	--syntax-string:var(--green200);
	--syntax-number:var(--orange200);
	--syntax-light-punctuation:var(--gray300);
	--syntax-light-comment:var(--orange400);
	--syntax-light-keyword:var(--cyan500);
	--syntax-light-number:var(--orange400);
	--syntax-light-date:var(--cyan500);
	--syntax-light-null:var(--gray400);
	--inline-code-background:var(--gray50);
	--inline-code-keylineColor:rgba(0,0,0,.05);
	--sp0:0;
	--sp2:2px;
	--sp4:4px;
	--sp8:8px;
	--sp12:12px;
	--sp16:16px;
	--sp20:20px;
	--sp24:24px;
	--sp32:32px;
	--sp48:48px;
	--sp64:64px;
	--font12:12px;
	--font12-lineHeight:18px;
	--font13:13px;
	--font13-lineHeight:20px;
	--font14:14px;
	--font14-lineHeight:22px;
	--font16:16px;
	--font16-lineHeight:26px;
	--example-request-topbar-bg:var(--gray700);
	--example-request-topbar-color:var(--gray300);
	--example-request-bg:var(--gray600);
	--example-response-topbar-bg:var(--gray100);
	--example-response-topbar-color:var(--gray500);
	--example-response-bg:var(--gray50);
	--para-line-height:24px;
	--gray400:var(--base-gray400);
	--syntax-light-default:var(--gray500);
	--syntax-light-meta:var(--gray500);
	--syntax-light-operator:var(--blue500);
	--syntax-light-string:var(--green500);
	--inline-code-color:var(--red500);


	@media screen and (min-width: 1680px) {
		& {
			--sidebar-width:280px;
		}
	}
`

const darkModeVars = css`
	--gray400:var(--base-gray400);
	--syntax-light-default:var(--gray500);
	--syntax-light-meta:var(--gray500);
	--syntax-light-operator:var(--blue500);
	--syntax-light-string:var(--green500);
	--inline-code-color:var(--red500);
	--white:var(--base-gray900);
	--gray50:var(--base-gray800);
	--gray100:var(--base-gray700);
	--gray200:var(--base-gray600);
	--gray300:var(--base-gray500);
	--gray500:var(--base-gray300);
	--gray600:var(--base-gray200);
	--gray700:var(--base-gray100);
	--gray800:var(--base-gray50);
	--gray900:#fff;
	--blue50:var(--base-gray800);
	--blue100:var(--base-blue800);
	--blue200:var(--base-blue700);
	--blue300:var(--base-blue600);
	--blue400:var(--base-blue500);
	--blue500:var(--base-blue400);
	--blue600:var(--base-blue300);
	--blue700:var(--base-blue200);
	--blue800:var(--base-blue100);
	--blue900:var(--base-blue50);
	--cyan50:var(--base-cyan900);
	--cyan100:var(--base-cyan800);
	--cyan200:var(--base-cyan700);
	--cyan300:var(--base-cyan600);
	--cyan400:var(--base-cyan500);
	--cyan500:var(--base-cyan400);
	--cyan600:var(--base-cyan300);
	--cyan700:var(--base-cyan200);
	--cyan800:var(--base-cyan100);
	--cyan900:var(--base-cyan50);
	--green50:var(--base-green900);
	--green100:var(--base-green800);
	--green200:var(--base-green700);
	--green300:var(--base-green600);
	--green400:var(--base-green500);
	--green500:var(--base-green400);
	--green600:var(--base-green300);
	--green700:var(--base-green200);
	--green800:var(--base-green100);
	--green900:var(--base-green50);
	--orange50:var(--base-orange900);
	--orange100:var(--base-orange800);
	--orange200:var(--base-orange700);
	--orange300:var(--base-orange600);
	--orange400:var(--base-orange500);
	--orange500:var(--base-orange400);
	--orange600:var(--base-orange300);
	--orange700:var(--base-orange200);
	--orange800:var(--base-orange100);
	--orange900:var(--base-orange50);
	--violet50:var(--base-violet900);
	--violet100:var(--base-violet800);
	--violet200:var(--base-violet700);
	--violet300:var(--base-violet600);
	--violet400:var(--base-violet500);
	--violet500:var(--base-violet400);
	--violet600:var(--base-violet300);
	--violet700:var(--base-violet200);
	--violet800:var(--base-violet100);
	--violet900:var(--base-violet50);
	--red50:var(--base-red900);
	--red100:var(--base-red800);
	--red200:var(--base-red700);
	--red300:var(--base-red600);
	--red400:var(--base-red500);
	--red500:var(--base-red400);
	--red600:var(--base-red300);
	--red700:var(--base-red200);
	--red800:var(--base-red100);
	--red900:var(--base-red50);
	--yellow50:var(--base-yellow900);
	--yellow100:var(--base-yellow800);
	--yellow200:var(--base-yellow700);
	--yellow300:var(--base-yellow600);
	--yellow400:var(--base-yellow500);
	--yellow500:var(--base-yellow400);
	--yellow600:var(--base-yellow300);
	--yellow700:var(--base-yellow200);
	--yellow800:var(--base-yellow100);
	--yellow900:var(--base-yellow50);
	--syntax-light-punctuation:var(--gray400);
	--syntax-light-comment:var(--gray300);
	--syntax-light-keyword:var(--blue500);
	--syntax-light-number:var(--orange500);
	--inline-code-background:hsla(0,0%,100%,.04);
	--inline-code-keylineColor:hsla(0,0%,100%,.08);
	--example-request-topbar-bg:var(--base-gray600);
	--example-request-topbar-color:var(--base-gray300);
	--example-request-bg:var(--base-gray700);
	--example-response-topbar-bg:var(--gray100);
	--example-response-topbar-color:var(--gray500);
	--example-response-bg:var(--gray50);
	--shadow-keylineColor:hsla(0,0%,100%,.15);
	--shadow-ambientColor:rgba(0,0,0,.25);
	--shadow--keyline:0 0 0 1px var(--shadow-keylineColor);
	--shadow--small:0 2px 5px 0 var(--shadow-ambientColor),0 1px 1px 0 var(--shadow-ambientColor),0 0 0 1px var(--shadow-keylineColor);
	--shadow--medium:0 7px 14px 0 var(--shadow-ambientColor),0 3px 6px 0 var(--shadow-ambientColor);
	--shadow--large-gentle:0 15px 35px 0 var(--shadow-ambientColor);
	--shadow--large:0 15px 35px 0 var(--shadow-ambientColor),0 5px 15px 0 var(--shadow-ambientColor);
	
	::-moz-selection {
		background: #f7fafc;
		background: var(--gray800);
		color: #1a1f36;
		color: var(--white)
	}

	::selection {
		background: #f7fafc;
		background: var(--gray800);
		color: #1a1f36;
		color: var(--white)
	}
`

const Wrapper = styled.div`
	${normalize}
	${globalVars}
	${props => props.darkMode && darkModeVars}

	${globals}	
`

const StyleWrapper = ({ children }) => {
	const darkMode = useSelector(darkModeSelector)

	return (
		<Wrapper darkMode={darkMode}>
			{children}
		</Wrapper>
	)
}

export default StyleWrapper