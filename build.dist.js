import { build } from "esbuild"
import progress from "@olton/esbuild-plugin-progress"
import { replace } from "esbuild-plugin-replace"
import pkg from "./package.json" with {type: "json"}

const production = (process.env.MODE === 'production')

const defaults = {
    entryPoints: ['./src/index.js'],
    bundle: true,
    minify: false,
    sourcemap: false,
    platform: 'node',
    plugins: [
        progress(),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': pkg.version,
        })
    ],
}

await build({
    ...defaults,
    outfile: 'dist/farbe.js',
    format: 'esm',
})

await build({
    ...defaults,
    outfile: 'dist/farbe.cjs',
    format: 'cjs',
})



