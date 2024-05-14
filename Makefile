@PHONY=pdf
pdf:
	curl \
		--request POST http://localhost:3000/forms/chromium/convert/url \
		--form url=http://smallpluginbaby:8080/ \
		--form marginTop=0 \
		--form marginBottom=0 \
		--form marginLeft=0 \
		--form marginRight=0 \
		--form preferCssPageSize=true \
		-o cv.pdf

@PHONY=gotenberg
gotenberg:
	docker run --rm -p 3000:3000 gotenberg/gotenberg:8 gotenberg --api-port=3000