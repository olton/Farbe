import { build } from "esbuild"
import progress from "@olton/esbuild-plugin-progress"
import { replace } from "esbuild-plugin-replace"
import pkg from "./package.json" with {type: "json"}

const production = (process.env.MODE === 'production')

const defaults = {
    entryPoints: ['./src/browser.js'],
    bundle: true,
    platform: 'browser',
    format: 'iife',
    minify: false,
    sourcemap: false,
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
    outfile: 'lib/farbe.js',
})

await build({
    ...defaults,
    outfile: 'lib/farbe.min.js',
    minify: true,
    sourcemap: !production,
})


