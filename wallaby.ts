module.exports = wallaby => {
  return {
    files: ['src/**/*.ts', '!src/**/*.spec.ts'],
    tests: ['src/**/*.spec.ts'],
    env: {
      type: 'node'
    },
    testFramework: 'jest',
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    }
  }
}
