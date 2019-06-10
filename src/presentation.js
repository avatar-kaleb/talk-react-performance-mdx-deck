// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// My Components
import Description from './components/Description';
import LiveEdit from './components/LiveEdit';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Performance
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" bold size={3}>
            Kaleb McKelvey
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            PDF Performance Win
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="center center">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Agenda
          </Heading>
          <List textColor="primary">
            <ListItem>Definitions</ListItem>
            <ListItem>Is Performance Important?</ListItem>
            <ListItem>Do You Know React?</ListItem>
            <ListItem>Demo & Challenges</ListItem>
            <ListItem>Key Points</ListItem>
            <ListItem>Wrap up</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Definitions
          </Heading>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          align="flex-start center"
          maxWith={1200}
        >
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            React Component Definition
          </Heading>
          <BlockQuote>
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1rem' }}>
                "Components let you split the UI into independent, reusable pieces, and think about
                each piece in isolation."
              </Text>
            </Quote>
            <hr style={{ color: 'white', margin: '3rem 0' }} />
            <Quote>
              <Text margin="3rem 0 0 0" textColor="primary" style={{ fontSize: '1rem' }}>
                "Conceptually, components are like JavaScript functions. They accept arbitrary
                inputs (called “props”) and return React elements describing what should appear on
                the screen."
              </Text>
            </Quote>
            <Cite>reactjs.org</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          align="flex-start center"
          maxWith={1200}
        >
          <BlockQuote>
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1.5rem' }}>
                "You don't set out to build a wall. You don't say 'I'm going to build the biggest,
                baddest, greatest wall that's ever been built.
              </Text>
              <Text margin="4rem 0 0" textColor="primary" style={{ fontSize: '1.5rem' }}>
                You don't start there.
              </Text>
              <Text margin="4rem 0 0" textColor="primary" style={{ fontSize: '1.5rem' }}>
                You say, 'I'm going to lay this brick as perfectly as a brick can be laid. You do
                that every single day. And soon you have a wall."
              </Text>
            </Quote>
            <Cite>Will Smith</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          align="flex-start center"
        >
          <BlockQuote>
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1.5rem' }}>
                "You don't set out to build one perfect React web app all at once.
              </Text>
              <Text margin="4rem 0 0" textColor="primary" style={{ fontSize: '1.5rem' }}>
                You don't start there.
              </Text>
              <Text margin="4rem 0 0" textColor="primary" style={{ fontSize: '1.5rem' }}>
                You say, 'I'm going to develop this React component as perfectly as a component can
                be developed. You do that for every single component. And soon you have a perfect
                web app."
              </Text>
            </Quote>
            <Cite>Kaleb McKelvey</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="center center">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            The Perfect Component
          </Heading>
          <List textColor="primary">
            <ListItem>Secure</ListItem>
            <ListItem>Readable & Understandable Code</ListItem>
            <ListItem>Performant & Contained</ListItem>
            <ListItem>Utilizes React Lifecycle Correctly</ListItem>
            <ListItem>Follows React Best Bractices</ListItem>
            <ListItem>Accessibile</ListItem>
            <ListItem>Renders Efficiently</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Is Performance Important?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            Performance & Mula
          </Heading>
          <BlockQuote>
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1rem' }}>
                "Pinterest increased search engine traffic and sign-ups by 15% when they reduced
                perceived wait times by 40%."
              </Text>
            </Quote>
            <hr style={{ color: 'white', margin: '1rem 0' }} />
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1rem' }}>
                "The BBC found they lost an additional 10% of users for every additional second
                their site took to load.""
              </Text>
            </Quote>
            <hr style={{ color: 'white', margin: '1rem 0' }} />
            <Quote>
              <Text textColor="primary" style={{ fontSize: '1rem' }}>
                "DoubleClick by Google found 53% of mobile site visits were abandoned if a page took
                longer than 3 seconds to load."
              </Text>
            </Quote>
            <Cite>developers.google.com</Cite>
          </BlockQuote>
          <br />
          <br />
          <Text textColor="primary" style={{ fontSize: '2rem' }}>
            Performance -> experience -> mula
          </Text>
          <Text textColor="tertiary" style={{ fontSize: '1rem' }}>
            <a style={{ color: 'lightblue' }} href="https://www.thinkwithgoogle.com/">
              Think With Google Tool
            </a>
          </Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Do You Know React?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Render() what?
          </Heading>
          <CodePane
            lang="jsx"
            source={`ReactDOM.render(<App />, document.getElementById("root"));`}
            margin="20px auto"
            overflow="overflow"
          />
          <Text textColor="primary" style={{ fontSize: '2rem' }}>
            render() === create tree of elements @ SPT
          </Text>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          align={'flex-start center'}
        >
          <Heading size={6} textColor="tertiary" caps>
            React's Reconcilliation
          </Heading>
          <List>
            <ListItem style={{ fontSize: '1rem', margin: '1.5rem' }}>
              Two elements of diff types produce diff trees
            </ListItem>
            <ListItem style={{ fontSize: '1rem', margin: '1.5rem' }}>
              Keys let us give hints across renders
            </ListItem>
            <ListItem style={{ fontSize: '1rem', margin: '1.5rem' }}>
              React compares 2 trees to update dom
            </ListItem>
          </List>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          align={'flex-start center'}
        >
          <Heading size={6} textColor="tertiary" caps>
            Performant Components
          </Heading>
          <Text textColor="tertiary" style={{ fontSize: '1.5rem' }}>
            Avoid Reconcilliation & Reduce Wasted Renders
          </Text>
          <List>
            <ListItem style={{ fontSize: '1.5rem', margin: '1rem' }}>
              Utilize PureComponent and React.memo
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem', margin: '1rem' }}>
              Cautiously use shouldComponentUpdate / areEqual
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem', margin: '1rem' }}>
              Remove Event Listeners on Unmount
            </ListItem>
            <ListItem style={{ fontSize: '1.5rem', margin: '1rem' }}>useMemo hook</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Demos
          </Heading>
        </Slide>

        {/* Prim string demos */}
        <Slide transition={['slide']} bgColor="primary" align="flex-start flex-start">
          <section>
            <Description>React Memo Str</Description>
          </section>
          <LiveEdit noInline code={funcComponentWithSt} />
          <br />
          <section>
            <Description>Pure Component Str</Description>
          </section>
          <LiveEdit noInline code={classPureComponentWithChangeExample} />

          <Notes>
            <p> 1. Show title renders with each click even though color stays the same</p>
            <p> 2. Note that the render is called, dom isnt updated</p>
            <p> 3. Add React Memo and show render isn't called</p>
          </Notes>
        </Slide>

        {/* Object without are equal demos */}
        <Slide transition={['slide']} bgColor="primary" align="flex-start flex-start">
          <section>
            <Description>React Memo Obj w/o areEqual</Description>
          </section>
          <LiveEdit noInline code={funcCompWithObject} />
          <section>
            <Description>Pure Component with Object</Description>
          </section>
          <LiveEdit noInline code={pureComponentObjectExample} />
          <Notes>
            <p>1. Explain the shallow comparison</p>
            <p>2. Show title continues to render</p>
          </Notes>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" align="flex-start flex-start">
          <section>
            <Description>React Memo Obj with areEqual</Description>
          </section>
          <LiveEdit noInline code={funcCompWithObjectAreEqualr} />
          <section>
            <Description>Should Component Update Example</Description>
          </section>
          <LiveEdit noInline code={shouldComponentUpdateSimpleExample} />
          <Notes>
            <p>1. Show the are equal function</p>
            <p>2. Show it doesnt render</p>
          </Notes>
        </Slide>

        {/* Complex example */}
        <Slide transition={['slide']} bgColor="primary" align="flex-start center">
          <section>
            <Description>A Little More Complexity with children</Description>
          </section>
          <LiveEdit noInline code={complexExample} />
          <Notes>
            <p>1. areEqual prevents the subtitle from rendering since color is the same</p>
            <p>2. without are equal, child still re-renders</p>
            <p>3. without are equal, both re-render even though color is the same (objects)</p>
            <p>3. Add memo to subtitle to stop it from rendering </p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            Key Points
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="flex-start center">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            Things to Remember
          </Heading>
          <List textColor="primary" style={{ minWidth: '1400px' }}>
            <ListItem>Memo & PureComponent help</ListItem>
            <ListItem>SCU & areEqual are optimizations</ListItem>
            <ListItem>Be careful with children components</ListItem>
            <ListItem>Make it work than optimize performance</ListItem>
            <ListItem>React & JS Engines help you - a lot!</ListItem>
            <ListItem>useMemo hook for easy memoization</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Wrapppppping it up
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="center center">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            In Conclusion
          </Heading>
          <List textColor="primary">
            <ListItem>Performance es muy importante</ListItem>
            <ListItem>Perfect laid bricks = perfect walls</ListItem>
            <ListItem>Utilize & understand React</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Thank you - questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

