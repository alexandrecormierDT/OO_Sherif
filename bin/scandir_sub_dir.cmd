@echo off
set rootPath=%1
for /f %%A IN ('dir /B "%rootPath%"') DO (
    if exist "%rootPath%\%%A\*" (
            echo.%rootPath%/%%A/
    )
)