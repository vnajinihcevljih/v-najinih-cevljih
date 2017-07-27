set -o errexit
mkdir resized
for i in $(ls {*.jpg,*.JPG});
do
    convert -resize x900 -quality 60 $i resized/$i;
    echo $i;
done;
