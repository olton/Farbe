import { context } from "esbuild"
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

let ctxEsm = await context({
    ...defaults,
    outfile: 'dist/farbe.esm.js',
    format: 'esm',
    plugins: [
        progress({
            text: 'Building farbe.esm.js...',
            succeedText: `farbe.esm.js built successfully in %s ms!`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': pkg.version,
        })
    ],
})

let ctsCjs = await context({
    ...defaults,
    outfile: 'dist/farbe.cjs.js',
    format: 'cjs',
    plugins: [
        progress({
            text: 'Building farbe.cjs.js...',
            succeedText: `farbe.cjs.js built successfully`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': pkg.version,
        })
    ],
})

let ctxIife = await context({
    ...defaults,
    entryPoints: ['./src/browser.js'],
    platform: 'browser',
    outfile: 'lib/farbe.js',
    format: 'iife',
    minify: production,
    plugins: [
        progress({
            text: 'Building lib farbe.js...',
            succeedText: `Lib farbe.js built successfully in %s ms!`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': pkg.version,
        })
    ],
})

await Promise.all([
    ctxEsm.watch(),
    ctsCjs.watch(),
    ctxIife.watch(),
])

