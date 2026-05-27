# Stops any process that is listening on TCP port 5000 (e.g. a stray dev server).
$listeners = Get-NetTCPConnection -LocalPort 5000 -State Listen -ErrorAction SilentlyContinue
if (-not $listeners) { exit 0 }
$listeners | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