const funcComponentWithSt = `
  // Renders even though title never changes
  // Add React Memo Here
  const Title = ({color}) => {
    console.log('title rendered')
    return (
    <h3 style={{ color: color }}>
      Hello World!
    </h3>
)}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
        {/* Passes string primitives */}
        <Title color={this.state.color.primary} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const funcCompWithObject = `
  {/* Will this render on change? */}
  const Title = React.memo(({color}) => {
    console.log('title rendered')
    return (
    <h3 style={{ color: color.primary }}>
      Hello World!
    </h3>
)})

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
        {/* Passes the state object, not primitive */}
        <Title color={this.state.color} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const funcCompWithObjectAreEqualr = `
  function areEqual(prevProps, nextProps) {
    // compare color to see if it actually changed in the object
    // return true if they are the same...prevents the render
    console.log('are colors equal?',
      prevProps.color.primary === nextProps.color.primary)
    return prevProps.color.primary === nextProps.color.primary
  }

  {/* Passes areEqual to compare object */}
  const Title = React.memo(({color}) => {
    console.log('title rendered')
    return (
    <h3 style={{ color: color.primary }}>
      Hello World!
    </h3>
)}, areEqual)

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
        {/* Passes the state object */}
        <Title color={this.state.color} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const classPureComponentWithChangeExample = `
  // Will this re-render?
  class Title extends React.Component {
    render() {
      console.log('title rendered')

      return (
        <h3 style={{ color: this.props.color}}>
        Hello World!
        </h3>
      )
    }
  }

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
      {/* Passing in primivite string val */}
        <Title color={this.state.color.primary} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const pureComponentObjectExample = `
  {/* Still renders because of shallow object comparison */}
  class Title extends React.PureComponent {
    render() {
      console.log('title rendered')
      return (
        <h3 style={{ color: this.props.color.primary }}>
        Hello World!
        </h3>
      )
    }
  }

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
        {/* Passes the state object */}
        <Title color={this.state.color} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const shouldComponentUpdateSimpleExample = `
