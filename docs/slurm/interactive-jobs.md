# Running Interactive Jobs

Interactive sessions are useful for debugging or running short tasks.

### Basic Usage

Request an interactive shell with:

```bash
srun --pty bash
```

Specify resources such as the partition, CPUs, or runtime to avoid using
defaults that may not suit your workload:

```bash
srun --partition=general --time=30:00 --cpus-per-task=4 --pty bash
```

### Requesting GPUs

To run on a GPU, ask for the resource explicitly:

```bash
srun --gres=gpu:1 --pty bash
```
Add other options such as memory or time limits as needed. More examples
are available in the [srun documentation](https://slurm.schedmd.com/srun.html).
