# Requires ImageMagick (magick) to be in PATH
Get-ChildItem -Filter *.webp | ForEach-Object {
    $inputFile = $_.FullName
    $baseName = $_.BaseName
    $outputFile = "$($_.DirectoryName)\$baseName-thumb.webp"

    magick "$inputFile" -resize 500x500^> -quality 25 -define webp:method=6 -define webp:low-memory=true "$outputFile"
}

pause