# Singularity Containers

Singularity was the original name of Apptainer. Many clusters still ship the command as `singularity`.

### Loading the Singularity Module

If available, load it like any other module:

```bash
module load singularity
```

### Downloading an Image

Images can be pulled from remote registries or local paths. For example:

```bash
singularity pull alpine.sif docker://alpine:latest
```

### Using the Image

Run a shell inside the container or execute a specific program:

```bash
singularity shell alpine.sif
singularity exec alpine.sif cat /etc/os-release
```

### Building Custom Images

With a definition file you can create your own container:

```bash
singularity build custom.sif Singularity.def
```

Refer to the [Singularity documentation](https://sylabs.io/guides/) for a complete walkthrough of advanced features and configuration options.
