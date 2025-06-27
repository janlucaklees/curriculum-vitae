@PHONY=start
start:
		docker compose up -d
		bun start

@PHONY=pdf
pdf:
	curl \
		--request POST http://localhost:3000/forms/chromium/convert/url \
		--form url=http://localhost:8080/ \
		--form marginTop=0 \
		--form marginBottom=0 \
		--form marginLeft=0 \
		--form marginRight=0 \
		--form preferCssPageSize=true \
		-o cv.pdf

stop:
		docker compose stop
