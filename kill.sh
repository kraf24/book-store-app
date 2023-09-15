#!/usr/bin/env bash

set -eu -o pipefail

frontend_up() {
  curl -fsS http://localhost:4200/ &> /dev/null
}

run_kill() {
  kill "$(lsof -sTCP:LISTEN -ti tcp:4200)" &> /dev/null || true
}

run_kill

until ! frontend_up; do
  run_kill
  sleep 1
done

