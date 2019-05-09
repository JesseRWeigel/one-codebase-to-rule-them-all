// Import React
import React from 'react'
// Import Spectacle Core tags
import { Deck, Heading, List, ListItem, Slide, Text } from 'spectacle'
// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            One Codebase to Rule Them All - Using React Native Everywhere
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            @JesseRWeigel
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Hi, I'm Jesse
          </Heading>
          <List>
            <ListItem>
              Senior Software Engineeer at Dick's Sporting Goods
            </ListItem>
            <ListItem>Volunteer Live Coder for freeCodeCamp</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Thank You!
          </Heading>
          <List>
            <ListItem>Bekah</ListItem>
            <ListItem>
              All NDC Minnesota Organizers, Volunteers and Attendees
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What is React Native
          </Heading>
          <List>
            <ListItem>
              A framework for building native apps using React
            </ListItem>
            <ListItem>
              React Native lets you build mobile apps using only JavaScript. It
              uses the same design as React, letting you compose a rich mobile
              UI using declarative components.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            React Native vs React
          </Heading>
          <List>
            <ListItem>
              Biggest difference from a dev perspective is the primitives
            </ListItem>
            <ListItem>React uses DOM primitives (div, span, p, …)</ListItem>
            <ListItem>
              React Native uses its own set of primitives (View, Text, …)
            </ListItem>

            <ListItem>
              The JSX portion of your code is not interchangeable, but the
              lifecycle methods could be
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What if we could convert React Native primitives to DOM Primitives?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Advantage of one codebase
          </Heading>
          <List>
            <ListItem>Less code to build and maintain</ListItem>
            <ListItem>Can develop more, faster</ListItem>
            <ListItem>Potentially fewer languages to learn</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Options for Using React Native to Build Web Apps
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            React Native Web
          </Heading>
          <List>
            <ListItem>
              Allows you to use a large subset of React Native primitives on the
              web
            </ListItem>
            <ListItem>Has the largest community</ListItem>
            <ListItem>Official Expo support is under development</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            React XP
          </Heading>
          <List>
            <ListItem>Developed by the Skype team at Microsoft</ListItem>
            <ListItem>A layer on top of React Native</ListItem>
            <ListItem>Built with TypeScript</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            React Native DOM
          </Heading>
          <List>
            <ListItem>
              This project is still highly experimental and many aspects of it
              are subject to breaking changes, continue at your own risk. - RND
              Github
            </ListItem>
            <ListItem>Doesn’t appear to be actively developed</ListItem>
            <ListItem>
              Includes some great features like multi-threading, same bundler
              for mobile and web (Metro), layout parity (Yoga and WASM)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            You can build desktop apps too!
          </Heading>
          <List>
            <ListItem>Electron</ListItem>
            <ListItem>
              React XP is working on rendering to Windows App (UWP)
            </ListItem>
            <ListItem>
              React Native for Windows allows you to build Windows apps (PCs,
              tablets, 2-in-1s, Xbox, Mixed reality devices etc.)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Who is using React Native to build Web/Desktop Apps?
          </Heading>
          <List>
            <ListItem>Twitter (RNW)</ListItem>
            <ListItem>Uber (RNW)</ListItem>
            <ListItem>Major League Soccer (RNW)</ListItem>
            <ListItem>DataCamp (RNW)</ListItem>
            <ListItem>FlipKart (RNW) </ListItem>
            <ListItem>Skype (RXP) </ListItem>
            <ListItem>Monterail (RXP)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            See it in action!
          </Heading>
          <List>
            <ListItem>
              I am creating an app using React Native Web live on the
              freeCodeCamp YouTube channel
            </ListItem>
            <ListItem>github.com/JesseRWeigel/battlemath</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Ask Me Anything!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>
            Watch me on the freeCodeCamp YouTube channel and on my channel
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>
            Twitter: @JesseRWeigel
          </Text>
        </Slide>
      </Deck>
    )
  }
}
