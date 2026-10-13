#!/usr/bin/env bash
# Regenerates the web-sized images in public/images from the originals in source/photos.
# Requires ffmpeg with libwebp. Usage: bash scripts/images.sh
set -euo pipefail
RAW=source/photos
OUT=public/images
Q=82
enc() { # enc <src> <dst> <ffmpeg -vf filter>
  ffmpeg -v error -y -i "$RAW/$1" -vf "$3" -c:v libwebp -quality $Q -update 1 "$OUT/$2"
}
# Wide heroes (16:9, 2000px)
enc golf-course-lake-tee-01.jpg      hero-golf.webp       "crop=iw:iw*9/16,scale=2000:-1"
enc golf-entrance-sign-palms-01.jpg  exterior.webp        "crop=iw:iw*9/16,scale=2000:-1"
# Open Graph images (JPEG: not every social crawler reads WebP)
og() { ffmpeg -v error -y -i "$RAW/$1" -vf "$3" -q:v 4 -update 1 "$OUT/$2"; }
og golf-course-lake-panorama-01.jpg   og-default.jpg    "crop=iw:iw*630/1200,scale=1200:630"
og golf-green-flag-mountains-01.jpg   og-golf.jpg       "crop=iw:iw*630/1200:0:700,scale=1200:630"
og golf-entrance-sign-palms-01.jpg    og-contact.jpg    "crop=iw:iw*630/1200,scale=1200:630"
og terrace-tables-colonnade-01.jpg    og-restaurant.jpg "crop=iw:iw*630/1200:0:560"
og live-music-gazebo-day-01.jpg       og-events.jpg     "crop=iw:iw*630/1200:0:420"
# Section images
enc golf-green-flag-mountains-01.jpg course.webp          "crop=iw:iw*10/16:0:520,scale=1600:-1"
enc golf-course-lake-panorama-01.jpg lake.webp            "crop=iw:iw*9/16,scale=2000:-1"
Q=74 enc golf-green-flag-mountains-01.jpg golf-portrait.webp "scale=760:-2"
# Casa Club's own reel covers (portrait 720x1280) – kept at native size
for pair in \
  "terrace-tables-colonnade-01.jpg:terrace.webp" \
  "terrace-guests-colonnade-01.jpg:restaurant.webp" \
  "restaurant-interior-crowd-01.jpg:bar.webp" \
  "live-music-terrace-singer-01.jpg:events.webp" \
  "live-music-gazebo-day-01.jpg:hero-events.webp"; do
  enc "${pair%%:*}" "${pair##*:}" "scale=iw:ih"
done
# Smaller copies of the big photos for srcset (phones and tablets get these)
for n in hero-golf course exterior; do
  for w in 800 1200; do ffmpeg -v error -y -i "$OUT/$n.webp" -vf "scale=$w:-2" -c:v libwebp -quality 80 "$OUT/$n-$w.webp"; done
done
# Gallery (max 1400px on the long side)
mkdir -p "$OUT/gallery"
for f in terrace-tables-colonnade-01 terrace-arcade-tables-01 terrace-guests-colonnade-01 terrace-sunset-palm-01 terrace-dusk-view-01 \
         restaurant-diners-01 restaurant-interior-crowd-01 live-music-gazebo-day-01 live-music-gazebo-night-01 live-music-terrace-crowd-01 \
         live-music-terrace-singer-01 event-dance-floor-indoor-01 event-dancing-night-01 golf-course-lake-panorama-01 golf-course-lake-tee-01 \
         golf-entrance-sign-course-01 golf-green-flag-mountains-01 golf-green-palms-mountains-01 golf-course-golfers-buggy-01 golf-buggies-bags-01 \
         golf-club-closeup-01 driving-range-bays-01 clubhouse-exterior-buggies-01 golf-course-buggy-camposol-view-01; do
  enc "$f.jpg" "gallery/$f.webp" "scale='min(1400,iw)':-2"
done
# Gallery grid thumbnails (600px wide); the lightbox opens the full-size file
mkdir -p "$OUT/gallery/thumb"
for f in "$OUT"/gallery/*.webp; do
  ffmpeg -v error -y -i "$f" -vf "scale='min(600,iw)':-2" -c:v libwebp -quality 78 "$OUT/gallery/thumb/$(basename "$f")"
done
echo "done"; du -sh "$OUT" "$OUT/gallery"
