# Slurm Cluster Basics

This page outlines the key topics usually included in cluster documentation when Slurm is the workload manager.

## 1. Overview
- Purpose of the cluster and typical workloads
- Key policies or usage agreements

## 2. Accessing the Cluster
- SSH login instructions
- Account creation and password policies

## 3. Environment Setup
- Loading modules for compilers, MPI, and applications
- Creating virtual environments or user software stacks

## 4. Submitting Batch Jobs
- Basic `sbatch` script structure
- Example Slurm directives (`--partition`, `--nodes`, `--time`, `--mem`)
- Checking job status with `squeue`

## 5. Running Interactive Jobs
- Using `srun` for interactive sessions
- Requesting GPUs or other resources

## 6. Monitoring and Managing Jobs
- Viewing queued and running jobs
- Retrieving job history with `sacct`
- Canceling jobs with `scancel`

## 7. Storage and File Systems
- Home vs. scratch storage locations
- Data management best practices

## 8. Helpful Commands
- Common Slurm utilities (`sinfo`, `scontrol`, etc.)
- Tips for troubleshooting job issues

## 9. Getting Help
- Documentation links and built-in `man` pages
- Contact information for cluster support staff

