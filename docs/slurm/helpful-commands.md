# Helpful Commands

### Slurm Utilities

- `sinfo` – view available partitions and nodes

Below is an example of the command output captured with
[`terminalizer`](https://github.com/faressoft/terminalizer). The `sinfo-demo.gif`
image in this repository is just a tiny text placeholder; the GitHub Actions
workflow will overwrite it with a real recording when it runs:

![sinfo demo](../images/sinfo-demo.gif)
- `scontrol show job <jobid>` – detailed job information
- `squeue -l` – extended job listing

Use `sinfo` frequently to check which partitions are available. The
official man page provides a full description of its output at
[slurm.schedmd.com/sinfo.html](https://slurm.schedmd.com/sinfo.html).

### Troubleshooting Tips

Check your job's output and error files if it fails to run. The command
`scontrol show job <jobid>` often provides clues about resource or
configuration issues.
