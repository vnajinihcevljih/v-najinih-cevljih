set -o errexit
mkdir $1/resized
for i in $1/*.jpg;
do
	echo $i;
    convert -resize x900 -quality 60 "$i" "$1/resized/$(basename $i)";
done;
