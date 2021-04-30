@echo off
set rootPath=%1
for /f %%A IN ('dir /B "%rootPath%"') DO (
    if exist "%rootPath%\%%A\*.*" (
        for /f %%B IN ('dir /B "%rootPath%\%%A\*.*"') DO (
            echo.%rootPath%/%%A/%%B
        )
    )
)