@echo off
set rootPath=%1
set format=%2
for /f %%A IN ('dir /B "%rootPath%"') DO (
    echo.%rootPath%\*.%format%

)