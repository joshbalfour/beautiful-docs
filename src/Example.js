import React from 'react'

import {
	SectionWrapper,
	AttributeTable,
	FeedbackWidget,
	Tip,
	SelectClientLibrary,
	Request,
	Response,
	Table,
	Wrapper,
	LeftColumn, RightColumn, Title, Description, Subsection,
} from './main'

const code = {
	nodejs: `const blah = require('thing')

blah.doThing()
	.then((res) => {
		console.log(res)
	})
	.catch(err => console.error(err))
`
}


const jsonCode = `{
	"id": "ch_1FNjXj2eZvKYlo2CriZfnozo",
	"object": "charge",
	"amount": 100
}`

const possibleErrors = [
	["api_connection_error","Failure to connect to our API."],
	["api_error","API errors cover any other type of problem (e.g., a temporary problem with our servers), and are extremely uncommon."],
	["authentication_error","Failure to properly authenticate yourself in the request."],
	["card_error","Card errors are the most common type of error you should expect to handle. They result when the user enters a card that can't be charged for some reason."],
	["idempotency_error","Idempotency errors occur when an Idempotency-Keyis re-used on a request that does not match the first request's API endpoint and parameters."],
	["invalid_request_error","Invalid request errors arise when your request has invalid parameters."],
	["rate_limit_error","Too many requests hit the API too quickly."],
	["validation_error","Errors triggered by our client-side libraries when failing to validate fields (e.g., when a card number or expiration date is invalid or incomplete)."],
]

const description = (
	<>
		<p>The API is organized around <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer" target="_blank" rel="noopener noreferrer">REST</a>. Our API has predictable resource-oriented URLs, accepts <a href="https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms" target="_blank" rel="noopener noreferrer">form-encoded</a> request bodies, returns <a href="http://www.json.org/" target="_blank" rel="noopener noreferrer">JSON-encoded</a> responses, and uses standard HTTP response codes, authentication, and verbs. </p>
		<p>You can use the API in test mode, which does not affect your live data or interact with the banking networks. The API key you use to <a href="#authentication">authenticate</a> the request determines whether the request is live mode or test mode.</p>
		<p>The API differs for every account as we release new <a href="#versioning">versions</a> and tailor functionality. <span>Log in to see docs customized to your version of the API, with your test key and data.</span></p>
		<p>Subscribe to our <a href="https://groups.google.com">API announce mailing list</a> for updates.</p>
	</>
)

const tip = {
	title: 'Something Important',
	children: <>Here's some cool info with a <a href="https://google.com">link</a></>,
}

const attributes = [
	{
		name: 'thing',
		id: 'thing',
		type: 'hash',
		description: 'This object for errors returned on a request involving a Thing.',
		children: [
			{
				name: 'sub', id: 'sub', type: 'thing', description: 'stuff',
				children: [
					{ name: 'su2', id: 'sub2', type: 'thing2', description: 'stuff2' },
				]
			},
		],
	},
]

const title = 'Welcome to some example documentation'

const nav = [
	{
	  title: null,
	  items: [
		{ key: '#introduction', name: 'Introduction' },
		{ key: '#introduction2', name: 'Authentication' },
		{ key: '#introduction3', name: 'Errors' },
	  ],
	},
	{
	  title: 'Category',
	  items: [
		{ key: '#introduction4', name: 'Sub Item 1' },
		{ key: '#introduction5', name: 'Sub Item 2' },
	  ]
	},
	{
	  title: 'Category 2',
	  items: [
		{ key: '#introduction6', name: 'Sub Item 1' },
		{ key: '#introduction7', name: 'Sub Item 2' },
	  ]
	}
]

const langs = [
	{ key: 'nodejs', language: 'javascript', name: 'Node.js', repo: 'meterapi/meterapi-node', installCmd: 'npm install meterapi' },
	{ key: 'ruby', name: 'Ruby', repo: 'meterapi/meterapi-ruby', installCmd: 'gem install meterapi' },
	{ key: 'python', name: 'Python', repo: 'meterapi/meterapi-python', installCmd: 'pip install meterapi' },
	{ key: 'php', name: 'PHP', repo: 'meterapi/meterapi-php', installCmd: 'composer require meterapi/meterapi-php' },
	{ key: 'java', name: 'Java', repo: 'meterapi/meterapi-java', installCmd: 'compile "com.meterapi:meterapi-java:1.0.0"' },
	{ key: 'go', name: 'Go', repo: 'meterapi/meterapi-go', installCmd: 'go get github.com/meterapi/meterapi-go' },
	{ key: 'dotnet', language: 'c#', name: '.NET', repo: 'meterapi/meterapi-dotnet', installCmd: 'nuget install meterapi-dotnet' },
]

const user = {
	name: 'Example User',
	detail: 'something helpful',
	imageUrl: 'https://pbs.twimg.com/profile_images/1181341349397839881/-_-X88eu_400x400.jpg',
}

const Example = () => (
	<Wrapper nav={nav} langs={langs} logoComponent={<>Example API</>} user={user} onRequestChangeUser={() => {}}>
		<SectionWrapper id="introduction">
			<LeftColumn>
				<Title>{title}</Title>
				<Description>
					{description}
				</Description>
				<AttributeTable attributes={attributes} />
				<FeedbackWidget />
			</LeftColumn>

			<RightColumn>
				<Tip {...tip} />
				<Subsection>
					<Request title="Base URL" code="https://api.company.com" />
					<SelectClientLibrary />
				</Subsection>
				<Subsection>
					<Request title="A Code Example" code={code} withPrompt />
					<Response title="Some cool JSON" code={jsonCode} />
				</Subsection>
				<Subsection>
					<Response title="Something you should know">
						<p>Quisque eget elit lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
						<p>Quisque eget elit lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</Response>
				</Subsection>
				<Table title="Possible Errors" data={possibleErrors} />
			</RightColumn>
		</SectionWrapper>
	</Wrapper>
)

export default Example