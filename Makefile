run: bootstrap mash build

bootstrap:
	@./node_modules/.bin/boots \
		-c reset.less,type.less,tables.less,buttons.less,forms.less,navs.less,navbar.less,scaffolding.less,grid.less,layouts.less,wells.less,dropdowns.less \
		-j bootstrap-typeahead.js \
		-o ui/vendor/bootstrap/
mash:
	@./node_modules/.bin/masher masher.yaml

mash-watch:
	@./node_modules/.bin/masher masher.yaml -w

build: 
	@./node_modules/.bin/markx -i views/main.html -d data.yaml > index.html

preview:
	@./node_modules/.bin/markx -i views/main.html -d data.yaml -p


.PHONY: bootstrap run bootstrap mash mash-watch build
