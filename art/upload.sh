#!/bin/bash
quasar build

cp -rf ./dist/spa/* ../docs
