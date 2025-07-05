# Apptainer Containers

Apptainer (formerly Singularity) allows you to run containerized applications without requiring administrator privileges. It is commonly used to package software stacks for HPC clusters.

### Loading the Apptainer Module

First load the module provided by the cluster:

```bash
module load apptainer
```

### Obtaining an Image

You can pull a pre-built image from an online registry or build one yourself. To download from Docker Hub:

```bash
apptainer pull ubuntu.sif docker://ubuntu:22.04
```

### Running the Container

Execute commands inside the container with `run` or `exec`:

```bash
apptainer run ubuntu.sif
apptainer exec ubuntu.sif /bin/bash
```

### Building Your Own Image

If you have a definition file named `recipe.def` you can build a SIF image:

```bash
apptainer build my_image.sif recipe.def
```

Apptainer will create the container in the current directory. You can then distribute the single SIF file to other systems.

See the official [Apptainer documentation](https://apptainer.org/docs/) for more options and configuration details.
