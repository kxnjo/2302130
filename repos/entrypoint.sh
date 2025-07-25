#!/bin/sh

REPO_PATH="/home/git/repository.git"

# If the repo doesn't exist, create it
if [ ! -d "$REPO_PATH" ]; then
  echo "[git-server] Creating bare repository at $REPO_PATH..."
  git init --bare "$REPO_PATH"
else
  echo "[git-server] Repo already exists."
fi

# Start the Git HTTP server
exec git-http-server -p 8888 /home/git