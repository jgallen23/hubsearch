run:
	@git fetch origin master
	@git checkout origin/master index.html
	@git checkout origin/master _dist
	@git checkout origin/master ui/images
