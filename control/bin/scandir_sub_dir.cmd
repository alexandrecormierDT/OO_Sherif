@echo off
set rootPath=%1
for /f "tokens=*" %%A IN ('dir /B /a:d /o:n "%rootPath%"') DO (
   echo.%rootPath%/%%A/
)