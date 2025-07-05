# Working with Containers

Apptainer (formerly Singularity) allows you to run containerized applications on the cluster without administrator privileges.
This page covers the basic workflow for both the `apptainer` and `singularity` commands, which are mostly interchangeable.

## Loading the Module

Load the module provided by the cluster:

```bash
module load apptainer    # or: module load singularity
```

## Obtaining an Image

You can pull a pre-built image from an online registry or build one yourself.
To download from Docker Hub:

```bash
apptainer pull ubuntu.sif docker://ubuntu:22.04
```

The same syntax works with the `singularity` command if that is what your cluster provides.

## Running the Container

Execute commands inside the container with `run` or `exec`:

```bash
apptainer run ubuntu.sif
apptainer exec ubuntu.sif /bin/bash
```

Again, substitute `singularity` for `apptainer` if needed.

## Building Your Own Image

If you have a definition file named `recipe.def` you can build a SIF image:

```bash
apptainer build my_image.sif recipe.def
```

Distribute the resulting SIF file to run the container on other systems.

For more advanced options see the official [Apptainer documentation](https://apptainer.org/docs/) or [Singularity documentation](https://sylabs.io/guides/).
