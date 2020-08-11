import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const input = 'src/index.ts'

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
  filesize(),
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
  },
]
