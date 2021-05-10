@echo off
set rootPath=%1
set extension=%2
for /f %%A IN ('dir /B "%rootPath%"') DO (
    if exist "%rootPath%\*.%extension%" (
        for /f %%B IN ('dir /B "%rootPath%\*.%extension%"') DO (
            echo.%rootPath%/%%B
        )
    )
)


