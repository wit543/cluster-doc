# Text Editors and Tmux

This guide introduces three common terminal tools used on most Linux clusters: **nano**, **vim**, and **tmux**. Each section starts with the basics and moves on to more advanced usage.

## Nano

### Getting Started

- Launch nano with `nano filename`
- The shortcuts are listed at the bottom of the screen. Use `Ctrl+X` to exit, `Ctrl+O` to save.

### Useful Features

- `Ctrl+W` to search within the file
- `Alt+\` to jump to the beginning and `Alt+/` to jump to the end
- Enable syntax highlighting with `nano -Y <language>` if available

### Example Scenario: Quick Config Edit

Nano is ideal for small, quick edits when you are unfamiliar with other editors. Run:

```bash
nano ~/.bashrc
```
Edit the file, press `Ctrl+O` to write out, then `Ctrl+X` to quit.

## Vim

### Basic Commands

- `i` enters insert mode so you can type
- `Esc` returns to normal mode
- `:w` saves the file, `:q` quits, and `:wq` saves then quits

### Moving Around

- Use arrow keys or `h j k l` to move the cursor
- `gg` jumps to the top, `G` jumps to the bottom
- `/pattern` searches forward, `n` repeats the search

### Intermediate Usage

- Copy (`y`) and paste (`p`) lines or selections
- Undo with `u`, redo with `Ctrl+r`
- Split the window with `:split` or `:vsplit`

### Advanced Techniques

- Record macros with `q` followed by a register, replay with `@`
- Use visual block mode with `Ctrl+v` for column edits
- Combine commands like `:%s/old/new/g` for substitutions

### Example Scenario: Editing Job Scripts

When writing Slurm scripts, vim's syntax highlighting and powerful search make it easy to modify multiple lines. Open a script with:

```bash
vim submit.sh
```
Use search and replace to update module names quickly:

```vim
:%s/moduleA/moduleB/g
```

## Tmux

### Starting Out

- Launch a new session with `tmux`
- Detach from the session using `Ctrl+b` then `d`
- Reattach with `tmux attach`

### Managing Windows and Panes

- Create a new window with `Ctrl+b` then `c`
- Split horizontally with `Ctrl+b` then `"`
- Split vertically with `Ctrl+b` then `%`
- Switch panes using `Ctrl+b` then arrow keys

### Session Management

- List sessions with `tmux ls`
- Create named sessions: `tmux new -s mysession`
- Attach to a named session: `tmux attach -t mysession`

### Example Scenario: Long-Running Jobs

Use tmux to keep an interactive session alive while monitoring a job:

```bash
tmux new -s monitor
watch -n 30 squeue -u $USER
```
Detach with `Ctrl+b` then `d` and reattach later with `tmux attach -t monitor`.

## Summary

Nano is great for quick edits, vim offers powerful editing capabilities, and tmux lets you persist terminal sessions. Learning these tools will significantly improve your efficiency on the cluster.
