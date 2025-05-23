# Requires ImageMagick (magick) to be in PATH

# Create the THUMBS folder if it doesn't exist
$thumbsDir = Join-Path -Path $PWD -ChildPath "THUMBS"
if (!(Test-Path $thumbsDir)) {
    New-Item -Path $thumbsDir -ItemType Directory
}

Get-ChildItem -Filter *.webp | ForEach-Object {
    $inputFile = $_.FullName
    $baseName = $_.BaseName
    $outputFile = Join-Path -Path $thumbsDir -ChildPath "$baseName-thumb.webp"

    # Higher quality setting and tuned compression for better visuals
    magick "$inputFile" -resize 500x500^> -quality 85 -define webp:method=6 "$outputFile"
$outputfile
}

pause
