# Monitoring and Managing Jobs

### Viewing Jobs

See your queued or running jobs with:

```bash
squeue -u $USER
```
Add `-p <partition>` to filter by partition. Refer to the
[squeue documentation](https://slurm.schedmd.com/squeue.html) for more
options.

A typical `squeue` table looks like this:

```
 JOBID PARTITION     NAME     USER ST  TIME  NODES NODELIST(REASON)
 1234  general   myjob    alice  R  0:10      1   node01
 1235  general   myjob    alice  PD  0:00      1   (Priority)
```

The important columns are:

- **JOBID** – the numeric identifier used with other commands
- **ST** – the state of the job (`R` running, `PD` pending, `CG` completing, `CD` completed, `F` failed)
- **NODELIST(REASON)** – either the node running the job or why it is waiting

See the [Slurm job states documentation](https://slurm.schedmd.com/squeue.html#SECTION_JOB-STATES) for the full list of codes.

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

### Viewing Job Priority

Check a job's priority with:

```bash
sprio -j <jobid>
```
For more detail, run `scontrol show job <jobid>` and look for the `Priority` field.
Slurm calculates priority from factors such as fairshare, job age, and QOS.
See the [priority overview](https://slurm.schedmd.com/job_prio.html) on the Slurm website for an explanation of how it works.
