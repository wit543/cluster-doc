# Monitoring and Managing Jobs

### Viewing Jobs

See your queued or running jobs with:

```bash
squeue -u $USER
```
Add `-p <partition>` to filter by partition. Refer to the
[squeue documentation](https://slurm.schedmd.com/squeue.html) for more
options.

### Job History

After a job finishes, view its history using:

```bash
sacct -j <jobid>
```
Specify a start time with `-S` to view older records:

```bash
sacct -S yesterday
```

### Canceling Jobs

Stop a running or pending job with:

```bash
scancel <jobid>
```
You can cancel all of your jobs with `scancel -u $USER`. See the
[scancel documentation](https://slurm.schedmd.com/scancel.html) for
additional usage details.
