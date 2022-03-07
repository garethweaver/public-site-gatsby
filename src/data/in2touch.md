---
url: /folio/in2touch
order: 170
thumb:
  - type: jpg
    name: in2touch.jpg
  - type: webp
    name: in2touch.webp
title: In2Touch App
external: false
type: React Application
year: 2019
tools: React, Redux, Firebase, Node, Sass
repository: https://github.com/garethweaver/in2touch-react
live_site: https://garethweaver.github.io/in2touch-react/
images:
- - resolution: desktop
    type: jpg
    name: in2touch-1-lg.jpg
    height: 1067
    width: 1200
  - resolution: desktop
    type: webp
    name: in2touch-1-lg.webp
    height: 1067
    width: 1200
  - resolution: mobile
    type: jpg
    name: in2touch-1-sm.jpg
    height: 1067
    width: 600
  - resolution: mobile
    type: webp
    name: in2touch-1-sm.webp
    height: 1067
    width: 600
- - resolution: desktop
    type: jpg
    name: in2touch-2-lg.jpg
    height: 1067
    width: 1200
  - resolution: desktop
    type: webp
    name: in2touch-2-lg.webp
    height: 1067
    width: 1200
  - resolution: mobile
    type: jpg
    name: in2touch-2-sm.jpg
    height: 1067
    width: 600
  - resolution: mobile
    type: webp
    name: in2touch-2-sm.webp
    height: 1067
    width: 600
- - resolution: desktop
    type: jpg
    name: in2touch-3-lg.jpg
    height: 1067
    width: 1200
  - resolution: desktop
    type: webp
    name: in2touch-3-lg.webp
    height: 1067
    width: 1200
  - resolution: mobile
    type: jpg
    name: in2touch-3-sm.jpg
    height: 1067
    width: 600
  - resolution: mobile
    type: webp
    name: in2touch-3-sm.webp
    height: 1067
    width: 600
next_page: /maison-hanko
meta:
  title: Gareth Weaver - In2Touch App
  description: A personal project to show team and league results for the
    In2Touch sports league in London
---
A personal project to show team and league results for the In2Touch rugby
leagues in London. A node script deployed to Heroku scrapes data from the rather
dated In2Touch website and saves it to a realtime Firebase database.

The frontend is built in React using a Redux store. Data is cached locally to
reduce server load and allow offline app usage. Currently the app isn't deployed
to an app store but can be added to homescreen.
