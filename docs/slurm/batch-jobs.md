# Submitting Batch Jobs

Prepare a job script and submit it with `sbatch`.

### Example Script

```bash
#!/bin/bash
#SBATCH --job-name=test
#SBATCH --partition=general
#SBATCH --nodes=1
#SBATCH --time=01:00:00
#SBATCH --mem=4G
#SBATCH --output=slurm-%j.out

# Request one GPU if needed
#SBATCH --gres=gpu:1

srun my_application
```

Submit the job:

```bash
sbatch job.sh
```

Check its status with:

```bash
squeue -u $USER
```

See the [sbatch documentation](https://slurm.schedmd.com/sbatch.html) for
additional directives such as email notifications or array jobs.
