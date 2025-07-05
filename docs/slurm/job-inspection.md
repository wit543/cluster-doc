# Inspecting Job Output and Status

When a Slurm job does not behave as expected, you can investigate it in several ways. Start with the log files produced by your job script and then consult Slurm utilities for more details.

## Output and Error Files

By default `sbatch` writes both standard output and standard error to `slurm-<jobid>.out`. You can change this in your job script using `#SBATCH --output` and `#SBATCH --error` directives:

```bash
#SBATCH --output=myjob.out
#SBATCH --error=myjob.err
```

Check these files first when something goes wrong. They contain all messages printed by your job and many common application errors.

## `scontrol` for Active Jobs

While a job is queued or running, `scontrol show job <jobid>` displays detailed information such as allocated nodes, memory, and current state. This is useful for confirming that your requested resources were granted.

**Pros**
- Real-time view of the job as it runs
- Shows reasons why a job is pending

**Cons**
- Information disappears after the job record is purged

## `sacct` for Finished Jobs

After completion, use `sacct -j <jobid>` to view accounting data including elapsed time, memory usage, and exit code.

**Pros**
- Summarizes resource usage and final state
- Works even after the job has finished

**Cons**
- Limited to stored accounting fields; does not show live details

## `sacctmgr` for Account Managers

Administrators can query the accounting database directly with `sacctmgr`. Typical users may not have permission, but the command can reveal project and QOS settings when enabled:

```bash
sacctmgr show job <jobid>
```

**Pros**
- Provides authoritative records from the accounting database
- Useful for auditing and troubleshooting complex issues

**Cons**
- Often restricted to admin roles
- More verbose and slower than `sacct`

### When to Use Each Tool

1. **Output/error files** – first place to look for program messages and errors.
2. **`scontrol`** – check a running or pending job's configuration and allocation.
3. **`sacct`** – review statistics and exit status after the job ends.
4. **`sacctmgr`** – administrative view for historical or policy-related data.

Use them together to diagnose problems: start with the logs, inspect the active job with `scontrol`, and consult `sacct` or `sacctmgr` for post-run details.
