# Get Smart With Me
Digital Flashcards

When I study flashcards, I have four piles: 
1. Cards that I haven't viewed yet 
2. Cards that I nailed 
3. Cards that I got so-so 
4. Cards for which I have no idea or for which I was completely wrong 

After each round, I collect piles 3 ("so-so" cards) and 4 ("totally off" cards) and work through this new stack. I repeat this until all cards make it to pile 2 ("nailed it" pile). 

This app enables users to study flashcards using this method. I've long relied on this method to study flashcards, and it has served me well. 

Technical stack: React, Redux, Express, PassportJS, and MongoDB 

Build plan: 
1. Construct backend and server

  - a. Make a login/registration router (which I call "welcome") 
  
  - b. Configure PassportJS to handle authentication
  
  - b. Make a home page router (which I call "home") 
  
  - c. Make deck router 
  
  - d. Make study session router 
  
2. Construct frontend 
  - a. Create actions, action creators, and reducers
  - b. Connect this to the backend 
  - c. Create presentational components 
  - d. Create container components 
3. Baseline functionality achieved: test, fix, and iterate 
4. Style front-end components 
5. Add functionality 
  Some ideas: stats on indiviudal sessions to track progress, make decks sharable between users, add animations 
