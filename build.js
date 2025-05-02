import {build,  context} from 'esbuild'
import progress from "@olton/esbuild-plugin-progress"
import { replace } from "esbuild-plugin-replace";
import pkg from "./package.json" with {type: "json"};
import process from 'node:process'

const production = process.env.MODE === "production"
const version = pkg.version
const banner = `
/*!
 * Farbe v${version}. Color Routines for JavaScript.
 * Build: ${new Date().toLocaleString()}
 * Copyright 2025 by Serhii Pimenov
 * Licensed under MIT
 */
`

const options = {
    entryPoints: ['./src/index.js'],
    outfile: './dist/farbe.js',
    bundle: true,
    minify: production,
    sourcemap: false,
    format: 'esm',
    banner: {
        js: banner
    },
    plugins: [
        progress({
            text: 'Building Farbe...',
            succeedText: `Farbe built successfully in %s ms!`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': version,
        })
    ],
}

if (production) {
    await build(options)
} else {
    const ctx = await context(options)
    await Promise.all([
        ctx.watch(),
    ])
}