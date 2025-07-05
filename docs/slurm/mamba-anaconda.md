# Mamba/Anaconda Environments

Mamba is a drop-in replacement for the `conda` package manager that
resolves dependencies faster. Both tools can create isolated
Python environments. Load the provided module and create a new
environment as follows:

```bash
module load mamba  # or module load anaconda
mamba create -y -n myenv python=3.10
conda activate myenv
```

Install packages inside the activated environment:

```bash
mamba install numpy pandas
```

To use the environment in a Slurm job script, load the module and
activate the environment before running your program:

```bash
#!/bin/bash
#SBATCH --job-name=conda-test
#SBATCH --partition=general
#SBATCH --time=00:10:00

module load mamba
conda activate myenv
srun python script.py
```

Export the environment specification if you need to recreate it later:

```bash
conda env export > myenv.yml
```
