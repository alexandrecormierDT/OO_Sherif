@echo off
set rootPath=%1
set extension=%2
@echo off
for /f "tokens=*" %%f in (' DIR /B /a:-d /o:n %rootPath%\*.%extension%') do (
     echo.%%f
)