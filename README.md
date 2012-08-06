#HubSearch

Github is awesome, but what it's lacking is good search results.  It's very hard to filter out all the crappy, abandoned repos.  HubSearch is a small web app that leverages Github's api to provide a better experience for search.  You can check it out [here](http://projects.jga.me/hubsearch)

##Setup

If you want to run HubSearch locally or help me make it better, just follow these steps: 

- `git clone git://github.com/jgallen23/hubsearch.git`
- `npm install` (you need node.js installed)
- `make preview`
- open your browser to http://localhost:8000

##Building

Just run `make`

##Future

- Better score algorithm (if anybody wants to take a shot, feel free)
- Be able to show/hide forked repos
- Pull in more than 100 results
- Remember language (store in localStorage or cookie)
- Show number of results
