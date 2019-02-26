import minify from 'rollup-plugin-babel-minify';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
    input: 'src/recorder.ts',
    output: [{ file: pkg.main, name: 'mp3MediaRecorder', format: 'umd', sourcemap: true, interop: false }],
    plugins: [
        typescript({ useTsconfigDeclarationDir: true }),
        resolve(),
        sourceMaps(),
        buble(),
        minify({ comments: false })
    ]
};
