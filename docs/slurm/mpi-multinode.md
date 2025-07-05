# MPI and Multi-node Jobs

Many parallel applications use the Message Passing Interface (MPI) to
communicate across multiple tasks or nodes. The cluster provides
OpenMPI modules so you can run distributed workloads through Slurm.

## Loading an MPI Module

Load a compiler and MPI library before compiling or running your
programs:

```bash
module load gcc/12.1.0
module load openmpi
```

## Example Batch Script

The following script requests two nodes with four MPI tasks per node
and runs `mpi_hello` using `srun`:

```bash
#!/bin/bash
#SBATCH --job-name=mpi_test
#SBATCH --partition=general
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=4
#SBATCH --time=00:10:00
#SBATCH --output=slurm-%j.out

srun ./mpi_hello
```

Submit the script with `sbatch mpi_job.sh`. Slurm allocates two nodes
and launches a total of eight tasks.

## Running mpirun

You can also use `mpirun` provided by OpenMPI. Slurm automatically
provides the host list so a typical command inside the job script is:

```bash
mpirun ./mpi_hello
```

For hybrid MPI and OpenMP programs, specify the number of MPI tasks and
threads. For example, to run four tasks per node with two threads each:

```bash
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=4
#SBATCH --cpus-per-task=2
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
srun ./hybrid_app
```

This configuration launches eight MPI tasks in total with two OpenMP
threads per task across the allocated nodes.
