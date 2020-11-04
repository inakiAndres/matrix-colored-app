# matrix-colored-app

React app which consist in a game

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
