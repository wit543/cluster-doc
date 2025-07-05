# Slurm Setup and Installation

This section is intended for **cluster administrators**. It outlines the basic steps to install and configure Slurm on new nodes.

## Installation

1. Install the packages on each server:

   ```bash
   sudo apt install slurm-wlm slurmdbd munge
   ```

2. Enable `munge` for authentication:

   ```bash
   sudo systemctl enable --now munge
   ```

## Controller Configuration

1. Copy a working `slurm.conf` from an existing cluster or generate one using `configurator.html` from the Slurm website.
2. Place `slurm.conf` in `/etc/slurm/` and adjust the node and partition definitions.
3. Start and enable the controller:

   ```bash
   sudo systemctl enable --now slurmctld slurmdbd
   ```

## Compute Node Configuration

1. Ensure the compute nodes have matching `slurm.conf` and munge key.
2. Start the Slurm daemon on each node:

   ```bash
   sudo systemctl enable --now slurmd
   ```

## Verification

Run a simple test job to verify that the scheduler and nodes are communicating:

```bash
srun hostname
```

Check the output and logs for any errors. For detailed configuration options consult the official Slurm documentation.
