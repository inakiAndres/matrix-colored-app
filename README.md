# matrix-colored-app

React app which consist in a minigame

The game consists in a matrix of squares and you have to tap the square which have the different color. If you tap the correct you will level up, and the matrix will be growing by levels.<br>
The level 20 is the last level, I select this one because the difference of the color, and the size of the matrix and squares is enough.

Explained this let's play => https://inakiandres.github.io/matrix-colored-app/

## Color behaviour

In this exercise I'm using HSL color which is composed by 3 parameters:

- Hue:

  The Hue is the same for all cards, this is only a random between 0 and 360 (all the values that can be HUE).

  And here the code

  ```jsx
  const [color, setColor] = useState();
  setColor(Math.floor(Math.random() * 360));
  ```

- Saturation & Lightness:

  - Normal cards:

    The value for the normal cards in Saturation & Lightness is in both `principalColorSatAndLum`

  - Different card:

    The value for the different card is random. Here I have the random limited with the `maxVariant`.

    `maxVariant`:

        const maxVariant = 20 - level / 2;

    ### But how `maxVariant` is used in the random?

    maxVariant is all the difference that can be from the `principalColorSatAndLum` and the new Saturation & Lightness, then with the intention of always this two valors will be different, I'm doing a new random (`diffVariant`) to divide in two the valor of `maxVariant`.
    For Saturation, I will use one part of `maxVariant`. In this case => `maxVariant`-`diffVariant`.
    For Lightness, I will use the other part of `maxVariant`. In this case => `diffVariant`.

    ```jsx
    const diffVariant = Math.floor(Math.random() * maxVariant);
    setSaturation(principalColorSatAndLum - (maxVariant - diffVariant));
    setLightness(principalColorSatAndLum - diffVariant);
    ```

    ### What have we achieved with this?

    Now we have the same quantity difference of difficult in the levels but when you will replay the game, this difficult will be split different all games.

    ### What about the background color?

    Is easy, the background color is the Complementary color to the main one.

* Here is the all code together:

  The unique difference is that here I have the code in a arrow function that will be called from the useEffect when we level up

  ```jsx
  const principalColorSatAndLum = 50;
  const [color, setColor] = useState();
  const [saturation, setSaturation] = useState(30);
  const [lightness, setLightness] = useState(30);
  const randomColors = () => {
    const maxVariant = 20 - level / 2;
    const diffVariant = Math.floor(Math.random() * maxVariant);
    setColor(Math.floor(Math.random() * 360));
    setSaturation(principalColorSatAndLum - (maxVariant - diffVariant));
    setLightness(principalColorSatAndLum - diffVariant);
  };
  useEffect(() => {
    randomColors();
  }, [level]);
  ```

## How to use the project

Download the repo, open the console in the root folder, and run `npm i`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

If you have permission in the repo, you can run this command and the deploy will be automatically in the branch gh-pages.
