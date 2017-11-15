export default {
  entry: 'src/index.js',
  targets: [
    {
      format: 'cjs',
      dest: 'dist/rollup-plugin-minifyliterals.cjs.js'
    },
    {
      format: 'es',
      dest: 'dist/rollup-plugin-minifyliterals.es.js'
    }
  ]
}
