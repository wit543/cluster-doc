# Using Modules

Environment modules allow you to easily switch between different versions of software on the cluster. The module command is provided by Lmod.

### Listing Modules

View everything that is available:

```bash
module avail
```

If you are looking for a particular package, search by name:

```bash
module spider <package>
```

### Loading a Module

Once you know the module name, load it into your environment:

```bash
module load gcc/12.1.0
```

List what is currently active with:

```bash
module list
```

Reset your environment and unload all modules with `module purge`.

### Checking the Module System Version

To see the installed Lmod version run:

```bash
module --version
```

More details and examples can be found in the [Environment Setup guide](slurm/environment.md).
