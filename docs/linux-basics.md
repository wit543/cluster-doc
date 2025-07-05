# Basic Linux Usage

Linux is an operating system commonly used on servers and clusters. This page outlines a few simple commands to help you get started.

## Navigating the File System

Check your current location:

```bash
pwd
```

List files and directories:

```bash
ls -l
```

Change directories:

```bash
cd /path/to/directory
```

## Working with Files

Create an empty file:

```bash
touch newfile.txt
```

Copy a file:

```bash
cp source.txt destination.txt
```

Move or rename a file:

```bash
mv oldname.txt newname.txt
```

Remove a file:

```bash
rm unwanted.txt
```

Create a directory:

```bash
mkdir myfolder
```

## Viewing File Contents

Quickly print a file to the terminal:

```bash
cat file.txt
```

Scroll through a file one page at a time:

```bash
less file.txt
```

Exit `less` by pressing `q`.

## Installing Packages

Debian-based distributions use `apt` for package management:

```bash
sudo apt update
sudo apt install package-name
```

## Getting Help

Most commands include manual pages. Use `man` followed by the command name to read them:

```bash
man ls
```

These basics should help you begin working with Linux on the cluster.
