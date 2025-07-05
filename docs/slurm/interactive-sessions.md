# Interactive Sessions

Interactive sessions let you run commands on a compute node and see the output immediately. They are best for debugging or short exploratory tasks.

## When to Use an Interactive Session

- Testing and debugging job scripts before submitting them as batch jobs
- Running quick commands that require immediate feedback
- Launching interactive tools such as Jupyter notebooks or GUI applications
- Exploring the environment or installing software interactively

For long-running workloads that do not require live interaction, submit a batch job instead of keeping an interactive session open.

## Starting an Interactive Session

Request a shell on a compute node with `srun`:

```bash
srun --pty bash
```

Specify resources to match your needs:

```bash
srun --partition=general --time=30:00 --cpus-per-task=4 --mem=4G --pty bash
```

To work on a GPU node, include the `--gres` option:

```bash
srun --gres=gpu:1 --pty bash
```

## Ending the Session

When finished, exit the shell to release the resources:

```bash
exit
```

