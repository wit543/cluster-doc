# User Registration and SSH Key Setup

This page describes how administrators register a new user and install the user's SSH key on the cluster.

## Determine the Username

1. Start with the user's first name followed by the first letter of the last name. For example, `Jane Doe` becomes `janed`.
2. If a username already exists, append a number until you find an unused name: `janed2`, `janed3`, and so on.
3. For interns add `_inter` to the end, e.g. `janed_inter`. For guests use `_guest`.

## Create the Account

Run the following commands as root:

```bash
sudo useradd -m <username>
sudo passwd <username>
```

This creates the home directory and prompts for an initial password.

## Generate an SSH Key

Ask the new user to create an SSH key pair on their workstation:

```bash
ssh-keygen -t ed25519 -C "<email>"
```

The user should send the resulting `id_ed25519.pub` file to the administrator.

## Install the Public Key

Switch to the new account and set up the `.ssh` folder:

```bash
su - <username>
mkdir -m 700 ~/.ssh
cat /path/to/id_ed25519.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Ensure the directory and file are owned by the user:

```bash
chown -R <username>:<username> ~/.ssh
```

The user can now log in using their private key. Keep the private key secure and never share it with others.

