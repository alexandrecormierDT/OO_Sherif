@echo off
set rootPath=%1
for /f "tokens=*" %%A IN ('dir /B /o:n /a:-d "%rootPath%"') DO (
     echo.%%A

)