# Monitoring and Managing Jobs

### Viewing Jobs

See your queued or running jobs with either `squeue -u $USER` or the shorthand
`squeue --me`:

```bash
squeue --me
```
Add `-p <partition>` to filter by partition. Refer to the
[squeue documentation](https://slurm.schedmd.com/squeue.html) for more
options.

The output lists job identifiers, partitions, job names, states, and more:

```
JOBID PARTITION     NAME     USER ST       TIME NODES NODELIST(REASON)
12345 general   my_job   alice  R       0:01     1 compute1
```

`ST` shows the job state. Common values include `PD` (pending), `R`
(running), `CG` (completing), and `CD` (completed). See the
[Slurm state codes](https://slurm.schedmd.com/squeue.html#SECTION_JOB-STATE-CODES)
for the full list.

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

### Job Priority

The scheduler decides which jobs start first based on priority. Display the
priority of your queued jobs with:

```bash
squeue --me -o "%i %9Q %t %M %j"
```

`%Q` shows the numeric priority assigned to each job. Higher values run
sooner. For a more detailed breakdown of how priority is calculated, use
`sprio` and consult the
[Slurm scheduling documentation](https://slurm.schedmd.com/sprio.html).
