---
title: Cluster connection environment variables
---

The **Environment variables** section of the cluster configuration page allows you to pass additional environment variables to the SSH session that executes the `spark-submit` command. However, SSH sessions does not accept setting of environment variables unless specifically enabled in the SSH demon configuration (`/etc/ssh/sshd_config`).

- [Why is “AcceptEnv *” considered insecure?](https://serverfault.com/questions/427522/why-is-acceptenv-considered-insecure)
- [Paramiko Documentation](http://docs.paramiko.org/en/stable/api/channel.html#paramiko.channel.Channel.set_environment_variable)

To enable the feature on a remote machine
1. Connect to the remote machine in a terminal application
2. Edit the file `/etc/ssh/sshd_config` using a text editor such as `vi` or `nano`.
3. Append the below line to the file:
```
AcceptEnv <Environment Variable Name>
``` 
4. Save the file
5. Restart sshd service on an Ubuntu or Debian Linux using the following command: 
```
sudo systemctl restart ssh.service
```

**Note**: You need `sudo` permissions for this
