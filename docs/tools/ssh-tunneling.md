# Accessing Web Applications and X11

Running graphical applications or web interfaces on a compute node often
requires forwarding network connections through the login node. SSH tunnels make
this possible without opening additional firewall ports.

## Forwarding Web Applications

1. Start an interactive job and note the compute node name:
   ```bash
   salloc --partition=general --time=2:00:00 --nodes=1 --cpus-per-task=2
   ```
   After the job begins you will land on a node such as `compute001`.
2. Launch your application on that node. For Jupyter Lab:
   ```bash
   jupyter lab --no-browser --ip=0.0.0.0 --port=8888
   ```
3. From your local machine open a second terminal and create an SSH tunnel
   through the login node, replacing the host name with the one from step 1:
   ```bash
   ssh -L 8888:compute001:8888 <user>@login.cluster.example.com
   ```
   Point your web browser to `http://localhost:8888`. Use a different local port
   if 8888 is already in use.

## X11 Forwarding

X11 lets you run graphical programs on the cluster while displaying them on your
own computer. You need an X server installed locally (XQuartz on macOS, VcXsrv
or Xming on Windows, or just X11 on Linux).

1. Connect to the compute node with X forwarding enabled and jumping through the
   login node:
   ```bash
   ssh -X -J <user>@login.cluster.example.com <user>@compute001
   ```
2. Start a program like `xterm` or `xclock`. The window should appear on your
   desktop.

## Reverse Tunnels

When direct forwarding from the login node to the compute node is not permitted,
you can create a reverse tunnel from the compute node back to the login node:
```bash
ssh -R 8888:localhost:8888 <user>@login.cluster.example.com
```
After this command, connect from your local machine to the login node as
follows:
```bash
ssh -L 8888:localhost:8888 <user>@login.cluster.example.com
```
This sends traffic from your web browser through the login node to the compute
node running the application.
