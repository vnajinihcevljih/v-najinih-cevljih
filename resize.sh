set -o errexit
mkdir resized
for i in *.jpg;
do
	echo $i;
    convert -resize x900 -quality 60 "$i" "resized/$i";
done;
