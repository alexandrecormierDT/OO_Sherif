@echo off
set rootPath=%1
for /f %%A IN ('dir /B "%rootPath%"') DO (
    if exist "%rootPath%\*.*" (
        for /f %%B IN ('dir /B "%rootPath%\*.*"') DO (
            echo.%rootPath%/%%B
        )
    )
)