
## find non-web format files #
find * -type f -name "*.ai"
find * -type f -name "*.ai" -delete

du -a * | sort -n -r | head -n 20

find * -type f -printf '%s %p\n' | sort -nr | head -20