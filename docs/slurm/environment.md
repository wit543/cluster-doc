# Environment Setup

The cluster uses environment modules to manage compilers, MPI libraries
and application software. Modules allow you to easily switch between
different versions of tools without altering your shell configuration.

### Loading Modules

View available modules with:

```bash
module avail
```

List currently loaded modules with `module list` and reset your
environment using `module purge` if needed.

Load a compiler or application module, for example:

```bash
module load gcc/12.1.0
module load openmpi
```

### Virtual Environments

To create a Python virtual environment for your own software stack:

```bash
module load python
python -m venv ~/envs/myenv
source ~/envs/myenv/bin/activate
```

Install packages as needed in the activated environment.

See the [Lmod documentation](https://lmod.readthedocs.io/en/latest/) for
more module commands and examples.
