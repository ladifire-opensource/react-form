.PHONY: clean test lint build

run:
	NODE_ENV=storybook start-storybook -s ./public -p 4005 --ci -c ".storybook"

build:
	parcel build packages/*/ --no-cache
