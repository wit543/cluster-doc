# File Transfer with `rsync`, `scp`, and `rclone`

Transferring files to and from the cluster can be done in several ways. This page covers three common tools and the most useful flags for each.

## `rsync`

`rsync` efficiently synchronizes files and directories between locations. The basic syntax is:

```bash
rsync [options] SOURCE DESTINATION
```

Commonly used flags:

- `-a` &ndash; archive mode; copies directories recursively and preserves permissions, symlinks, and timestamps.
- `-v` &ndash; verbose output showing which files are transferred.
- `-z` &ndash; compress data during the transfer, useful over slow connections.
- `-h` &ndash; output numbers in a human-readable format.
- `--progress` &ndash; display progress during transfer.
- `--delete` &ndash; delete files in the destination that no longer exist in the source.

Example: synchronize a local directory to a remote cluster home directory.

```bash
rsync -avz mydata/ username@cluster.example.com:/home/username/mydata/
```

## `scp`

`scp` copies files over SSH. It works well for one-off transfers of a few files.

```bash
scp [options] SOURCE DESTINATION
```

Useful flags:

- `-r` &ndash; recursively copy directories.
- `-P` &ndash; specify a remote SSH port if it is not the default (22).
- `-C` &ndash; enable compression.
- `-p` &ndash; preserve modification times and file modes.
- `-v` &ndash; verbose output for debugging connection issues.

Example: copy a local file to the remote `/scratch` directory.

```bash
scp -C myfile.txt username@cluster.example.com:/scratch/username/
```

## `rclone`

`rclone` syncs files to and from many cloud storage providers and remote systems. Install it on your workstation first.

```bash
rclone [command] [options] SOURCE DESTINATION
```

Important flags and commands:

- `config` &ndash; interactively set up or edit a remote configuration.
- `copy` &ndash; copy files from source to destination, skipping identical files.
- `sync` &ndash; make destination identical to source by copying new files and deleting missing ones.
- `-P` or `--progress` &ndash; show progress during transfers.
- `--dry-run` &ndash; perform a trial run with no changes made; use to verify commands.
- `--bwlimit RATE` &ndash; limit bandwidth usage (e.g., `--bwlimit 10M`).

Example: sync a directory from the cluster to Google Drive.

```bash
rclone sync /home/username/data gdrive:cluster-backup -P
```

These tools cover most file transfer needs. `rsync` is ideal for incremental backups, `scp` is quick for small copies, and `rclone` connects to numerous cloud services.
