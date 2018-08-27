# Morphea – absurdic small css in js library

## Main idea

Create tiny framework-agnostic tool with semantic API and bindings for all famous interface
solutions.

## Usage

You can generate styles object with `css` function.

```js
import { css } from 'morphea'

const styles = css`
  display: block;
  width: 100px;
`
```

You can also pass one `css` to other `css` if you want to make dynamic styles. For example:

```js
import { css } from 'morphea'

const width = css`
  width: ${200 / 2}px;
`
const styles = css`
  display: block;
  ${width};
`
```

## Roadmap

[ ] – css-like generation and appending ready styles to dom

[ ] - Save order of css definition in template literals (overwrite css by other css in template
literals)
