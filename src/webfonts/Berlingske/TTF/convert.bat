@echo off
for %%I in (*.ttf) do (
    "C:\Program Files (x86)\FontForgeBuilds\run_fontforge.exe" -lang=ff -c "Open($1); Generate($2)" "%%I" "%%~nI.woff"
)