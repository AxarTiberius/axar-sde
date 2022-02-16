all: download

download:
	mkdir -p data
	wget -O data/eve.db.bz2 https://www.fuzzwork.co.uk/dump/latest/eve.db.bz2
	bunzip2 -f -v data/eve.db.bz2

clean:
	rm -Rf data/*
