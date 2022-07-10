# The Tremendous Typing Test
A Typing Test game similar to https://doorloop.com/type and demonstrate effective coding with an emphasis on keeping it simple, proper component breakdown, separation of concerns, dynamic and generic code, and efficient logic.

![Screen Shot 2022-07-10 at 12 20 34 PM](https://user-images.githubusercontent.com/22300258/178159114-ffb5e872-7311-4832-8245-f60c6568013a.png)


## View The app Live
[https://mistersyntax.github.io/asyriala-doorloop/](https://mistersyntax.github.io/asyriala-doorloop/)

## My process

1. Review the requirements, check out some examples, and then sketch out a rough draft of the application. Determine what tools should be used to execute on the requirements
![IMG_20220710_122544178](https://user-images.githubusercontent.com/22300258/178159222-dac87d7c-54ff-43ea-b03c-4194ce7e92b3.jpg)
2. Translate the sketch into a type, and component/data outline. This outline is in (Outline.md)[./Outline.md]
The purpose of this is to figure out what types we need, what components we need and what data they need.![Screen Shot 2022-07-10 at 12 29 16 PM](https://user-images.githubusercontent.com/22300258/178159449-c8554220-9f5e-4c95-a7f7-5eaa3c96831f.png)
3. Create the folder structure for the repo. This will mimic the OUTLINE.md. 
4. Next, create placeholder files and fill each of them with the appropriate template. I am using snippets to generate the component outline,
5. Fill in the components

## Challenges
One of the largest challenges with this project was ensuring there was no locking of the ux as people typed. This required ensuring that we were avoiding any costly renders by utilizing memoization around generating our words.

The other big challenge was the time constraint. Building an extensible application definitely requires a bit more work as you separate concerns and manage data flow through the application. As a result, I needed to skimp on testing, whcih I would generally describe to be a hard requirement in my applications.

## Technology
This project is a typing test built with react, typescript, and MUI.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`


### `yarn build`

Builds the app for production to the `build` folder.

### `yarn delpoy` 

Deploys the app to github pages

## Specifications 
This is a basic specification describing the main behavior. Anything not specified is up to you: UI structure and styling (no need for anything fancy), data to display, UX etc... Keep it simple.

Write a React UI that starts a 60 second game for a typing test. The test should show you words to type as fast as possible.
When starting, random words should line up for typing from the word bank below.
You should track character typing and typos as you see fit.
Pressing space should conclude a word and progress to the next word.
At the end of the game, show statistics such as the correct word count, number of mistakes, speed in Words Per Minute, and anything else you can think of.

["account", "act", "addition", "adjustment", "advertisement", "agreement", "air", "amount", "amusement", "animal", "answer", "apparatus", "approval", "argument", "art", "attack", "attempt", "attention", "attraction", "authority", "back", "balance", "base", "behavior", "belief", "birth", "bit", "bite", "blood", "blow", "body", "brass", "bread", "breath", "brother", "building", "burn", "burst", "business", "butter", "canvas", "care", "cause", "chalk", "chance", "change", "cloth", "coal", "color", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "crush", "cry", "current", "curve", "damage", "danger", "daughter", "day", "death", "debt", "decision", "degree", "design", "desire", "destruction", "detail", "development", "digestion", "direction", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "doubt", "drink", "driving", "dust", "earth", "edge", "education", "effect", "end", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "fact", "fall", "family", "father", "fear", "feeling", "fiction", "field", "fight", "fire", "flame", "flight", "flower", "fold", "food", "force", "form", "friend", "front", "fruit"]



