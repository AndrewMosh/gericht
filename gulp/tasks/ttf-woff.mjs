"use strict";

import fs from "fs";
import path from "path";

import { paths } from "../config/config.mjs";
import ttf2woff from "ttf2woff";
import ttf2woff2 from "ttf2woff2";

const ttfToWoff = async () => {
    fs.readdir(paths.ttf2Woff.src, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        files.forEach((file) => {
            if (path.extname(file).toLowerCase() === ".ttf") {
                const ttfBuffer = fs.readFileSync(path.join(paths.ttf2Woff.src, file));

                // Convert to .woff
                const woff = ttf2woff(ttfBuffer);
                fs.writeFileSync(path.join(paths.ttf2Woff.dist, file.replace(".ttf", ".woff")), Buffer.from(woff));

                // Convert to .woff2
                const woff2 = ttf2woff2(ttfBuffer);
                fs.writeFileSync(path.join(paths.ttf2Woff.dist, file.replace(".ttf", ".woff2")), woff2);
            }
        });
    });
};

export default ttfToWoff;
