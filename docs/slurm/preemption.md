# Preemption

Preemption allows high priority jobs to run by pausing or terminating running low priority jobs. It is typically enabled on a dedicated partition or for jobs marked as preemptible.

### Why Preempt Jobs?

- Ensure urgent computations start quickly when resources are scarce.
- Keep hardware free for high priority workloads.
- Allow opportunistic jobs to use idle resources without delaying critical work.

### How Preemption Works

When a high priority job is scheduled and resources are unavailable, Slurm may preempt running jobs with lower priority. Depending on cluster configuration:

- The job may be requeued and restarted later when resources free up.
- The job may be canceled entirely.

Preempted jobs that are requeued will start from the beginning unless your application supports checkpointing.

### Submitting Preemptible Jobs

Check available partitions with `sinfo`. Many clusters provide a partition named `preempt` (or similar) for jobs that can be interrupted.

```bash
#SBATCH --partition=preempt
#SBATCH --requeue       # allow Slurm to requeue the job when preempted
```

Submit your script with `sbatch job.sh`. Use `squeue` to monitor status. Jobs in the preemptible partition may run immediately but can be stopped when resources are required elsewhere.

### Effect on Your Job

- Execution may stop at any time if a higher priority job needs the resources.
- If `--requeue` was set and the partition allows it, the job is placed back in the queue and will restart from the beginning once resources are free.
- If not requeued, the job will be canceled and you must resubmit it manually.

### Good Use Cases

Preemptible partitions are ideal for:

- Long, low-priority simulations that do not need to finish quickly.
- Opportunistic data analysis or testing that can be restarted.
- Workloads with built-in checkpointing or frequent save points.

Using preemptible resources lets you take advantage of otherwise idle hardware while ensuring that critical jobs are never delayed.

