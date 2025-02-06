
###get largest files & sort by size
du -hs -m * | sort -hs

### find largest 20 files
find * -type f -printf '%s %p\n' | sort -nr | head -20


find * -type f -name "*.ai"
find * -type f -name "*.psd"
find * -type f -name "*.mov"
find * -type f -name "*.ai"