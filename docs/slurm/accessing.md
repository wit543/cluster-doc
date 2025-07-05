# Accessing the Cluster

### SSH Login

Use SSH to connect to the login node:

```bash
ssh <username>@cluster.example.com
```

Replace `<username>` with your account name. The first time you log in,
you may be asked to verify the host key. Some institutions require
connecting through a VPN or multi-factor authentication, so consult your
local IT instructions if you encounter connection issues.

### Account Creation

Accounts are provisioned by the cluster administrators. After your
account is created, log in and change your password with:

```bash
passwd
```

Choose a strong password and never share it with others.

For details about connecting with OpenSSH see the [official manual](https://www.openssh.com/manual.html).
