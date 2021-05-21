@echo off
set filePath=%1
if exist %filePath% (
    echo."yes"
) else (
    echo."no"
)