class Title extends React.Component {
  shouldComponentUpdate(nextProps) {
      {/* Uses shouldComponentUpdate to compare object*/}
      // we want to return false for non render, true for render
      console.log('are colors equal?', this.props.color.primary === nextProps.color.primary )
      return !(this.props.color.primary === nextProps.color.primary)
    }
    render() {
      console.log('title rendered')
      return (
        <h3 style={{ color: this.props.color.primary }}>
        Hello World!
        </h3>
      )
    }
  }

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    return (
      <center>
        {/* Passes the state object */}
        <Title color={this.state.color} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: 'green'},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();

const complexExample = `
  function areEqual(prevProps, nextProps) {
    // compare color to see if it actually changed in the object
    // return true if they are the same...prevents the render
    console.log('are props equal?', prevProps.color.primary === nextProps.color.primary)
    return prevProps.color.primary === nextProps.color.primary
  }

  {/* Still renders because of shallow object comparison */}
  const Title = React.memo(({color}) => {
    console.log('title rendered')
    const subtitleColor = color.primary === 'red' ? 'green' : 'red'
    return (
    <>
      <h3 style={{ color: color.primary }}>
        Hello World!
      </h3>
      <SubTitle color={subtitleColor} />
    </>

)}, areEqual)

  const SubTitle = ({color}) => {
    console.log('subtitle rendered', color)
    return (
    <h3 style={{ color: color }}>
      Subtitle
    </h3>
)}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, color: { primary: 'red' }}
  }

  render() {
    // const titleColor = this.state.color.primary === 'red' ? 'green' : 'red'
    const titleColor = 'red';

    return (
      <center>
        {/* Passes the state object */}
        <Title color={this.state.color} />
          {/* Prove I'm Clicking */}
          {this.state.count}
          <br />

        {/* Set new color state that's passed to title */}
        <button onClick={() =>
          this.setState(
            {color: {primary: titleColor},
            count: this.state.count+1}
          )}>
          Update
        </button>
      </center>
    )
  }
}
render(<Counter />)
`.trim();
