This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

In the project directory, you can run:

### `npm install` then `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Explanations

Considering there was no directives regarding the UI, I made something very simple using Material UI components.

I added the token in the file in `src/utils/token.tsx`. You will have to change it before it expires (09/18 4pm)

I also used `Context` from react instead of Redux, because I am much more familiar with it. I used it to directly update the list of bulletins pulled from the api.
