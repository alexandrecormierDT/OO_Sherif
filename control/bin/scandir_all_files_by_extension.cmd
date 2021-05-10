@echo off
set rootPath=%1
set extension=%2
@echo off
for %%f in (%rootPath%\*.%extension%) do (
    if "%%~xf"==".%extension%" echo %%f
)