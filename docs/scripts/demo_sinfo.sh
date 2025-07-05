#!/bin/bash
cat <<'OUT'
[root@ist-frontend-003 ~]# sinfo
PARTITION         AVAIL  TIMELIMIT  NODES  STATE NODELIST
cpu*                 up 7-00:00:00      4   idle ist-compute-1-[001-004]
bash-cpu             up    2:00:00      1   idle ist-compute-1-004
gpu-cluster          up 3-00:00:00      1  maint ist-gpu-03
gpu-cluster          up 3-00:00:00     13    mix ist-gpu-[01-02,04-11,14-16]
gpu-cluster          up 3-00:00:00      2   idle ist-gpu-[12-13]
bash-gpu-cluster     up    2:00:00      1  maint ist-gpu-03
bash-gpu-cluster     up    2:00:00     13    mix ist-gpu-[01-02,04-11,14-16]
bash-gpu-cluster     up    2:00:00      2   idle ist-gpu-[12-13]
scads                up 7-00:00:00      1   idle ist-dgx04
scads-a100           up 5-00:00:00      2   idle ist-gpu-a100-[01-02]
g-scads              up 5-00:00:00      2   idle ist-gpu-a100-[01-02]
nrl-a100-deadline    up 10-00:00:0      1   idle ist-gpu-a100-02
deadline             up 10-00:00:0      1  maint ist-gpu-03
deadline             up 10-00:00:0     13    mix ist-gpu-[01-02,04-11,14-16]
deadline             up 10-00:00:0      6   idle ist-compute-1-[001-004],ist-gpu-[12-13]
a100-guest           up 3-00:00:00      2  maint ist-a100-[05-06]
a100-guest           up 3-00:00:00      1    mix ist-a100-02
a100-guest           up 3-00:00:00      3  alloc ist-a100-[01,03-04]
a100                 up   infinite      2  maint ist-a100-[05-06]
a100                 up   infinite      1    mix ist-a100-02
a100                 up   infinite      3  alloc ist-a100-[01,03-04]
OUT
