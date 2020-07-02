#!/bin/bash

CI=false npm run build && \
npm run integration:headless -- --app "npm run serve-static"