@echo off
set rootPath=%1
set format=%2
for /f %%A IN ('dir /B "%rootPath%"') DO (
    if exist "%rootPath%\%%A\*.%format%" (
        for /f %%B IN ('dir /B "%rootPath%\%%A\*.%format%"') DO (
            echo.%rootPath%/%%A/ %%B
        )
    )
)