import { css, createStylesFromString } from '../index'

it('createStylesFromString – creates styles object from string', () => {
  expect(createStylesFromString('display:block;width:100px;')).toMatchSnapshot()
})

describe('css', () => {
  it('returns empty object', () => {
    expect(css``).toMatchSnapshot()
  })

  it('creates styles object', () => {
    expect(css`
      display: block;
      width: 100px;
      color: #fff;
      background: rgba(255, 255, 255, 0);
    `).toMatchSnapshot()
  })

  it('creates styles with variables', () => {
    expect(css`
      display: ${'block'};
      width: ${'100px'};
      color: ${'#fff'};
      background: ${'rgba(255,255,255,0)'};
    `).toMatchSnapshot()
  })

  it('merge other css in template literals', () => {
    expect(css`
      display: block;
      width: ${100}px;
      height: 100px;
      ${css`
        color: #f00;
      `};
    `).toMatchSnapshot()
  })
})
