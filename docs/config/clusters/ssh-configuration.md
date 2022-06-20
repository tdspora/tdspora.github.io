---
title: SSH configuration
---

[Here](http://docs.paramiko.org/en/stable/api/config.html#keywords-currently-supported) is the list of currently supported ssh config options. 
[Here](https://man.openbsd.org/ssh_config) is the documentation on ssh config options in general including the ones we support.
[Here](https://unix.stackexchange.com/questions/150002/only-apply-match-keyword-to-single-host-in-ssh-config) is a discussion and example on how to use Match keyword and ProxyCommand.
Here's a possible ssh config that uses all options we support:
```
Host *
    AddressFamily inet
    CanonicalDomains com
    CanonicalizeFallbackLocal no
    CanonicalizeHostname no
    CanonicalizeMaxDots 1
    HostName example.com
    Port 22

Host proxy_server
    User user
    Port 22
    Hostname some_domain

Match host example.com exec not_inside_network
    ProxyCommand ssh -W %h:%p proxy_server
```

See more in [Spark Web UI Documentation](https://spark.apache.org/docs/latest/web-ui.html)
